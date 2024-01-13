function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const increased = n + 1;
            console.log(increased);
            resolve(increased);
        }, 1000)
    })
}

// 체이닝
increaseAndPrint(0)
    .then((n) => increaseAndPrint(n))
    .then((n) => increaseAndPrint(n))
    .then((n) => increaseAndPrint(n))
    .then((n) => increaseAndPrint(n));