import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD} from './BoardWrite.queries'

export default function BoardWrite() {
    // state
    const [isActive, setIsActive] = useState(false) // 버튼 색깔 control - true:yellow, false:gray

    const [writer, setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    // mutation
    const [myFunction] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: {    // variables -> $ 역할을 한다.
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        alert(result.data.createBoard.message)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return(
        <div>
            <div>$$$$$$$$$$여기는 component입니다.$$$$$$$$$$</div>
            <BoardWriteUI onClickSubmit={onClickSubmit} onChangeWriter={onChangeWriter} onChangeTitle={onChangeTitle} onChangeContents={onChangeContents} isActive={isActive}/>
            <div>$$$$$$$$$$여기는 component입니다.$$$$$$$$$$</div>
        </div>
    )
}