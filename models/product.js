const Sequelize = require("sequelize");
const sequelize = require("../DB/sequelize");
const Variety = require("./variety");

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
		varieties: {
			type: Sequelize.STRING,
		},
	},
	{ timestamps: true, createdAt: "date_uploaded", updatedAt: "date_updated" }
);

Product.sync({ alter: true });

Product.hasMany(Variety, {
	onDelete: "CASCADE",
});
Variety.belongsTo(Product);

module.exports = Product;
