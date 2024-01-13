// 요청 API Promise 객체 생성
const api_1 = fetch("https://example.com");
const api_2 = fetch("https://example.com");
const api_3 = fetch("https://example.com");

// Promise 객체들을 묶어 배열로 구성
const promises = [
    api_1,
    api_2,
    api_3
];

Promise.all(promises)
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.error(error);
    })