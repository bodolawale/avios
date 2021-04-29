const Sequelize = require("sequelize");
const sequelize = require("../DB/sequelize");

// Define the Variety Schema
const Variety = sequelize.define(
	"variety",
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
			get: function () {
				return JSON.parse(this.getDataValue("images"));
			},
			set: function (val) {
				return this.setDataValue("images", JSON.stringify(val));
			},
		},
		size: {
			type: Sequelize.STRING,
		},
	},
	{ timestamps: true, createdAt: "date_uploaded", updatedAt: "date_updated" }
);

Variety.sync({ alter: true });

module.exports = Variety;
