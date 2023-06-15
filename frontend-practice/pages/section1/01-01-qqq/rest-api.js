import axios from "axios"

// 비동기 통신
function asynchronous() {
    const data = axios.get('https://koreanjson.com/users/1')
    console.log(data)   // Promise
}

// 동기 통신
async function synchronous() {
    const data = await axios.get('https://koreanjson.com/users/1')
    console.log(data)
}