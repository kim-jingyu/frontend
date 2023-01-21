const checkValidation = function(){
    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    if(email&&pw1&&pw2){
        // input 태그에 모두 값이 있을때
        document.getElementById("submit").disabled = false
    } else{
        // input 태그에 하나라도 값이 없을때
        document.getElementById("submit").disabled = true
    }
}