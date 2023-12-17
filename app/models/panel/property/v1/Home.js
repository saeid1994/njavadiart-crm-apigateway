const mysql = require("mysql2");
let appConfig = require("config");
const mySqlCon = mysql.createConnection({
  host: "polly.iran.liara.ir",
  user: "root",
  port: "33395",
  password: "vEdZyMLXlhFgBwguixMKKa4Y",
  database: "akbari-realestate",
});

const GetResultOfAdvanceSearch = async function (params) {
  let query = `call GET_SEARCHADVANCERESULT_V1(?,?,?,?,?,?,?,?,?,?)`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.fromMeter,
        params.toMeter,
        params.fromPrice,
        params.toPrice,
        params.fromYear,
        params.toYear,
        params.statusOfProperty || 1,
        params.propertyType || "آپارتمان",
        params.pageNum,
        params.recordsPerPage,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        res = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const getProperties = async function (params) {
  let query = `call GET_PROPERTIES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.limitNo,
        params.pageNo,
        params.status,
        params.mobile,
        params.rowNo,
        params.areaId,
        params.fromTotalPrice,
        params.toTotalPrice,
        params.fromAge,
        params.toAge,
        params.fromFloorId,
        params.toFloorId,
        params.fromSpace,
        params.toSpace,
        params.fromInfrastructure,
        params.toInfrastructure,
        params.typeId,
        params.usageId,
        params.fromCountRooms,
        params.toCountRooms,
        params.fromCountUnits,
        params.toCountUnits,
        params.fromMortgagePrice,
        params.toMortgagePrice,
        params.fromRentPrice,
        params.toRentPrice,
        params.fromTotalPricePrePayment,
        params.toTotalPricePrePayment,
        params.searchDescription,
        params.publishStatus,
        params.featureOne,
        params.featureTwo,
        params.featureThree,
        params.featureFour,
        params.featureFive,
        params.featureSix,
        params.featureSeven,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        res = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const getPropertyById = async function (params) {
  let query = `call GET_PROPERTY_BY_ID(?)`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, [params.id], (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      [res] = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getPropertiesCount = async function (params) {
  let query = `call GET_PROPERTIES_COUNT(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.limitNo,
        params.pageNo,
        params.status,
        params.mobile,
        params.rowNo,
        params.areaId,
        params.fromTotalPrice,
        params.toTotalPrice,
        params.fromAge,
        params.toAge,
        params.fromFloorId,
        params.toFloorId,
        params.fromSpace,
        params.toSpace,
        params.fromInfrastructure,
        params.toInfrastructure,
        params.typeId,
        params.usageId,
        params.fromCountRooms,
        params.toCountRooms,
        params.fromCountUnits,
        params.toCountUnits,
        params.fromMortgagePrice,
        params.toMortgagePrice,
        params.fromRentPrice,
        params.toRentPrice,
        params.fromTotalPricePrePayment,
        params.toTotalPricePrePayment,
        params.searchDescription,
        params.publishStatus,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const getFilteredProperties = async function (params) {
  let query = `call GET_PROPERTIESFILTERED_V1(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.mobile,
        params.code,
        params.fromPrice,
        params.toPrice,
        params.fromAge,
        params.toAge,
        params.fromFloor,
        params.toFloor,
        params.fromInfrastructure,
        params.toInfrastructure,
        params.fromSpace,
        params.toSpace,
        params.typeId,
        params.usageId,
        params.fromRoomCount,
        params.toRoomCount,
        params.fromUnit,
        params.toUnit,
        params.areaId,
        params.statusId,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        res = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const getPropertyTypes = async function () {
  let query = `call GET_PROPERTY_TYPES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};
const getPropertyUsageTypes = async function () {
  let query = `call GET_PROPERTYUSAGETYPES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const addPropertyAddress = async function (params) {
  let query = `call ADD_PROPERTY_ADDRESS(?,?,?,?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.address,
        params.streetId,
        params.ally,
        params.areaId,
        params.plaque,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addProperty = async function (params) {
  let query = `call ADD_PROPERTY(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.customerRoleId,
        params.usageId,
        params.propertyTypeId,
        params.space,
        params.infrastructure,
        params.floorNumber,
        params.floorCount,
        params.unitInFloorCount,
        params.roomCount,
        params.forSell,
        params.forRent,
        params.forPrePayment,
        params.documentTypeId,
        params.dong,
        params.directionId,
        params.propertyStatuses,
        params.buildStatus,
        params.age,
        params.addressId,
        params.ceilingHeight,
        params.seprateEntrance,
        params.deadEndAlley,
        params.allyMeter,
        params.description,
        params.dimensionsHouse,
        params.margin,
        params.publishStatus,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const getDocumentTypes = async function () {
  let query = `call GET_PROPERTY_DOCUMENT_TYPES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getRentPrefers = async function () {
  let query = `call GET_PROPERTY_PREFERS();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getDirections = async function () {
  let query = `call GET_DIRECTIONS();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getStatuses = async function () {
  let query = `call GET_PROPERTY_STATUSES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getUsages = async function () {
  let query = `call GET_PROPERTY_USAGETYPES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getBuildingFacades = async function () {
  let query = `call GET_PROPERTY_BULDINGFACADES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getFloorCoverings = async function () {
  let query = `call GET_FLOORCOVERING();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getKitchenFeatures = async function () {
  let query = `call GET_PROPERTY_KITCHENFEATURES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getFloors = async function () {
  let query = `call GET_PROPERTY_FLOORS();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getCoolings = async function () {
  let query = `call GET_PROPERTY_COOLINGS();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getHeatings = async function () {
  let query = `call GET_PROPERTY_HEATINGS();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getFeatures = async function () {
  let query = `call GET_PROPERTY_FEATURES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const addPorpertySellInfo = async function (params) {
  let query = `call ADD_PROPERTYSELLINFO(?,?,?,?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.propertyId,
        params.totalPrice,
        params.exchange,
        params.densityId,
        params.exchangeDescription,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addPorpertyRentInfo = async function (params) {
  let query = `call ADD_PROPERTYRENTINFO(?,?,?,?,?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.propertyId,
        params.mortgagePrice,
        params.rentPrice,
        params.preferRentId,
        params.exchangeToPercent,
        params.ownerIsIn,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addPorpertyPrePaymentInfo = async function (params) {
  let query = `call ADD_PROPERTYPREPAYMENTINFO(?,?,?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.propertyId,
        params.totalPrice,
        params.prePaymentPrice,
        params.exchange,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addFeatures = async function (params) {
  let query = `call ADD_PROPERTIES_FEATURES(?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [params.propertyId, params.featureId],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addUsages = async function (params) {
  let query = `call ADD_PROPERTIES_USAGES(?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [params.propertyId, params.usageId],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addBuildingFacade = async function (params) {
  let query = `call ADD_PROPERTIES_BUILDINGFACADES(?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [params.propertyId, params.buildingFacadesId],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addFloorCovering = async function (params) {
  let query = `call ADD_PROPERTY_FLOORCOVERING(?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [params.propertyId, params.floorCoveringId],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addKitchenFeature = async function (params) {
  let query = `call ADD_PROPERTIES_KITCHENFEATURES(?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [params.propertyId, params.kitchenFeatursId],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addBasicFeature = async function (params) {
  let query = `call ADD_PROPERTIES_BASICFEATURES(?,?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [params.propertyId, params.basicFeatureId, params.statusId],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addCoolings = async function (params) {
  let query = `call ADD_PROPERTIES_COOLINGS(?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [params.propertyId, params.coolingId],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

const addHeatings = async function (params) {
  let query = `call ADD_PROPERTIES_HEATINGS(?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [params.propertyId, params.heatingId],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};
const getPropertiesPublic = async function (params) {
  let query = `call GET_PUBLIC_PROPERTIES(?,?,?,?,?,?,?,?,?,?,?,?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.pageNo,
        params.typeId,
        params.status,
        params.fromSpace,
        params.toSpace,
        params.fromTotalPrice,
        params.toTotalPrice,
        params.fromMortgagePrice,
        params.toMortgagePrice,
        params.fromTotalPricePrePayment,
        params.toTotalPricePrePayment,
        params.fromAge,
        params.toAge,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        res = JSON.parse(res);
        return resolve(res);
      }
    );
  });
};

module.exports = {
  getPropertyById,
  addCoolings,
  addHeatings,
  addBasicFeature,
  addFloorCovering,
  addKitchenFeature,
  addBuildingFacade,
  addUsages,
  addFeatures,
  addPorpertyPrePaymentInfo,
  addPorpertySellInfo,
  addPorpertyRentInfo,
  getFeatures,
  getHeatings,
  getCoolings,
  GetResultOfAdvanceSearch,
  getProperties,
  getFilteredProperties,
  getPropertyTypes,
  getPropertyUsageTypes,
  addPropertyAddress,
  addProperty,
  getDocumentTypes,
  getRentPrefers,
  getDirections,
  getStatuses,
  getUsages,
  getBuildingFacades,
  getFloorCoverings,
  getKitchenFeatures,
  getFloors,
  getPropertiesCount,
  getPropertiesPublic,
};
