function fetchProduct(msg) {
  if (msg === "error") {
    return Promise.reject("network error");
  }
  return Promise.resolve({ item: "OJ", price: 1000 });
}

module.exports = fetchProduct;
