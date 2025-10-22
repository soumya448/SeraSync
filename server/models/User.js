const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: { 
    type: DataTypes.STRING,
    allowNull: false 
  },
  lastName: { 
    type: DataTypes.STRING,
    allowNull: false 
  },
  username: { 
    type: DataTypes.STRING, 
    allowNull: true,
    unique: true 
  },
  email: { 
    type: DataTypes.STRING, 
    allowNull: true, 
    unique: true 
  },
  password: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  mobileNo: { 
    type: DataTypes.STRING, 
    allowNull: true,
    unique: true 
  },
  avatar: { 
    type: DataTypes.STRING 
  },
  roleId: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    defaultValue: 3
    // Remove references from here - handle in associations
  },
  school_id: {
    type: DataTypes.INTEGER,
    allowNull: true
    // Remove references from here - handle in associations
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

// Hash password before saving
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

User.beforeUpdate(async (user) => {
  if (user.changed('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

module.exports = User;
