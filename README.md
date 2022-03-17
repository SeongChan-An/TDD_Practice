# TDD_Practice

Jest : https://jestjs.io/

## Start

https://jestjs.io/docs/getting-started

> npm install jest -g  
> jest --init  
> npm install --save-dev jest  
> npm install @types/jest

### Exception

- https://jestjs.io/docs/using-matchers#exceptions

### Testing Asynchronous Code

- https://jestjs.io/docs/asynchronous#callbacks

#### .resolves / .rejects

> matcher in your expect statement,

```js
test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});
```
