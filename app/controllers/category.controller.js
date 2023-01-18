const db = require("../models");
const fileUpload = require('express-fileupload');
const Category = db.category

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
  console.log(__dirname + '../../../assets/categories/' + image.name)

  // If does not have image mime type prevent from uploading
  // if (/^image/.test(image.mimetype)) return res.sendStatus(400);


  // Move the uploaded image to our upload folder
  image.mv(__dirname + '../../../assets/categories/' + image.name);

  try {
    const result = await Category.create({
      name: req.body.name,
      image_path: 'assets/categories/' + image.name,
    });

    
      if (result) res.send({ status: "Category successfully!" });
    
  } catch (error) {
     res.status(200).send({ status: error.message });
  }
};

exports.getallcategories = async (req, res) => {
  
 
  try {
    const result = await Category.findAll({});

    
    if (result) res.status(200).send({ code:200, status: "success", data: result});
    
  } catch (error) {
     res.status(200).send({ status: error.message });
  }
};

exports.edit = async (req, res) => {
  
  const filter = { where:{id: req.body.id } };

  const { image } = req.files;
  var update ="";

  if (!image)
  {
     update = { name: req.body.name };
  }else{
  
      // Move the uploaded image to our upload folder
      image.mv(__dirname + '../../../assets/categories/' + image.name);
      update = { name: req.body.name,image_path: 'assets/categories/' + image.name };

  }
   

 
  try {
    const result = await Category.update(update, filter);

    
    if (result) res.status(200).send({ code:200, status: "success", data: result});
    
  } catch (error) {
     res.status(200).send({ status: error.message });
  }
};

exports.delete = async (req, res) => {
  
  const filter = { where:{id: req.body.id } };

 
  try {
    const result = await Category.destroy(filter);

    
    if (result) res.status(200).send({ code:200, status: "success", data: result});
    
  } catch (error) {
     res.status(200).send({ status: error.message });
  }
};
