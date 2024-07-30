const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 5000);
});

promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);

console.log(promise);
