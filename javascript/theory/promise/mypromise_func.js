// Promise 객체를 반환하는 함수 생성하여 사용

function myPromise() {
    return new Promise((resolve, reject) => {
        if (성공시) {
            resolve(결과값);
        } else {
            reject(에러값);
        }
    });
}

myPromise()
    .then((result) => {
        // 성공시 실행할 콜백 함수
    })
    .catch((error) => {
        // 실패시 실행할 콜백 함수
    })