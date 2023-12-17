const axios = require("axios");
let server = require("../../../server");
let chai = require("chai");
let should = chai.should();
const sectionName = "----CUSTOMER V1 TEST ----";
const baseRoute = "/api/panel/v1/property";
let chaiHttp = require("chai-http");
let config = require("config");
const testConfig = config.get("test");
const property = testConfig.property;
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
  it("get list of properties", async () => {
    const res = await chai.request(server).get(`${baseRoute}/list`);
    res.should.have.status(200);
  });

  it("get list of filtered properties", async () => {
    const res = await chai
      .request(server)
      .get(
        `${baseRoute}/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/1`
      );
    res.should.have.status(200);
  });

  it("get list of types properties", async () => {
    const res = await chai.request(server).get(`${baseRoute}/types`);
    res.should.have.status(200);
  });

  it("get list of usage types properties", async () => {
    const res = await chai.request(server).get(`${baseRoute}/usageTypes`);
    res.should.have.status(200);
  });

  it("get list of document types properties", async () => {
    const res = await chai.request(server).get(`${baseRoute}/documentTypes`);
    res.should.have.status(200);
  });

  it("get list of rentPrefers", async () => {
    const res = await chai.request(server).get(`${baseRoute}/rent/prefers`);
    res.should.have.status(200);
  });

  it("get list of directions", async () => {
    const res = await chai.request(server).get(`${baseRoute}/directions`);
    res.should.have.status(200);
  });

  it("get property statuses", async () => {
    const res = await chai.request(server).get(`${baseRoute}/statuses`);
    res.should.have.status(200);
  });

  it("get property usages", async () => {
    const res = await chai.request(server).get(`${baseRoute}/usages`);
    res.should.have.status(200);
  });

  it("get property building facades", async () => {
    const res = await chai.request(server).get(`${baseRoute}/buildingFacades`);
    res.should.have.status(200);
  });

  it("get property floor covering", async () => {
    const res = await chai.request(server).get(`${baseRoute}/floorCoverings`);
    res.should.have.status(200);
  });

  it("get property kitchen features", async () => {
    const res = await chai.request(server).get(`${baseRoute}/kitchenFeatures`);
    res.should.have.status(200);
  });

  it("get property floors", async () => {
    const res = await chai.request(server).get(`${baseRoute}/floors`);
    res.should.have.status(200);
  });

  it("get property coolings", async () => {
    const res = await chai.request(server).get(`${baseRoute}/coolings`);
    res.should.have.status(200);
  });

  it("get property heatings", async () => {
    const res = await chai.request(server).get(`${baseRoute}/heatings`);
    res.should.have.status(200);
  });

  it("get property features", async () => {
    const res = await chai.request(server).get(`${baseRoute}/features`);
    res.should.have.status(200);
  });
});

describe("Check Add Apis", () => {
  it("add property", async () => {
    const res = await chai.request(server).post(`${baseRoute}/`).send(property);
    res.should.have.status(200);
  });
});
