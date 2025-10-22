const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


  const PersonalityHistory = sequelize.define('PersonalityHistory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    conversationId: {
      type: DataTypes.INTEGER,
      field: 'conversation_id'
    },
    openness: {
      type: DataTypes.DECIMAL(5, 2)
    },
    conscientiousness: {
      type: DataTypes.DECIMAL(5, 2)
    },
    extraversion: {
      type: DataTypes.DECIMAL(5, 2)
    },
    agreeableness: {
      type: DataTypes.DECIMAL(5, 2)
    },
    neuroticism: {
      type: DataTypes.DECIMAL(5, 2)
    },
    snapshotDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'snapshot_date'
    },
    analysisNotes: {
      type: DataTypes.TEXT,
      field: 'analysis_notes'
    }
  }, {
    tableName: 'personality_history',
    timestamps: true,
    underscored: true,
    updatedAt: false
  });

module.exports = PersonalityHistory;
