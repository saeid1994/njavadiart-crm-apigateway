const Home = require("../../../models/panel/property/v1/Home");
const HomeCusomer = require("../../../models/panel/customer/v1/Home");
const { convertNullParams, convertNullFields } = require("../../../../util");
const { validationResult } = require("express-validator/check");

exports.getProperties = async (req, res, next) => {
  try {
    const convertedUserInput = convertNullFields(req.params);

    const count = await Home.getPropertiesCount(convertedUserInput);
    const data = await Home.getProperties(convertedUserInput);
    console.log(data);

    return res.json({
      status: "success",
      message: "properties have successfully received",
      data,
      totalCount: count.totalCount,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPropertyById = async (req, res, next) => {
  try {
    const data = await Home.getPropertyById(req.params);
    return res.json({
      status: "success",
      message: "properties have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getFilteredProperties = async (req, res, next) => {
  try {
    const params = convertNullParams(req.params);
    const data = await Home.getFilteredProperties(params);

    return res.json({
      status: "success",
      message: "properties have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPropertyTypes = async (req, res, next) => {
  try {
    const data = await Home.getPropertyTypes();

    return res.json({
      status: "success",
      message: "getPropertyTypes have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPropertyUsageTypes = async (req, res, next) => {
  try {
    const data = await Home.getPropertyUsageTypes();
    return res.json({
      status: "success",
      message: "getPropertyUsageTypes have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addProperty = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }

    const statusInfo = req.body.statusInfo;
    const statusId = req.body.statusId;
    const sellInfo = req.body.sellInfo;
    const rentInfo = req.body.rentInfo;
    const typeInfo = req.body.typeInfo;
    const prePaymentInfo = req.body.prePaymentInfo;
    const otherOptionsInfo = req.body.otherOptionsInfo;

    let sellResult, rentResult, prePaymentResult, propertyId;

    let forSell = null;
    let forRent = null;
    let forPrePayment = null;

    if (statusId === 1) forSell = 1;
    if (statusId === 2) forRent = 1;
    if (statusId === 3) forPrePayment = 1;
    // insert data into property address
    const address = await Home.addPropertyAddress({
      ...statusInfo,
    });

    // insert data into property sp
    const property = await Home.addProperty({
      addressId: address.addressId,
      forSell,
      forRent,
      forPrePayment,
      ...req.body,
      ...statusInfo,
      ...typeInfo,
      ...otherOptionsInfo,
      ...sellInfo,
      ...rentInfo,
      ...prePaymentInfo,
      description: statusInfo.description,
    });

    //adding new customer and get customer Id
    const customer = await HomeCusomer.addCustomer({
      propertyId: property.propertyId,
      ...req.body,
    });

    req.body.customerId = customer.customerId;

    //inserting sellInfo
    if (statusId === 1) {
      sellResult = await Home.addPorpertySellInfo({
        ...sellInfo,
        propertyId: property.propertyId,
      });
    }

    //inserting rentInfo
    if (statusId === 2) {
      rentResult = await Home.addPorpertyRentInfo({
        ...rentInfo,
        propertyId: property.propertyId,
      });
    }

    //inserting prePayment
    if (statusId === 3) {
      prePaymentResult = await Home.addPorpertyPrePaymentInfo({
        ...prePaymentInfo,
        propertyId: property.propertyId,
      });
    }

    // adding features into features table
    if (statusInfo.features.length) {
      for (const item of statusInfo.features) {
        Home.addFeatures({
          propertyId: property.propertyId,
          featureId: item,
        });
      }
    }

    if (typeInfo.buildingFacadeIds) {
      Home.addBuildingFacade({
        propertyId: property.propertyId,
        buildingFacadesId: typeInfo.buildingFacadeIds,
      });
    }

    if (typeInfo.floorCoveringIds) {
      Home.addFloorCovering({
        propertyId: property.propertyId,
        floorCoveringId: typeInfo.floorCoveringIds,
      });
    }

    if (typeInfo.kitchenFeatureIds) {
      Home.addKitchenFeature({
        propertyId: property.propertyId,
        kitchenFeatursId: typeInfo.kitchenFeatureIds,
      });
    }
    // adding basic feature
    if (typeInfo.basicFeatures) {
      // adding water
      if (typeInfo.basicFeatures.water) {
        Home.addBasicFeature({
          propertyId: property.propertyId,
          basicFeatureId: 1,
          statusId: typeInfo.basicFeatures.water,
        });
      }
      // adding electricity
      if (typeInfo.basicFeatures.electricity) {
        Home.addBasicFeature({
          propertyId: property.propertyId,
          basicFeatureId: 2,
          statusId: typeInfo.basicFeatures.electricity,
        });
      }
      // adding gas
      if (typeInfo.basicFeatures.gas) {
        Home.addBasicFeature({
          propertyId: property.propertyId,
          basicFeatureId: 3,
          statusId: typeInfo.basicFeatures.gas,
        });
      }
      // adding phone
      if (typeInfo.basicFeatures.phone) {
        Home.addBasicFeature({
          propertyId: property.propertyId,
          basicFeatureId: 4,
          statusId: typeInfo.basicFeatures.phone,
        });
      }
    }

    // adding coolings
    if (otherOptionsInfo.coolings) {
      otherOptionsInfo.coolings.map((coolingId) => {
        Home.addCoolings({ propertyId: property.propertyId, coolingId });
      });
    }

    // adding heatings
    if (otherOptionsInfo.heatings) {
      otherOptionsInfo.heatings.map((heatingId) => {
        Home.addHeatings({ propertyId: property.propertyId, heatingId });
      });
    }
    return res.json({
      status: "success",
      message: "با موفقیت ثبت شد",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: "error",
      message: "خطای سرور",
    });
  }
};

exports.getDocumentTypes = async (req, res, next) => {
  try {
    const data = await Home.getDocumentTypes();
    return res.json({
      status: "success",
      message: "getDocumentTypes have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getRentPrefers = async (req, res, next) => {
  try {
    const data = await Home.getRentPrefers();
    return res.json({
      status: "success",
      message: "getRentPrefers have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getDirections = async (req, res, next) => {
  try {
    const data = await Home.getDirections();
    return res.json({
      status: "success",
      message: "getDirections have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getStatuses = async (req, res, next) => {
  try {
    const data = await Home.getStatuses();
    return res.json({
      status: "success",
      message: "getStatuses have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getUsages = async (req, res, next) => {
  try {
    const data = await Home.getUsages();
    return res.json({
      status: "success",
      message: "getUsages have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getBuildingFacades = async (req, res, next) => {
  try {
    const data = await Home.getBuildingFacades();
    return res.json({
      status: "success",
      message: "getBuildingFacades have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getFloorCoverings = async (req, res, next) => {
  try {
    const data = await Home.getFloorCoverings();
    return res.json({
      status: "success",
      message: "getFloorCoverings have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getKitchenFeatures = async (req, res, next) => {
  try {
    const data = await Home.getKitchenFeatures();
    return res.json({
      status: "success",
      message: "getKitchenFeatures have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getFloors = async (req, res, next) => {
  try {
    const data = await Home.getFloors();
    return res.json({
      status: "success",
      message: "getFloors have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCoolings = async (req, res, next) => {
  try {
    const data = await Home.getCoolings();
    return res.json({
      status: "success",
      message: "getCoolings have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getHeatings = async (req, res, next) => {
  try {
    const data = await Home.getHeatings();
    return res.json({
      status: "success",
      message: "getHeatings have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getFeatures = async (req, res, next) => {
  try {
    const data = await Home.getFeatures();
    return res.json({
      status: "success",
      message: "getFeatures have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPropertiesPublic = async (req, res, next) => {
  try {
    const convertedUserInput = convertNullFields(req.params);
    const data = await Home.getPropertiesPublic(convertedUserInput);

    return res.json({
      status: "success",
      message: "getPropertiesPublic have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
