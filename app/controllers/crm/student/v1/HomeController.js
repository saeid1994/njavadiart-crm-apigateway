const Home = require('../../../../models/crm/students/v1/Home');

exports.getStudents = async (req, res, next) => {
  try {
    const data = await Home.GetStudents();
    return res.json({
      status: 'success',
      data,
      message: 'data has successfully received',
    });
  } catch (err) {
    console.log(err);
  }
};
