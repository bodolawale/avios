const express = require("express");

const app = express();
require("dotenv").config();

app.use(express.json());
require("./db");

const productRouter = require("./routes/productRouter");

app.use("/api/products", productRouter);

app.use((req, res) => res.status(400).json("URL not found"));

app.use((err, req, res, next) => {
	// set locals, only providing error in development
	const error = {
		message: err.message,
		err: err,
	};
	res.json(error);
	res.status(err.status || 400);
	next(err);
});

const PORT = process.env.PORT || 2021;

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`);
});
