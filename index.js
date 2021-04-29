const express = require("express");

const app = express();

app.use(express.json());

require("./db");

const PORT = process.env.PORT || 2021;

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`);
});
