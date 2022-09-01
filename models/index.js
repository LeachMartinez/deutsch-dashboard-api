import {DataTypes} from 'sequelize';
import sequelize from "../db.js";


// import models
const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  }
});

const Dashboard = sequelize.define('dashboard', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  timestamp: {
    type: DataTypes.STRING,
  }
});

User.hasMany(Dashboard);
Dashboard.belongsTo(User);

export { User, Dashboard }