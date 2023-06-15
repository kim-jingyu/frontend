const changeFocus1 = () => {
    let num = document.getElementById("p1").value

    if(num.length === 3){
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {
    let num = document.getElementById("p2").value

    if(num.length === 4){
        document.getElementById("p3").focus()
    }
}