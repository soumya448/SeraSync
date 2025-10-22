const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


  const CrisisAlert = sequelize.define('CrisisAlert', {
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
    messageId: {
      type: DataTypes.INTEGER,
      field: 'message_id'
    },
    severityLevel: {
      type: DataTypes.ENUM('low', 'medium', 'high', 'critical'),
      allowNull: false,
      field: 'severity_level'
    },
    crisisType: {
      type: DataTypes.STRING(100),
      field: 'crisis_type'
    },
    triggeredKeywords: {
      type: DataTypes.JSON,
      field: 'triggered_keywords'
    },
    contextSnippet: {
      type: DataTypes.TEXT,
      field: 'context_snippet'
    },
    aiResponse: {
      type: DataTypes.TEXT,
      field: 'ai_response'
    },
    emergencyResourcesShown: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'emergency_resources_shown'
    },
    followUpStatus: {
      type: DataTypes.ENUM('pending', 'contacted', 'resolved', 'escalated'),
      defaultValue: 'pending',
      field: 'follow_up_status'
    },
    resolutionNotes: {
      type: DataTypes.TEXT,
      field: 'resolution_notes'
    },
    detectedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'detected_at'
    },
    resolvedAt: {
      type: DataTypes.DATE,
      field: 'resolved_at'
    }
  }, {
    tableName: 'crisis_alerts',
    timestamps: true,
    underscored: true
  });

module.exports = CrisisAlert;
