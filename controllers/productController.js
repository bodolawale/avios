const _ = require("lodash");
const ProductService = require("../services/productService");

class ProductController {
	static async createProduct(req, res) {
		try {
			const body = _.pick(req.body, ["name", "description", "varieties"]);

			const errors = {};

			if (!body.name) errors.name = "Name is required";
			if (!body.varieties) errors.varieties = "Varieties is required";

			if (Object.keys(errors).length > 0) {
				return res.status(400).send({
					errors,
				});
			}

			const product = await ProductService.createProduct(body);

			return res.send({ message: "Product created successfully", product });
		} catch (error) {
			return res
				.status(500)
				.send({ message: "An error occurred", errorMessage: error.message });
		}
	}
	static async getProduct(req, res) {
		try {
			const product = await ProductService.getProductById(req.params.id);

			return res.send({ message: "Product fetched successfully", product });
		} catch (error) {
			return res
				.status(500)
				.send({ message: "An error occurred", errorMessage: error.message });
		}
	}
	static async getProducts(req, res) {
		try {
			const products = await ProductService.getProducts(req.params.id);

			return res.send({ message: "Product fetched successfully", products });
		} catch (error) {
			return res
				.status(500)
				.send({ message: "An error occurred", errorMessage: error.message });
		}
	}

	static async updateProduct(req, res) {
		try {
			const product = await ProductService.updateProduct(
				req.params.id,
				req.body
			);

			return res.send({
				message: "Product updated successfully",
				products: product,
			});
		} catch (error) {
			return res
				.status(500)
				.send({ message: "An error occurred", errorMessage: error.message });
		}
	}

	static async updateVariant(req, res) {
		try {
			const variant = await ProductService.updateVariant(
				req.params.productId,
				req.params.id,
				req.body
			);

			return res.send({ message: "Variant updated successfully", variant });
		} catch (error) {
			return res.status(500).send({
				message: "An error occurred",
				errorMessage: error.message,
			});
		}
	}
	static async deleteProduct(req, res) {
		try {
			await ProductService.deleteProduct(req.params.id);

			return res.send({ message: "Product deleted successfully" });
		} catch (error) {
			return res
				.status(500)
				.send({ message: "An error occurred", errorMessage: error.message });
		}
	}
	static async deleteVariant(req, res) {
		try {
			await ProductService.deleteVariant(req.params.id);

			return res.send({ message: "Variant deleted  successfully" });
		} catch (error) {
			return res
				.status(500)
				.send({ message: "An error occurred", errorMessage: error.message });
		}
	}
}

module.exports = ProductController;
