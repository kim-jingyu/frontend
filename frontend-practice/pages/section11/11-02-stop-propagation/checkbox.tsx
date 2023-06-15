export default function CheckBox() {
    const qqq2 = () => {
        alert("2번 클릭")
    }
    const qqq3 = (event) => {
        // event.stopPropagation() // 전파 중단
        alert("3번 클릭")
    }

    return(
        <span onClick={qqq2}>
            <input type="checkbox" onClick={qqq3}/>
        </span>
    )
}