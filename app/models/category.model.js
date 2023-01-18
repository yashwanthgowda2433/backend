module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
      name: {
        type: Sequelize.STRING
      },
      image_path: {
        type: Sequelize.STRING
      },
      
    });
  
    return Category;
  };