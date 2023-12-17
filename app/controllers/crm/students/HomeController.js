// const Home = require('../../../models/panel/property/v1/Home');

exports.getProperties = async (req, res, next) => {
  try {
    return res.json({
      status: 'success',
      message: 'properties have successfully received',
    });
  } catch (err) {
    console.log(err);
  }
};
