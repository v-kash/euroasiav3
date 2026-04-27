import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Lead = sequelize.define('Lead', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(15),
  },
  serviceInterest: {
    type: DataTypes.STRING(100),
  },
  message: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('new', 'contacted', 'closed'),
    defaultValue: 'new',
  },
  source: {
    type: DataTypes.STRING(50),
    defaultValue: 'website',
  },
}, {
  tableName: 'leads',
  timestamps: true,
});

export default Lead;
