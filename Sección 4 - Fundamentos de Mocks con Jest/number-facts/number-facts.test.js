import { getRandomNumberFact } from "./";
import { getRandomNumberFactService } from "./service";

jest.mock("./service");

beforeEach(() => {
  //limpiar estado entre cada prueba.
  getRandomNumberFactService.mockClear();
});

// test.skip saltear un test.

test("should return a random number fact", async () => {
  getRandomNumberFactService.mockReturnValueOnce({
    text: "139 is the year that Marcus Aurelius is named Caesar.",
  });
  const numberFact = await getRandomNumberFact();
  // Devuelve siempre un .text, pero la cadena siempre va a cambiar.
  // Nunca va a dar True el test, por eso necesitamos Mocks.
  expect(numberFact.text).toBe(
    "139 is the year that Marcus Aurelius is named Caesar."
  );
});

test("should return an error", async () => {
  getRandomNumberFactService.mockReturnValueOnce(new Error("ups"));
  const numberFact = await getRandomNumberFact();

  expect(numberFact).toBeInstanceOf(Error);
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
});
