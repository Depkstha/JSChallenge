// console.log("Event Loop");

// console.log("First log: started!");

// setTimeout(() => {
//   console.log("Second log: First timeout!");
// }, 200);

// setTimeout(() => {
//   console.log("Third log: Second timeout!");
// }, 100);

// Promise.resolve().then(() => {
//   console.log("Fourth log: Promise!");
// });

// console.log("Fifth log: finished!");

// //Promises

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Second log: First timeout!");
//     resolve();
//   }, 200);
// });

const promise1 = new Promise((resolve, reject) => {
  //DB calls, API calls, Reading and writing file, File upload, Error handling, Processing image, Lazy loading, Web socket or Event handling
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  });
});

promise1.then(() => {
  console.log("Promise 1 resolved");
});

//Handling multiple execution
const task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 1 is complete");
    resolve();
  });
});

const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 is complete");
    resolve();
  });
});

Promise.all([task1, task2]).then(() => {
  console.log("All tasks are complete");
});

//Passing parameter in promise

const task3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 3 is complete");
    resolve({ name: "Deepak Shrestha", age: 26 });
  }, 1000);
});

task3.then((data) => {
  console.log(data);
});

//Error handling using then
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ name: "Deepak Shrestha", age: 26 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((data) => {
    console.log(data);
    return data.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally");
  });

//Error handling using async await
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ name: "Deepak Shrestha", age: 26 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

let fname = "root";
if (0 === 1) {
  let fname = "deepak";
}
console.log(fname);

/**
 * Reverses a given string.
 * @param {string} string The string to be reversed.
 * @returns {string} The reversed string.
 */
function reverseString(string) {
  if (string === "") {
    return "";
  }

  return string.split("").reverse().join("");
}

console.log(reverseString(""));
