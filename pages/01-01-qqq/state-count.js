// state로 count 예제 실험해보기
import { useState } from "react";

function New(){
    const [count, setCount] = useState(0)   // state로 컴포넌트 변수 만들기

    function handleClick() {
        setCount(count + 1) // 갯수가 증가하면서, 화면에 정상적으로 반영됨
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>state를 사용하여 count 증가</button>
        </div>
    )
}

export default New