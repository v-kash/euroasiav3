import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL;

let sequelize = null;

// Only initialize if DATABASE_URL is properly set
if (databaseUrl && databaseUrl.startsWith('mysql://')) {
  try {
    if (process.env.NODE_ENV === 'production') {
      sequelize = new Sequelize(databaseUrl, {
        dialect: 'mysql',
        logging: false,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      });
    } else {
      if (!global.sequelize) {
        global.sequelize = new Sequelize(databaseUrl, {
          dialect: 'mysql',
          logging: false,
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
        });
      }
      sequelize = global.sequelize;
    }
  } catch (error) {
    console.error('Failed to initialize database:', error.message);
    sequelize = null;
  }
}

export default sequelize;

export async function connectDB() {
  if (!sequelize) {
    console.warn('Database not configured - skipping connection');
    return false;
  }
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    return true;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false;
  }
}

export async function syncDB() {
  if (!sequelize) {
    console.warn('Database not configured - skipping sync');
    return false;
  }
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');
    return true;
  } catch (error) {
    console.error('Error synchronizing database:', error);
    return false;
  }
}
