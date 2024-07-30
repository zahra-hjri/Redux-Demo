const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("here is an error");
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
