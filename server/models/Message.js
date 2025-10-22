const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


  const Message = sequelize.define('Message', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    conversationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'conversation_id'
    },
    senderType: {
      type: DataTypes.ENUM('user', 'ai'),
      allowNull: false,
      field: 'sender_type'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    audioFileUrl: {
      type: DataTypes.STRING(500),
      field: 'audio_file_url'
    },
    audioDurationSeconds: {
      type: DataTypes.INTEGER,
      field: 'audio_duration_seconds'
    },
    sentimentScore: {
      type: DataTypes.DECIMAL(3, 2),
      field: 'sentiment_score'
    },
    emotion: {
      type: DataTypes.STRING(50)
    },
    containsCrisisKeyword: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'contains_crisis_keyword'
    },
    isEdited: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_edited'
    },
    sentAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'sent_at'
    }
  }, {
    tableName: 'messages',
    timestamps: true,
    underscored: true
  });

module.exports = Message;

