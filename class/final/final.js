const checkValidation = () => {
    const email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    let isCompleted

    // email validation
    emailValidate(email)

    // name validation
    nameValidate(name)

    // pw validation
    pwValidate(pw1,pw2)

    // region validation
    
    // gender validation

    // total validation
    if(isCompleted){
        document.getElementById("signUpBt").disabled = false
        document.getElementById("signUpBt").style = "color: #0068FF; background-color: #0068FF; cursor: pointer;"
    }
}

const emailValidate = (email) => {
    if(email || !email.includes("@") ){
        document.getElementById("errorEmail").innerText = "이메일이 올바르지 않습니다."
        return true
    } else{
        document.getElementById("errorEmail").innerText = ""
        return false
    }
}

const nameValidate = (name) =>{
    if(name){
        document.getElementById("errorName").innerText = "이름이 올바르지 않습니다."
        return true
    } else{
        document.getElementById("errorName").innerText = ""
        return false
    }
}

const pwValidate = (pw1,pw2) => {
    if(pw1){
        document.getElementById("errorPw1").innerText = "비밀번호를 입력해 주세요."
    }
    else if(pw2){
        document.getElementById("errorPw2").innerText = "비밀번호를 입력해 주세요."
    }
    else {
        document.getElementById("errorPw2").innerText = "비밀번호를 일치시켜 주세요."
        return false
    }
    return true
}

const changeFocus1 = () => {
    const num = document.getElementById("ph1").value

    if(num.length === 3){
        document.getElementById("ph2").focus()
    }
}

const changeFocus2 = () => {
    const num = document.getElementById("ph2").value
    
    if(num.length === 4){
        document.getElementById("ph3").focus()
    }
}

const activateSbBtn = () => {
    const num = document.getElementById("ph3").value

    if(num.length === 4){
        document.getElementById("authTr").disabled = false
        document.getElementById("authTr").style = "color: white; background-color: #0068FF; cursor: pointer;"
    }
}

isStarted = false

const transmitAuth = () => {
    if(isStarted == false){
        isStarted = true
        const randomNum = Math.floor(Math.random()*1000000)
        const paddedNum = (String)(randomNum).padStart(6,"0")
        document.getElementById("authNm").innerText = paddedNum
        
        // 인증 완료 버튼 활성화
        document.getElementById("authCp").disabled = false
        document.getElementById("authCp").style = "color: white; background-color:#0068FF; cursor:pointer;"
        
        let time = 3
        let timer

        timer = setInterval(function() {
            if(time>=0){
                let min = Math.floor(time/60)
                let sec = (String)(time%60).padStart(2,"0")
                time = time - 1
                document.getElementById("authTm").innerText = min + ":" + sec
                document.getElementById("authCp").onclick = function(e){
                    completeAuth(timer)
                }
            } else{
                document.getElementById("authCp").disabled = true
                isStarted = false
                clearInterval(timer)
            }
        },1000)
    }
}

const completeAuth = (timer) => {
    alert("인증이 완료되었습니다.")

    document.getElementById("authTr").disabled = true
    document.getElementById("authTr").style = "color: #d2d2d2; background-color:white;"

    document.getElementById("authCp").disabled = true
    document.getElementById("authCp").innerText = "인증완료"
    document.getElementById("authCp").style = "color: #d2d2d2; background-color:white;"
    
    document.getElementById("authTm").innerText = "3:00"
    document.getElementById("authNm").innerText = "000000"
    
    console.log("반복")
    clearInterval(timer)
}