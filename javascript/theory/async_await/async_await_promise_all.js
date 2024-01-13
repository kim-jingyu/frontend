function getApple(){
    return new Promise( (resolve, reject) => {
      setTimeout(() => resolve("apple"), 1000);
    })
  }
  
  function getBanana(){
    return new Promise( (resolve, reject) => {
      setTimeout(() => resolve("banana"), 1000);
    })
  }

  async function getFruits() {
    console.time();

    let [a, b] = await Promise.all([ getApple(), getBanana() ]);
    console.log(`${a} and ${b}`);

    console.timeEnd();
  }

  getFruits();