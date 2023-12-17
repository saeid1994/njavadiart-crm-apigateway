const Home = require("../../../models/panel/customer/v1/Home");
const { validationResult } = require("express-validator/check");
const ExcelJS = require("exceljs");
exports.getCustomers = async (req, res, next) => {
  try {
    const data = await Home.getCustomers();
    return res.json({
      status: "success",
      message: "customers have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addCustomer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const data = await Home.addCustomer(req.body);
    if (!data.status) {
      return res.status(400).json({
        success: false,
        message: data.message,
        data,
      });
    }
    return res.json({
      success: true,
      message: "customers have successfully added",
      data,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.exportToExcel = async (req, res, next) => {
  try {
    const data = await Home.exportToExcel(req.body);

    // Create a new Excel workbook and add a worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    // Add data to the worksheet
    worksheet.columns = [
      { header: "code", key: "code" },
      { header: "customerName", key: "customerName" },
      { header: "minSalePrice", key: "minSalePrice" },
      { header: "description", key: "description" },
      { header: "consultName", key: "consultName" },
      { header: "minInfrastructure", key: "minInfrastructure" },
      { header: "minSpace", key: "minSpace" },
      { header: "propertyTypes", key: "propertyTypes" },
      { header: "createdAt", key: "createdAt" },
    ];

    for (const row of data) {
      worksheet.addRow({
        code: row.code,
        customerName: row.customerName,
        minSalePrice: row.minSalePrice,
        description: row.description,
        consultName: row.consultName,
        minInfrastructure: row.minInfrastructure,
        minSpace: row.minSpace,
        propertyTypes: row.propertyTypes,
        createdAt: row.createdAt,
      });
    }

    // Send the Excel file as a response
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=exported_data.xlsx"
    );
    workbook.xlsx.write(res).then(() => {
      res.end();
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.exportToExcelProperty = async (req, res, next) => {
  try {
    const data = await Home.exportToExcelProperty(req.body);

    // Create a new Excel workbook and add a worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    // Add data to the worksheet
    worksheet.columns = [
      { header: "code", key: "code" },
      { header: "salePrice", key: "salePrice" },
      { header: "primaryMobile", key: "primaryMobile" },
      { header: "fullName", key: "fullName" },
      { header: "infrastructure", key: "infrastructure" },
      { header: "space", key: "space" },
      { header: "address", key: "address" },
      { header: "certificateType", key: "certificateType" },
      { header: "propertyType", key: "propertyType" },
      { header: "createdAt", key: "createdAt" },
      { header: "updatedAt", key: "updatedAt" },
    ];

    for (const row of data) {
      worksheet.addRow({
        code: row.code,
        salePrice: row.salePrice,
        primaryMobile: row.primaryMobile,
        fullName: row.fullName,
        infrastructure: row.infrastructure,
        space: row.space,
        roomsCount: row.roomsCount,
        address: row.address,
        certificateType: row.certificateType,
        propertyType: row.propertyType,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
      });
    }

    // Send the Excel file as a response
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=exported_data.xlsx"
    );
    workbook.xlsx.write(res).then(() => {
      res.end();
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getProperties = async (req, res, next) => {
  try {
    const data = await Home.getProperties();

    return res.json({
      status: "success",
      message: "properties have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
