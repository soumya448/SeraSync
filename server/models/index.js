const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Import all models
const User = require('./User');
const RefreshToken = require('./RefreshToken');
const Conversation = require('./Conversation');
const Message = require('./Message');
const PersonalityProfile = require('./PersonalityProfile');
const PersonalityHistory = require('./PersonalityHistory');
const CrisisAlert = require('./CrisisAlert');


// User.belongsTo(School, { foreignKey: 'school_id' });
// User.hasOne(Teacher, { foreignKey: 'user_id' }); 



module.exports = {
  User,
  RefreshToken,
  Conversation,
  Message,
  PersonalityProfile,
  PersonalityHistory,
  CrisisAlert,
};
