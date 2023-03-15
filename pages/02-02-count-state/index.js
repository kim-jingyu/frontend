import {useState} from 'react'

export default function CountStatePage(){
    //javascript
    const [count, setCount] = useState(0) // 변수, 변수변경함수, 초기값 세팅

    function handleClickCountUp(){
        setCount(count + 1)
    }

    function onClickCountDown(){
        setCount(count - 1)
    }

    return(
        // JSX
        <>
            <div>{count}</div>
            <button onClick={handleClickCountUp}>카운트 올리기</button>
            <button onClick={onClickCountDown}>카운트 내리기</button>
        </>
    )
}