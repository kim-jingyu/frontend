import axios from "axios"
import { useState } from "react"
import Login from '../02-03-signup-state'

export default function RestGetPage() {

    // state
    const [title, setTitle] = useState("") // 초기값 = ""
    

    // 이벤트 핸들러 함수

    // 비동기 함수
    const onClickAsync = () => {
        const result = axios.get('https://koreanjson.com/posts/1')
        console.log(result)
    }

    // 동기 함수
    const onClickSync = async () => {
        const result = await axios.get('https://koreanjson.com/posts/1')
        console.log(result)
        console.log(result.data)
        console.log(result.data.title)
        setTitle(result.data.title)
    }

    return(
        <>
            {/* 비동기 버튼 */}
            <button onClick={onClickAsync}>Rest-API 비동기 방식으로 요청하기</button>
            {/* 동기 버튼 */}
            <button onClick={onClickSync}>Rest-API 동기 방식으로 요청하기</button>
            <div>{title}</div>

            {/* 컴포넌트 조립 방식 */}
            <Login></Login>
        </>
        
    )
}