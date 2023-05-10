// 게시글 컴포넌트
export default function BoardComponent(props) {

    return(
        // 컴포넌트 형태에서는 div 벽을 쳐서 import 하는 곳에서 부모 CSS와 충돌될 수 있는 것을 피함
        <div>
            <h1>{props.name}페이지</h1>
            제목: <input type="text" /><br/>
            내용: <input type="text" /><br/>
            <button>{props.name}하기</button>
        </div>
    )
}