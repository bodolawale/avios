const Sequelize = require("sequelize");
const sequelize = require("../db");
// const Variant = require("./variant");

// Define the Product Schema
const Product = sequelize.define(
	"product",
	{
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING,
		},
	},
	{ timestamps: true, createdAt: "date_uploaded", updatedAt: "date_updated" }
);

Product.sync({ alter: true });

module.exports = Product;
