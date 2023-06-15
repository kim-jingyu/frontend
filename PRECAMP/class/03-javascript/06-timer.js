let isStarted = false

const submit = () => {
    if(isStarted === false){
        // 타이머가 작동중이 아닐때
        isStarted = true

        document.getElementById("finish").disabled = false
        let token = (String)((Math.floor(Math.random()*1000000))).padStart(6,"0")
        document.getElementById("number").innerText = token
        document.getElementById("number").style.color = "#" + token
    
        let time = 3
        let timer
    
        timer = setInterval(function(){
            
            if(time>=0){
                let min = Math.floor(time/60)
                let sec = (String)(time%60).padStart(2,"0")
                time = time - 1
                document.getElementById("count").innerText = min + ":" + sec
            }else{
                document.getElementById("finish").disabled = true
                isStarted = false
                console.log("타이머가 작동중입니다.")
                clearInterval(timer)
            }
    
        },1000)
    } else{
        // 타이머가 작동중일때

    }
    

}