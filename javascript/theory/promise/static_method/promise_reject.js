const promise = Promise.reject(new Error('에러 발생!'));

promise.catch((error) => {
    console.error(error);
})