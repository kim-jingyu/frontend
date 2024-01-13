function getRandomNum() {
    return Math.floor(Math.random() * 100);
}

function getPromiseNum() {
    const num = getRandomNum();
    return Promise.resolve(num); // Promise 객체 반환
}

getPromiseNum()
    .then((value) => {
        console.log(`Random Number : ${value}`);
    })
    .catch((error) => {
        console.error(error);
    })