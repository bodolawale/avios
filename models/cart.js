const Sequelize = require("sequelize");
const sequelize = require("../db");
const Product = require("./product");

// Define the Cart Schema
const Cart = sequelize.define(
	"cart",
	{
		//normally the user info would be here
	},
	{ timestamps: true, createdAt: "date_uploaded", updatedAt: "date_updated" }
);

Cart.sync({ alter: true });

Cart.belongsToMany(Product, { through: "ProductCarts" });
Product.belongsToMany(Cart, { through: "ProductCarts" });

module.exports = Cart;
