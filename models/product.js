const Sequelize = require("sequelize");
const sequelize = require("../DB/sequelize");
const Variant = require("./variant");

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

Product.hasMany(Variant, {
	foreignKey: "product_id",
	onDelete: "CASCADE",
});
Variant.belongsTo(Product);

module.exports = Product;
