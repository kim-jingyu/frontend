const promise = new Promise((resolve, reject) => {
    resolve("처리 완료");
});

promise
    .then((data) => {
        console.log("Promise Full-Filled 처리 결과에 대한 데이터 출력 => ", data);
    })