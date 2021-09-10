beforeAll(() => {
  console.log("Antes de todas las pruebas."); // 1
});

beforeEach(() => {
  console.log("Antes de cada una."); // 2 // 5
});

afterEach(() => {
  console.log("Despues de cada una."); // 4 // 7
});

afterAll(() => {
  console.log("Despues de todas las pruebas."); // 8
});

test("first test", () => {
  console.log("Primer prueba."); // 3
  expect(true).toBe(true);
});

test("second test", () => {
  console.log("Segunda prueba."); // 6
  expect(true).toBe(true);
});
