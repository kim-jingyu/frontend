const submit = () => {
    let token = (String)((Math.floor(Math.random()*1000000))).padStart(6,"0")
    document.getElementById("number").innerText = token
    document.getElementById("number").style.color = "#" + token

    let time = 3

    setInterval(function(){
        
        if(time>=0){
            let min = Math.floor(time/60)
            let sec = (String)(time%60).padStart(2,"0")
            time = time - 1
            document.getElementById("count").innerText = min + ":" + sec
        }else{
            document.getElementById("finish").disabled = true
        }

    },1000)

}