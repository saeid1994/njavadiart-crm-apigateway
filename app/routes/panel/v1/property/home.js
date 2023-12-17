const express = require("express");
const router = express.Router();
const HomeController = require("../../../../controllers/panel/property/HomeController");
const { check, body } = require("express-validator/check");

// const { check } = require("express-validator/check");

// router.get(
//   "/:mobile/:code/:fromPrice/:toPrice/:fromAge/:toAge/:fromFloor/:toFloor/:fromInfrastructure/:toInfrastructure/:fromSpace/:toSpace/:typeId/:usageId/:fromRoomCount/:toRoomCount/:fromUnit/:toUnit/:areaId/:statusId",
//   HomeController.getFilteredProperties
// );

router.get("/types", HomeController.getPropertyTypes);

router.get("/usageTypes", HomeController.getPropertyUsageTypes);

router.post(
  "/",
  [
    check("firstName", "نام را وارد کنید").not().isEmpty(),
    check("lastName", "نام خانوادگی را وارد کنید").not().isEmpty(),
    check("phone", "تلفن ثابت را وارد کنید").not().isEmpty(),
    check("phone")
      .isLength({ max: 11 })
      .withMessage("حداکثر ارقام تلفن باید ۱۱ رقم باشد"),
    check("mobile", "موبایل را وارد کنید").not().isEmpty(),
    check("mobile")
      .isLength({ max: 11 })
      .withMessage("حداکثر ارقام موبایل باید ۱۱ رقم باشد"),
    body("sellInfo").custom((value, { req }) => {
      // Check if statusId is 1
      const { statusId } = req.body;
      if (statusId === 1) {
        // If statusId is 1, check if 'totalPrice' exists and is not empty
        if (value.totalPrice === null) {
          throw new Error("Total price is required when status ID is 1");
        }
      }
      // Return true if the validation passes
      return true;
    }),
    body("rentInfo").custom((value, { req }) => {
      // Check if statusId is 1
      const { statusId } = req.body;
      if (statusId === 2) {
        // If statusId is 1, check if 'totalPrice' exists and is not empty
        if (value.mortgagePrice === null) {
          throw new Error("Total dfd is required when status ID is 1");
        }
      }
      // Return true if the validation passes
      return true;
    }),
    body("prePaymentInfo").custom((value, { req }) => {
      // Check if statusId is 1
      const { statusId } = req.body;
      if (statusId === 3) {
        // If statusId is 1, check if 'totalPrice' exists and is not empty
        if (value.totalPrice === null) {
          throw new Error("Total dfdd is required when status ID is 1");
        }
      }
      return true;
    }),
    body("statusInfo").custom((value, { req }) => {
      if (!value.propertyTypeId) {
        throw new Error("propertyTypeId is required");
      }
      return true;
    }),
    body("typeInfo").custom((value, { req }) => {
      if (!value.usageId) {
        throw new Error("usageId is required");
      }
      return true;
    }),
  ],
  HomeController.addProperty
);

router.get("/:id", HomeController.getPropertyById);

router.get(
  "/:limitNo/:pageNo/:status/:mobile/:rowNo/:areaId/:fromTotalPrice/:toTotalPrice/:fromAge/:toAge/:fromFloorId/:toFloorId/:fromSpace/:toSpace/:fromInfrastructure/:toInfrastructure/:typeId/:usageId/:fromCountRooms/:toCountRooms/:fromCountUnits/:toCountUnits/:fromMortgagePrice/:toMortgagePrice/:fromRentPrice/:toRentPrice/:fromTotalPricePrePayment/:toTotalPricePrePayment/:searchDescription/:publishStatus/:featureOne/:featureTwo/:featureThree/:featureFour/:featureFive/:featureSix/:featureSeven",
  HomeController.getProperties
);

router.get("/documentTypes", HomeController.getDocumentTypes);

router.get("/rent/prefers", HomeController.getRentPrefers);

router.get("/directions", HomeController.getDirections);

router.get("/statuses", HomeController.getStatuses);

router.get("/usages", HomeController.getUsages);

router.get("/buildingFacades", HomeController.getBuildingFacades);

router.get("/floorCoverings", HomeController.getFloorCoverings);

router.get("/kitchenFeatures", HomeController.getKitchenFeatures);

router.get("/floors", HomeController.getFloors);

router.get("/coolings", HomeController.getCoolings);

router.get("/heatings", HomeController.getHeatings);

router.get("/features", HomeController.getFeatures);

router.get(
  "/public/searchAdvance/:pageNo/:typeId/:status/:fromSpace/:toSpace/:fromTotalPrice/:toTotalPrice/:fromMortgagePrice/:toMortgagePrice/:fromTotalPricePrePayment/:toTotalPricePrePayment/:fromAge/:toAge",
  HomeController.getPropertiesPublic
);

module.exports = router;
