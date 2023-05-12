import { useMutation } from "@apollo/client"
import { useState, ChangeEvent } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { useRouter } from "next/router"
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types"

// 함수는 함수 중심으로 변수 타입을 맞춰야 한다. -> 여기서는 isEdit. 즉, 객체 타입.
export default function BoardWrite(props: IBoardWriteProps) {
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
            router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`)
        } catch(error: any){
            alert(error.message)
        }
    }

    // 수정하기
    const onClickUpdate = async () => {
        // 입력한 값만 수정
        const myVariables: IMyVariables = {
            number: Number(router.query.number) // 타입 추론
        }
        if(writer) myVariables.writer = writer
        if(title) myVariables.title = title
        if(contents) myVariables.contents = contents

        const result = await updateBoard({
            variables: myVariables
        })
        alert(result.data.updateBoard.message)
        router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => { // input 태그가 change 되었을때, react가 제공하는 event
        setWriter(event.target.value)
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
                data={props.data}   // 등록: undefined, 수정: data
            />
            <div>$$$$$$$$$$여기는 component입니다.$$$$$$$$$$</div>
        </div>
    )
}