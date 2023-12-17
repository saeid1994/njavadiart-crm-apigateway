// const Permission_v1 = require("../../../models/permission/v1/Home");

// module.exports = async (req, res, next) => {
//   const routeName = req.originalUrl;
//   const username = req.headers?.username;

//   const userPermissions = await Permission_v1.GetUserPermissions(username);
//   console.log(userPermissions);

//   const [userPermissionFiltered] = userPermissions.filter((item) => {
//     if (item.routeTitle === routeName) return item;
//   });

//   console.log(userPermissionFiltered);

//   if (userPermissionFiltered?.routeTitle !== routeName) {
//     return res
//       .status(403)
//       .json({ message: "شما دسترسی به این بخش را ندارید", succese: false });
//   }

//   next();
// };
