const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("cricket", "postgres", "postgresadmin", {
	host: "localhost",
	dialect: "postgres",
	logging: false //this requires to prevent huge logs
});
module.exports = sequelize;
