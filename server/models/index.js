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

// User.hasMany(RefreshToken, {
//   foreignKey: 'userId',
//   as: 'refreshTokens'
// });
// User.hasMany(Conversation, {
//   foreignKey: 'userId',
//   as: 'conversations'
// });
// User.hasOne(PersonalityProfile, {
//   foreignKey: 'userId',
//   as: 'personalityProfile'
// });
// User.hasMany(PersonalityHistory, {
//   foreignKey: 'userId',
//   as: 'personalityHistory'
// });
// User.hasMany(CrisisAlert, {
//   foreignKey: 'userId',
//   as: 'crisisAlerts'
// });

// // RefreshToken associations
// RefreshToken.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'user'
// });

// // Conversation associations
// Conversation.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'user'
// });
// Conversation.hasMany(Message, {
//   foreignKey: 'conversationId',
//   as: 'messages'
// });
// Conversation.hasMany(PersonalityHistory, {
//   foreignKey: 'conversationId',
//   as: 'personalitySnapshots'
// });
// Conversation.hasMany(CrisisAlert, {
//   foreignKey: 'conversationId',
//   as: 'crisisAlerts'
// });

// // Message associations
// Message.belongsTo(Conversation, {
//   foreignKey: 'conversationId',
//   as: 'conversation'
// });
// Message.hasMany(CrisisAlert, {
//   foreignKey: 'messageId',
//   as: 'crisisAlerts'
// });

// // PersonalityProfile associations
// PersonalityProfile.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'user'
// });

// // PersonalityHistory associations
// PersonalityHistory.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'user'
// });
// PersonalityHistory.belongsTo(Conversation, {
//   foreignKey: 'conversationId',
//   as: 'conversation'
// });

// // CrisisAlert associations
// CrisisAlert.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'user'
// });
// CrisisAlert.belongsTo(Conversation, {
//   foreignKey: 'conversationId',
//   as: 'conversation'
// });
// CrisisAlert.belongsTo(Message, {
//   foreignKey: 'messageId',
//   as: 'message'
// });


module.exports = {
  User,
  RefreshToken,
  Conversation,
  Message,
  PersonalityProfile,
  PersonalityHistory,
  CrisisAlert,
};
