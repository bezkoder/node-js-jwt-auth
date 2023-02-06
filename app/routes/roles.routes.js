const { authJwt } = require("../middleware");

module.exports = (app) => {
  const roles = require("../controllers/roles.controller");
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  var router = require("express").Router();

  // Create a new Roles
  router.post("/", roles.create);
  //   router.post("/", roles.create, [authJwt.verifyToken]);

  // Retrieve all roles
  router.get("/", roles.findAll);

  // Retrieve a single role with id
  router.get("/:id", roles.findOne);

  // Update a Roles with id
  router.put("/", roles.update);

  // Delete a Roles with id
  router.delete("/:id", roles.delete);

  // Delete all roles
  router.delete("/", roles.deleteAll);

  app.use("/api/v1/roles", router);
};
