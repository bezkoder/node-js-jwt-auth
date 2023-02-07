const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const { isStudent } = require("../middleware/authJwt");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/v1/all", controller.allAccess);

  app.get(
    "/api/v1/parent",
    [authJwt.verifyToken, authJwt.isParent],
    controller.parentBoard
  );

  app.get(
    "/api/v1/student",
    [authJwt.verifyToken, isStudent],
    controller.studentBoard
  );

  app.get(
    "/api/v1/teacher",
    [authJwt.verifyToken, authJwt.isTeacher],
    controller.teacherBoard
  );

  app.get(
    "/api/v1/accountant",
    [authJwt.verifyToken, authJwt.isAccountant],
    controller.accountantBoard
  );

  app.get(
    "/api/v1/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
