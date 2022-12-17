/**
 * 1- Callbacks
 * 2- Promises
 * 3- Async Await
 */

export const getQuoteCallback = (callback) => {
  setTimeout(() =>
    callback("No creas todo lo que leas en internet, por Benjamin Franklin")
  , 1000);
}

export const getQuotePromiseResolve = () => {
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve("No creas todo lo que leas en internet, por Benjamin Franklin")
    , 1000);
  });
}

export const getQuotePromiseReject = () => {
  return new Promise((_, reject) => {
    setTimeout(() =>
      reject("Error")
    , 1000);
  });
}