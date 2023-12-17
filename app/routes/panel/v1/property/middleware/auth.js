const axios = require("axios");
const appConfig = require("config");

module.exports = async (req, res, next) => {
  // Define the base URL of the JWT microservice
  const baseUrl = appConfig.auth.host; // Replace with the actual URL
  // Example: Sending a POST request to the microservice for user registration
  const userData = {
    userName: req.headers.username,
    password: req.headers.password,
  };
  console.log(userData);

  await axios
    .post(`${baseUrl}/api/v1/jwt/userName/verify`, userData)
    .then((response) => {
      // Handle the response from the microservice
      //   console.log("Response from JWT microservice:", response.data);
      console.log(response.data);
      next();
      // return res
      //   .status(200)
      //   .json({ message: response.data.message, success: true });
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      //   console.error("Error:", error.message);
      return res
        .status(403)
        .json({ message: error.response.data.message, success: false });
    });
};
