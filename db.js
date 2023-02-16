const path = require('path');
const { Sequelize } = require('sequelize');

// TODO - connect to db via sequelize
// Create a new Sequelize instance
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
  
  // Test the connection
async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
  
testConnection();

module.exports = {
    sequelize
};
