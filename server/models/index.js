const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Import all models
const User = require('./User');



// User.belongsTo(School, { foreignKey: 'school_id' });
// User.hasOne(Teacher, { foreignKey: 'user_id' }); 



module.exports = {
  User,
};
