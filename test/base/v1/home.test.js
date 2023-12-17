const axios = require("axios");
let server = require("../../../server");
let chai = require("chai");
let should = chai.should();
const sectionName = "----BASE V1 TEST ----";
const baseRoute = "/api/panel/v1/base";
let chaiHttp = require("chai-http");
let config = require("config");
const testConfig = config.get("test");
// const property = testConfig.base;
// console.log(testConfig);

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
  it("get list of areas", async () => {
    const res = await chai.request(server).get(`${baseRoute}/areas`);
    res.should.have.status(200);
  });

  it("get list of provinces", async () => {
    const res = await chai.request(server).get(`${baseRoute}/provinces`);
    res.should.have.status(200);
  });

  it("get list of cities", async () => {
    const res = await chai.request(server).get(`${baseRoute}/cities`);
    res.should.have.status(200);
  });

  it("get list of streets", async () => {
    const res = await chai.request(server).get(`${baseRoute}/streets`);
    res.should.have.status(200);
  });

  
});

// describe("Check Add Apis", () => {
//   it("add customer", async () => {
//     const res = await chai
//       .request(server)
//       .post(`${baseRoute}/customer`)
//       .send(customerInfo);
//     res.should.have.status(200);
//     console.log(res);
//   });
// });
