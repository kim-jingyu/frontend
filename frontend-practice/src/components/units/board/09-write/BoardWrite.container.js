import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { useRouter } from "next/router"

export default function BoardWrite(props) {
    const router = useRouter()

    // state
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    // 등록하기 mutation
    const [createBoard] = useMutation(CREATE_BOARD)
    // 수정하기 mutation
    const [updateBoard] = useMutation(UPDATE_BOARD)

    // 등록하기
    const onClickSubmit = async () => {
        try{
            const result = await createBoard({
                variables: {    // variables -> $ 역할을 한다.
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })
            alert(result.data.createBoard.message)
            router.push(`/section9/09-03-boards/${result.data.createBoard.number}`)
        } catch(error){
            alert(error.message)
        }
    }

    // 수정하기
    const onClickUpdate = async () => {
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer: writer,
                title: title,
                contents: contents
            }
        })
        alert(result.data.updateBoard.message)
        router.push(`/section9/09-03-boards/${result.data.updateBoard.number}`)
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
            <BoardWriteUI 
                onClickSubmit={onClickSubmit} 
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter} 
                onChangeTitle={onChangeTitle} 
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
            />
            <div>$$$$$$$$$$여기는 component입니다.$$$$$$$$$$</div>
        </div>
    )
}