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
    // async 함수를 미리 논블록킹으로 실해안다.
    let applePromise = getApple();
    let bananaPromise = getBanana();

    console.log(applePromise);
    console.log(bananaPromise);

    let a = await applePromise;
    let b = await bananaPromise;

    console.log(`${a} and ${b}`);
  }
  getFruits();