const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')

const savedTodoList = JSON.parse(localStorage.getItem('saved-items'))

const createToDo = (storageData) => {
    let todoContent = todoInput.value
    
    // localStorage 에 있는 값일 경우
    if(storageData){
        todoContent = storageData.contents
    }

    const newLi = document.createElement('li')
    const newSpan = document.createElement('span')
    const newBtn = document.createElement('button')

    newBtn.addEventListener('click', () =>{
        newLi.classList.toggle('complete')
        saveItemsFn()
    })

    newLi.addEventListener('dblclick', () => {
        newLi.remove()
        saveItemsFn()
    })

    // localStorage에 있는 값일 경우, optional chaining
    if(storageData?.complete){
        newLi.classList.add('complete')
    }

    newSpan.textContent = todoContent
    newLi.appendChild(newBtn)
    newLi.appendChild(newSpan)
    todoList.appendChild(newLi)
    todoInput.value = ''
    saveItemsFn()
}

const keyCodeCheck = () => {
    if(window.event.keyCode === 13 && todoInput.value.trim() !== ''){
        createToDo()
    }
}

const deleteAll = () => {
    const liList = document.querySelectorAll('li')
    for(const li of liList){
        li.remove()
    }
    saveItemsFn()
}

const saveItemsFn = () => {
    const savedItems = []
    for(let i = 0; i<todoList.children.length; i++){
        const todoObj = {
            contents: todoList.children[i].querySelector('span').textContent,
            complete: todoList.children[i].classList.contains('complete')
        }
        savedItems.push(todoObj)
    }

    // todoList 에 값이 없다면, localStorage 에서 todoList 삭제
    //     "       값이 있다면, localStorage 에 todoList 저장
    savedItems.length === 0 ? localStorage.removeItem('saved-items') : localStorage.setItem('saved-items', JSON.stringify(savedItems))
}

// localStorage 에서 값 가져와서 li 태그 만들기
if(savedTodoList){
    for(const data of savedTodoList){
        createToDo(data)
    }
}

const weatherDataActive = ({ location, weather }) => {
    const weatherMainList = ['Clear', 'Clouds', 'Drizzle', 'Rain', 'Snow', 'ThunderStorm']
    weather = weatherMainList.includes(weather) ? weather : 'Fog'               // 가지고 있는 않은 이름의 날씨가 들어왔을때 처리
    const locationNameTag = document.querySelector('#location-name-tag')
    locationNameTag.textContent = location
    console.log(weather)
    document.body.style.backgroundImage = `url('./images/${weather}.jpg')`         // 사용자의 위치에 따른 배경화면 이미지 변경
}

const weatherSearch = ({ latitude, longitude }) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1e62593e4462a13e31087143d9d04847`)
    .then((res) => {
        // 비동기로 동작하는 함수인 fetch 는 응답을 받아올 때까지 then 을 사용해서 기다려야 한다.
        return res.json()
    })
    .then((json) => {
        console.log(json)
        console.log(json.name)
        console.log(json.weather[0].main)

        const weatherData = {
            location: json.name,            // 사용자의 지역 이름
            weather: json.weather[0].main   // 사용자의 지역 날씨
        }

        weatherDataActive(weatherData)
    })
    .catch((err) => {
        // 요청이 제대로 이루어지지 않은 원인 확인
        console.error(err)
    })
}

const accessToGeo = ({ coords }) => {
    const { latitude, longitude } = coords      // 위도, 경도

    const positionObj = {
        // latitude: latitude,
        // longitude: longitude
        latitude,       // 객체의 키와 값이 같으면 생략 가능
        longitude       // shorthand property
    }

    weatherSearch(positionObj)
}

const askForLocation = () => {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
        console.log(err)
    })
}

askForLocation()