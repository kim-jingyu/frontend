const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("처리 완료");
    }, 5000);
})

console.log(promise);