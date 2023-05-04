// 클래스형
import { Component } from "react";

class New extends Component {
    constructor(props){
        super(props)    // 다른 컴포넌트한테 받은 데이터
        this.state = {} // 컴포넌트 안에 보관해둘 데이터
    }

    componentDidMount(){
        // 컴포넌트가 최초 그려진 후 실행
    }

    componentDidUpdate(){
        // 컴포넌트가 변경되었을때 실행
    }

    render(){
        return <div>이것은 클래스형 컴포넌트</div>
    }
}

export default New