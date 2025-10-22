const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


  const PersonalityProfile = sequelize.define('PersonalityProfile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      field: 'user_id'
    },
    // Big Five Personality Traits
    openness: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 50.00,
      validate: {
        min: 0,
        max: 100
      }
    },
    conscientiousness: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 50.00,
      validate: {
        min: 0,
        max: 100
      }
    },
    extraversion: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 50.00,
      validate: {
        min: 0,
        max: 100
      }
    },
    agreeableness: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 50.00,
      validate: {
        min: 0,
        max: 100
      }
    },
    neuroticism: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 50.00,
      validate: {
        min: 0,
        max: 100
      }
    },
    // Additional insights
    communicationStyle: {
      type: DataTypes.STRING(100),
      field: 'communication_style'
    },
    copingMechanisms: {
      type: DataTypes.JSON,
      field: 'coping_mechanisms'
    },
    cognitiveDistortions: {
      type: DataTypes.JSON,
      field: 'cognitive_distortions'
    },
    primaryThemes: {
      type: DataTypes.JSON,
      field: 'primary_themes'
    },
    emotionalRegulationLevel: {
      type: DataTypes.DECIMAL(5, 2),
      field: 'emotional_regulation_level'
    },
    socialInteractionPreference: {
      type: DataTypes.STRING(50),
      field: 'social_interaction_preference'
    },
    stressResponsePattern: {
      type: DataTypes.STRING(100),
      field: 'stress_response_pattern'
    },
    growthAreas: {
      type: DataTypes.JSON,
      field: 'growth_areas'
    },
    strengths: {
      type: DataTypes.JSON
    },
    lastAnalyzedAt: {
      type: DataTypes.DATE,
      field: 'last_analyzed_at'
    },
    totalSessionsAnalyzed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'total_sessions_analyzed'
    }
  }, {
    tableName: 'personality_profiles',
    timestamps: true,
    underscored: true
  });

module.exports = PersonalityProfile;

