module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("Products", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category_id:{
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      attribute: {
        type: Sequelize.STRING
      },
      currency: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
    });
  
    return Products;
  };