const axios = require("axios");
let server = require("../../../server");
let chai = require("chai");
let should = chai.should();
const sectionName = "----CUSTOMER V1 TEST ----";
const baseRoute = "/api/panel/v1/customer";
let chaiHttp = require("chai-http");
let config = require("config");
const testConfig = config.get("test");
const customerInfo = testConfig.customer.customerInfo;
console.log(testConfig);

chai.use(chaiHttp);

describe(`${sectionName}`, () => {
  before((done) => {
    console.log("Waiting to ensure database connection stablished ");
    setTimeout(() => {
      console.log("Okay, lets begin!");
      done();
    }, 1000);
  });
});

describe("Check Get Apis", () => {
  it("get list of customers", async () => {
    const res = await chai.request(server).get(`${baseRoute}/customers`);
    res.should.have.status(200);
  });
});

describe("Check Add Apis", () => {
  it("add customer", async () => {
    const res = await chai
      .request(server)
      .post(`${baseRoute}/customer`)
      .send(customerInfo);
    res.should.have.status(200);
    console.log(res);
  });
});
