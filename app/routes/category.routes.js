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

  //! Use of Multer
   var storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, './public/images/')     // './public/images/' directory name where save the file
        },
        filename: (req, file, callBack) => {
            callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
 
    var upload = multer({
        storage: storage
    });

  app.post("/api/admin/add", controller.add);
}