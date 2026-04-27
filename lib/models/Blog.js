import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  excerpt: {
    type: DataTypes.TEXT,
  },
  content: {
    type: DataTypes.TEXT('long'),
  },
  featuredImage: {
    type: DataTypes.STRING(500),
  },
  category: {
    type: DataTypes.ENUM('Certifications', 'Compliance', 'Tax', 'Digital Marketing', 'Tenders', 'Business Advisory'),
  },
  author: {
    type: DataTypes.STRING(100),
    defaultValue: 'Euroasia Team',
  },
  metaTitle: {
    type: DataTypes.STRING(255),
  },
  metaDescription: {
    type: DataTypes.TEXT,
  },
  keywords: {
    type: DataTypes.STRING(500),
  },
  status: {
    type: DataTypes.ENUM('draft', 'published'),
    defaultValue: 'draft',
  },
  publishedAt: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'blogs',
  timestamps: true,
});

export default Blog;
