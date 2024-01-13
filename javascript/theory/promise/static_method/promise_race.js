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

Promise.race(promises)
    .then((reponses) => {
        console.log(reponses);
    })
    .catch((error) => {
        console.log(error);
    })