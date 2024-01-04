const Home = require('../../../../models/crm/teacher/v1/Home');

exports.getCourses = async (req, res, next) => {
  try {
    const data = await Home.getCourses();
    return res.json({
      status: 'success',
      data,
      message: 'data has successfully received',
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getClassByCourseId = async (req, res, next) => {
  try {
    const data = await Home.getClassByCourseId(req.params);
    return res.json({
      status: 'success',
      data,
      message: 'data has successfully received',
    });
  } catch (err) {
    console.log(err);
  }
};
