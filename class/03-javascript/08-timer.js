let time = 10
// undefined
setInterval(function(){
    if(time >= 0){
        console.log(time)
        time = time - 1
    }
}, 1000)