const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res
    .status(200)
    .send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.status(200).json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  console.log(req.params);

  const singleProduct = products.find((product) => {
    return product.id === Number(productID);
  });

  if (!singleProduct) {
    return res.status(404).send("Product does not exist.");
  }

  return res.status(200).json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let queriedProducts = [...products];

  if (search) {
    queriedProducts = queriedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    queriedProducts = queriedProducts.slice(0, Number(limit));
  }

  if (queriedProducts.length < 1) {
    // return res.status(200).send("No product matched your search.");
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(queriedProducts);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
