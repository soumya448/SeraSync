const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


  const Conversation = sequelize.define('Conversation', {
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
    title: {
      type: DataTypes.STRING(255)
    },
    sessionType: {
      type: DataTypes.ENUM('initial', 'regular', 'crisis', 'follow_up'),
      defaultValue: 'regular',
      field: 'session_type'
    },
    sessionNumber: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      field: 'session_number'
    },
    status: {
      type: DataTypes.ENUM('active', 'completed', 'abandoned'),
      defaultValue: 'active'
    },
    durationSeconds: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'duration_seconds'
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'started_at'
    },
    endedAt: {
      type: DataTypes.DATE,
      field: 'ended_at'
    },
    overallSentiment: {
      type: DataTypes.STRING(50),
      field: 'overall_sentiment'
    },
    crisisDetected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'crisis_detected'
    },
    notes: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: 'conversations',
    timestamps: true,
    underscored: true
  });

module.exports = Conversation;
