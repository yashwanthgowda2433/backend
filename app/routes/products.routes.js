const { authJwt } = require("../middleware");
const controller = require("../controllers/products.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

 

  app.post("/api/products/add", controller.add);
  app.post("/api/products/getNewProducts", controller.getNewProducts);

  
}