import { getQuoteCallback, getQuotePromiseResolve, getQuotePromiseReject } from "./";

/**
 * Testeamos código asíncrono:
 *
 * - Callbacks
 * - Promises
 * - Async Await
 */

// Callback
test("CALLBACK: getQuote", (done) => {
  getQuoteCallback((quote) => {
    expect(quote).toBe(
      "No creas todo lo que leas en internet, por Benjamin Franklin"
    );
    done();
  })
});

// Promises
test("PROMISE 1 - Resolve: getQuote", () => {  
  return getQuotePromiseResolve()
    .then((quote) => 
      expect(quote).toBe(
        "No creas todo lo que leas en internet, por Benjamin Franklin"
      )
    );
});

test("PROMISE 1 - Reject: getQuote", () => {  
  return getQuotePromiseReject()
    .catch((quote) => 
      expect(quote).toBe(
        "Error"
      )
    );
});

test("PROMISE 2 - Resolve: getQuote", () => {  
  return expect(getQuotePromiseResolve()).resolves.toBe(
    "No creas todo lo que leas en internet, por Benjamin Franklin"
  );
});

test("PROMISE 2 - Reject: getQuote", () => {  
  return expect(getQuotePromiseReject()).rejects.toBe(
    "Error"
  );
});


// Async - Await

test("ASYNC AWAIT - getQuote message", async () => {
  const quote = await getQuotePromiseResolve();

  expect(quote).toBe(
    "No creas todo lo que leas en internet, por Benjamin Franklin"
  );
});