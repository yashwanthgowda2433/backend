const { authJwt } = require("../middleware");
const controller = require("../controllers/category.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

 

  app.post("/api/category/add", controller.add);
  app.post("/api/category/getall", controller.getallcategories);
  app.post("/api/category/edit", controller.edit);
  app.post("/api/category/delete", controller.delete);


}