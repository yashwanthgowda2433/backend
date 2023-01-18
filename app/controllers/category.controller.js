const db = require("../models");

const multer = require('multer')
const path = require('path')
const Category = db.category



exports.add = async (req, res) => {
  // Save User to Database
 
  try {
    const result = await Category.create({
      name: req.body.name,
      image_path: req.body.image,
    });

    
      if (result) res.send({ status: "User registered successfully!" });
    
  } catch (error) {
    res.status(200).send({ status: error.message });
  }
};
