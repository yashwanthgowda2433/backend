const db = require("../models");
const fileUpload = require('express-fileupload');
const Products = db.products

fileUpload({
  limits: {
      fileSize: 10000000,
  },
  abortOnLimit: true,
})

exports.add = async (req, res) => {
  
    const { image } = req.files;
  
    // If no image submitted, exit
    if (!image) return res.status(200).send({ status: "Please upload image" });
    console.log(/^image/.test(image.mimetype))
    console.log(__dirname + '../../../assets/products/' + image.name)
  
    // If does not have image mime type prevent from uploading
    // if (/^image/.test(image.mimetype)) return res.sendStatus(400);
  
  
    // Move the uploaded image to our upload folder
    image.mv(__dirname + '../../../assets/products/' + image.name);
  
    try {
      const result = await Products.create({
        name: req.body.name,
        description: req.body.description,
        image: 'assets/products/' + image.name,
        category_id: req.body.category_id,
        attribute: req.body.attribute,
        currency: req.body.currency,
        price: req.body.price,

      });
  
      
        if (result) res.send({ status: "Product added successfully!" });
      
    } catch (error) {
       res.status(200).send({ status: error.message });
    }
};


exports.getNewProducts = async (req, res) => {
  
 
    try {
      const result = await Products.findAll({
        limit: 5,
        order: [
            ['id', 'DESC'],
        ],
      });
  
      
      if (result) res.status(200).send({ code:200, status: "success", products: result});
      
    } catch (error) {
       res.status(200).send({ status: error.message });
    }
  };


  exports.getPopularProducts = async (req, res) => {
  
 
    try {
      const result = await Products.findAll({
        limit: 5,
        order: [
            ['id', 'DESC'],
        ],
      });
  
      
      if (result) res.status(200).send({ code:200, status: "success", products: result});
      
    } catch (error) {
       res.status(200).send({ status: error.message });
    }
  };

  exports.getProductList = async (req, res) => {
    var category_id = req.body.category_id
 
    try {
      const result = await Products.findAll({
        where:{category_id: category_id },
        order: [
            ['id', 'DESC'],
        ],
      });
  
      
      if (result) res.status(200).send({ code:200, status: "success", products: result});
      
    } catch (error) {
       res.status(200).send({ status: error.message });
    }
  };
  
