const checkValidation = () => {
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const pw1 = document.getElementById("pw1").value
    const pw2 = document.getElementById("pw2").value
    const regionSelect = document.getElementById("regionSelect")
    const genderSelect = document.querySelector('input[name="gender"]:checked').value
    let validations = []
    let validation = false

    // email validation
    validations.push(emailValidate(email))

    // name validation
    validations.push(nameValidate(name))

    // pw validation
    validations.push(pwValidate(pw1,pw2))

    // region validation
    validations.push(regionValidation(regionSelect))
    
    // gender validation
    validations.push(genderValidation(genderSelect))

    // total validation
    validations.forEach((param)=>{
        if(param === true){
            validation = true
        }
    })

    if(validation === false){
        alert("코드캠프 가입을 축하합니다.")
    } else{
        document.getElementById("signUpBt").disabled = false
        document.getElementById("signUpBt").style = "color: white; background-color: #0068FF; cursor: pointer;"
    }
}

const emailValidate = (email) => {
    if(!email || !email.includes("@") ){
        document.getElementById("errorEmail").innerText = "이메일이 올바르지 않습니다."
        return true
    } else{
        document.getElementById("errorEmail").innerText = ""
        return false
    }
}

const nameValidate = (name) =>{
    if(!name){
        document.getElementById("errorName").innerText = "이름이 올바르지 않습니다."
        return true
    } else{
        document.getElementById("errorName").innerText = ""
        return false
    }
}

const pwValidate = (pw1,pw2) => {
    let isValidated = false
    if(!pw1){
        document.getElementById("errorPw1").innerText = "비밀번호를 입력해 주세요."
        isValidated = true
    }
    if(!pw2){
        document.getElementById("errorPw2").innerText = "비밀번호를 입력해 주세요."
        isValidated = true
    }
    if(pw1 !== pw2){
        document.getElementById("errorPw2").innerText = "비밀번호를 일치시켜 주세요."
        isValidated = true
    }
    if(pw1 && pw2 && pw1 === pw2){
        document.getElementById("errorPw2").innerText = ""
    }
    return isValidated
}

const regionValidation = (regionSelect) => {
    let text = regionSelect.options[document.getElementById("regionSelect").selectedIndex].text;
    if(text === "" || text === "지역을 선택하세요."){
        document.getElementById("errorRegion").innerText = "지역을 선택해 주세요."
        return true
    } else{
        document.getElementById("errorRegion").innerText = ""
        return false
    }
}

const genderValidation = (genderSelect) => {
    if(genderSelect === ""){
        document.getElementById("errorGender").innerText = "성별을 선택해 주세요."
        return true
    } else{
        document.getElementById("errorGender").innerText = ""
        return false
    }
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
        
        let time = 180
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

    // 인증번호 전송 버튼 비활성화
    document.getElementById("authTr").disabled = true
    document.getElementById("authTr").style = "color: #d2d2d2; background-color:white;"

    // 인증완료 버튼 비활성화
    document.getElementById("authCp").disabled = true
    document.getElementById("authCp").innerText = "인증완료"
    document.getElementById("authCp").style = "color: #d2d2d2; background-color:white;"
    
    // 인증번호 및 인증 시간 초기화
    document.getElementById("authTm").innerText = "3:00"
    document.getElementById("authNm").innerText = "000000"
    
    // 가입하기 버튼 활성화
    document.getElementById("signUpBt").disabled = false
    document.getElementById("signUpBt").style = "color: white; background-color:#0068FF; cursor:pointer;"

    // console.log("반복체크")
    clearInterval(timer)
}