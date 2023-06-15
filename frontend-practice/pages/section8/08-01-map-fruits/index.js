// 컴포넌트 위에 만든 이유: 컴포넌트가 다시 re-rendering 되어도 다시 안들어지게 하기 위해서 (효율성)
const FRUITS = [
    { number: 1, title: "한국"},        // <div>1 한국</div>
    { number: 2, title: "미국"},
    { number: 3, title: "영국"},
    { number: 4, title: "일본"},
    { number: 5, title: "캐나다"},
    { number: 6, title: "독일"},
    { number: 7, title: "스페인"},
    { number: 8, title: "이탈리아"},
    { number: 9, title: "핀란드"},
    { number: 10, title: "덴마크"},
];

// 1. 가장 기본 예제
const example1 = [
    <div>1 한국</div>,
    <div>2 미국</div>,
    <div>3 영국</div>,
];

export default function MapFruitsPage() {
    // 2. 실무 백엔드 데이터 예제
    const example2 = FRUITS.map(el => <div>{el.number} {el.title}</div>)

    return(
        <div>
            <div>{example1}</div>
            ============================
            <div>{example2}</div>
            ============================
            <div>
                {/* 세번째 실무 효율적인 렌더링 예제 */}
                {FRUITS.map(el => <div>{el.number} {el.title}</div>)}
            </div>
        </div>
    )
}