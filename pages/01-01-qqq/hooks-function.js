// 함수형 컴포넌트 ( hooks 사용 )
import { useState,useEffect} from "react";

function New(props){    // 다른 컴포넌트한테 받은 데이터
    const [state] = useState({})    // 컴포넌트 안에 보관해둘 데이터

    useEffect(() => {
        // 컴포넌트가 최초로 그려진 후 실행
    })

    useEffect(() => {
        // 컴포넌트가 변경되었을때 실행
    })

    return <div>이것은 함수형 컴포넌트</div>
}

export default New