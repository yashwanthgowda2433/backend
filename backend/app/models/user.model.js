module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    api_key: {
      type: Sequelize.STRING
    }
  });

  return User;
};
