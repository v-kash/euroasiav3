import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL || 'mysql://user:password@localhost:3306/euroasia_db';

let sequelize;

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

export default sequelize;

export async function connectDB() {
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
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');
    return true;
  } catch (error) {
    console.error('Error synchronizing database:', error);
    return false;
  }
}
