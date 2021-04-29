const Sequelize = require("sequelize");
const sequelize = require("../db");
const Product = require("./product");

const _ = require("lodash");
// Define the Variant Schema
const Variant = sequelize.define(
	"variant",
	{
		price: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		quantity: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		color: {
			type: Sequelize.STRING,
		},
		images: {
			type: Sequelize.STRING,
			get() {
				return JSON.parse(this.getDataValue("images"));
			},
			set(val) {
				return this.setDataValue("images", JSON.stringify(val));
			},
		},
		size: {
			type: Sequelize.STRING,
		},
	},
	{ timestamps: true, createdAt: "date_uploaded", updatedAt: "date_updated" }
);

Product.hasMany(Variant, { foreignKey: "product_id" });
Variant.belongsTo(Product);

Variant.sync({ alter: true });

module.exports = Variant;
