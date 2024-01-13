const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise1 에러!");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2 성공!");
    }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise3 에러!");
    }, 3000);
})

const promises = [
    promise1,
    promise2,
    promise3
]

Promise.any(promises)
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.error(error);
    })