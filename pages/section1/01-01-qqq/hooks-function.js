// 함수형 컴포넌트 ( hooks 사용 )
import { useState,useEffect} from "react";

function New(props){    // 다른 컴포넌트한테 받은 데이터
    const [state] = useState({})    // 컴포넌트 안에 보관해둘 데이터

    // 리액트 컴포넌트에서 변수 만들기
    const [classmate] = useState("철수") // 변수명, 변수 만드는 기능, 담을 내용

    // 리액트 컴포넌트에서 변수 바꾸기
    const [friend, setFriend] = useState("영희")
    setFriend("크리스")

    useEffect(() => {
        // 컴포넌트가 최초로 그려진 후 실행
    })

    useEffect(() => {
        // 컴포넌트가 변경되었을때 실행
    })

    return <div>이것은 함수형 컴포넌트</div>
}

export default New