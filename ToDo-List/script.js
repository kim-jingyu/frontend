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
    if(window.event.keyCode === 13 && todoInput.value !== ''){
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