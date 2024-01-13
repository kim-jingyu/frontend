const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("error"));
    }, 2000);
})

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
})

const promises = [
    promise1,
    promise2,
    promise3
];

Promise.allSettled(promises)
    .then(result => console.log(result));