const Cart = require("../models/cart");

class CartService {
	static async addCart(products) {
		const cart = await Cart.findOrCreate({
			where: {},
			defaults: { products: products },
		});
		return cart;
	}
}

module.exports = CartService;
