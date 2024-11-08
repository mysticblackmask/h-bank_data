const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;
const { parseOffers } = require("./utils/product-offers");
const depositProduct = require("./mocks/deposit_product.json");
const depositProducts = require("./mocks/deposit_products.json");

app.use(cors());

app.get("/", (_, res) => {
  res.send("Good luck! We hope to see you soon!");
});

app.get("/product-offers", (_, res) => {
  res.send(parseOffers(depositProducts).splice(0, 10));
});

app.get("/product-offer/:id", (_, res) => {
  res.send(depositProduct);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
