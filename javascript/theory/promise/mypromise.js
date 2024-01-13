// Promise 객체 변수에 할당하여 사용

const myPromise = new Promise((resolve, reject) => {
    // 비동기 작업 수행
    const data = fetch("https://example.com/");

    if (data) {
        resolve(data);
    } else {
        reject("error");
    }
})

myPromise
    .then((value) => {
        console.log("data: ", value);
    })
    .catch((error) => {
        console.log("error: ", error);
    })
    .finally(() => {
        console.log("끝!");
    })