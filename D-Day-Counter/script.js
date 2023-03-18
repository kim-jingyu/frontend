const container = document.querySelector('#d-day-container')
const messageContainer = document.querySelector('#d-day-message')

container.style.display = 'none' 
messageContainer.innerHTML = 'D-Day를 입력해 주세요.'

const dateFormMaker = () => {
    const inputYear = document.querySelector("#target-year-input").value
    const inputMonth = document.querySelector("#target-month-input").value
    const inputDate = document.querySelector("#target-date-input").value

    const dateForm = `${inputYear}-${inputMonth}-${inputDate}`
    return dateForm
}

const counterMaker = () => {
    const targetDateInput = dateFormMaker()
    const nowDate = new Date()
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0)
    const remaining = (targetDate - nowDate) / 1000                     // ms 나눠주기

    if(remaining <= 0){
        // 만약 remaining이 0 또는 그 이하이면, 타이머가 종료되었습니다. 출력
        // alert('타이머가 종료되었습니다.')
        container.style.display = 'none'
        messageContainer.innerHTML = '타이머가 종료되었습니다.'
        messageContainer.style.display = 'flex'
        return
    }else if(isNaN(remaining)){
        // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
        // alert('유효한 시간대가 아닙니다.')
        container.style.display = 'none'
        messageContainer.innerHTML = '유효한 시간대가 아닙니다.'
        messageContainer.style.display = 'flex'
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

    const timeKeys = Object.keys(remainingObj)
    // const docKeys = Object.keys(documentObj)

    // for(let i = 0; i<timeKeys.length; i++){
    //     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]]
    // }

    const documentArr = ['days', 'hours', 'min', 'sec']

    let i = 0
    for (const id of documentArr) {
        document.getElementById(id).textContent = remainingObj[timeKeys[i]]
        i++
    }
}

const starter = () => {
    container.style.display = 'flex'
    messageContainer.style.display = 'none'
    counterMaker()
}