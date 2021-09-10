import { getQuote } from "./";

/**
 * Testeamos código asíncrono:
 *
 * - Callbacks
 * - Promises
 * - Async Await
 */

/*  Callback
  test("getQuote", (done) => {
    getQuote((quote) => {
      expect(quote).toBe(
        "No creas todo lo que leas en internet, por Benjamin Franklin"
      );
    });
    done();
  });
*/

/* Promises
test("getQuote", () => {  
  // Si quiero hacer que los test fallen en el primer caso usaría el .catch
  //  y en el segundo .rejects

  // return getQuote().then((quote) =>
  //   expect(quote).toBe(
  //     "No creas todo lo que leas en internet, por Benjamin Franklin"
  //   )
  // );

  return expect(getQuote()).resolves.toBe(
    "No creas todo lo que leas en internet, por Benjamin Franklin"
  );
});
*/

/* Async - Await
 */
test("getQuote", async () => {
  const quote = await getQuote();

  expect(quote).toBe(
    "No creas todo lo que leas en internet, por Benjamin Franklin"
  );
});
