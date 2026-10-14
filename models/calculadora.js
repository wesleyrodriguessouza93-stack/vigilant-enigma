const calculadora = require("../models/calculadora");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("somar 5 + 100 deveria retornar 4", () => {
  const resultado = calculadora.somar(5, 100);
  expect(calculadora.somar(2, 2)).toBe(4);
});
