import {RedInput,BlueButton} from './BoardWrite.styles'

export default function BoardWriteUI(props) {

    return(
        <div>
            <div>===========여기는 presenter입니다.===========</div>
            <div>
                작성자: <RedInput type="text" onChange={props.onChangeWriter}></RedInput>
                제목: <RedInput type="text" onChange={props.onChangeTitle}></RedInput>
                내용: <RedInput type="text" onChange={props.onChangeContents}></RedInput>
                <BlueButton onClick={props.onClickSubmit} isActive={props.isActive} >graphql-API 동기 요청하기</BlueButton>
            </div>
            <div>===========여기는 presenter입니다.===========</div>
        </div>
    )
}