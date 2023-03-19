const container = document.querySelector('#d-day-container')
const messageContainer = document.querySelector('#d-day-message')
let intervalArr = []

container.style.display = 'none' 
messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>'

const dateFormMaker = () => {
    const inputYear = document.querySelector("#target-year-input").value
    const inputMonth = document.querySelector("#target-month-input").value
    const inputDate = document.querySelector("#target-date-input").value

    const dateForm = `${inputYear}-${inputMonth}-${inputDate}`
    return dateForm
}

const counterMaker = (data) => {
    const nowDate = new Date()
    const targetDate = new Date(data).setHours(0, 0, 0, 0)
    const remaining = (targetDate - nowDate) / 1000                     // ms 나눠주기

    if(remaining <= 0){
        // 만약 remaining이 0 또는 그 이하이면, 타이머가 종료되었습니다. 출력
        // alert('타이머가 종료되었습니다.')
        container.style.display = 'none'
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>'
        messageContainer.style.display = 'flex'
        setIntervalClear()
        return
    }else if(isNaN(remaining)){
        // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
        // alert('유효한 시간대가 아닙니다.')
        container.style.display = 'none'
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>'
        messageContainer.style.display = 'flex'
        setIntervalClear()
        return
    }

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),       // 남은 날짜
        remainingHours: Math.floor(remaining / 3600) % 24,      // 남은 시간
        remainingMin: Math.floor(remaining / 60) % 60,          // 남은 분
        remainingSec: Math.floor(remaining) % 60                // 남은 초
    }

    // const documentObj = {
    //     days: document.getElementById('days'),          // 남은 날짜
    //     hours: document.getElementById('hours'),        // 남은 시간
    //     min: document.getElementById('min'),            // 남은 분
    //     sec: document.getElementById('sec')             // 남은 초
    // }

    // const docKeys = Object.keys(documentObj)
    
    // for(let i = 0; i<timeKeys.length; i++){
        //     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]]
        // }
        
    const timeKeys = Object.keys(remainingObj)
    const documentArr = ['days', 'hours', 'min', 'sec']

    const format = (time) => {
        if(time < 10){
            return '0' + time
        } else{
            return time
        }
    } 

    let i = 0
    for (const id of documentArr) {
        const remainingTime = format(remainingObj[timeKeys[i]])
        document.getElementById(id).textContent = remainingTime
        i++
    }
}

const starter = () => {
    const targetDateInput = dateFormMaker()
    container.style.display = 'flex'
    messageContainer.style.display = 'none'
    setIntervalClear()
    counterMaker(targetDateInput)
    const intervalId = setInterval(() => counterMaker(targetDateInput), 1000)
    intervalArr.push(intervalId)
    // for(let i = 0; i<100; i++){
    //     setTimeout(counterMaker, 1000 * i);
    // }
}

const initializer = () => {
    container.style.display = 'none'
    messageContainer.innerHTML = '<h3>D-Day를 입력해주세요.</h3>'
    messageContainer.style.display = 'flex'
    setIntervalClear()
}

const setIntervalClear = () => {
    for(const id of intervalArr){
        clearInterval(id)
    }
}