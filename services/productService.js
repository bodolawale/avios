const _ = require("lodash");
const Product = require("../models/product");
const Variant = require("../models/variant");

class ProductService {
	static async createProduct(productDto) {
		const product = await Product.create({
			name: productDto.name,
			description: productDto.description,
		});
		productDto.varieties.forEach((element) => {
			element.product_id = product.id;
		});
		await Variant.bulkCreate(productDto.varieties);
		return ProductService.getProductById(product.id);
	}

	static async getProductById(productId) {
		const product = await Product.findOne({
			where: { id: productId },
			include: Variant,
		});
		return product;
	}

	static async getProducts() {
		const product = await Product.findAll({
			include: Variant,
		});
		return product;
	}

	static async updateProduct(productId, data) {
		const body = _.pick(data, ["name", "description"]);
		await Product.update(body, { where: { id: productId } });
		return ProductService.getProductById(productId);
	}

	static async updateVariant(productId, variantId, data) {
		const body = _.pick(data, ["price", "quantity", "color", "images", "size"]);
		const variant = await Variant.update(body, {
			where: { id: variantId },
		});
		return ProductService.getProductById(productId);
	}

	static async deleteProduct(productId) {
		await Product.destroy({ where: { id: productId } });
	}

	static async deleteVariant(variantId) {
		await Variant.destroy({ where: { id: variantId } });
	}
}

module.exports = ProductService;
