export const getQuote = (cb) => {
  /* Promise

  */
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("No creas todo lo que leas en internet, por Benjamin Franklin");
    }, 1000);
  });

  /* Callback
    setTimeout(
      () => cb("No creas todo lo que leas en internet, por Benjamin Franklin"),
      1000
    );
  */
};
