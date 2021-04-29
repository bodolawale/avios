const Sequelize = require("sequelize");
const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.DB_USER,
	process.env.PASSWORD,
	{
		dialect: "mysql",
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
	}
);

sequelize
	.authenticate()
	.then(() => console.log("Database connected..."))
	.catch((err) => console.log("Error:", err));

module.exports = sequelize;
