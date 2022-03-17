const fetchProduct = require("../aync.js");

describe("Async", () => {
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "OJ", price: 1500 });
      done();
    });
  });

  it("async - return ", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "OJ", price: 1500 });
    });
  });

  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "OJ", price: 1500 });
  });

  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "OJ",
      price: 1500,
    });
  });

  it("async - reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
