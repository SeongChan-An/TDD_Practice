const Calculator = require("../calculator.js");

// describe(name, fn) eates a block that groups together several related tests.
describe("Calculator", () => {
  // test(name, fn, timeout), Also under the alias: it(name, fn, timeout)
  it("inits with 0", () => {
    const cal = new Calculator();
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    const cal = new Calculator();
    cal.set(9);

    expect(cal.value).toBe(9);
  });
});
