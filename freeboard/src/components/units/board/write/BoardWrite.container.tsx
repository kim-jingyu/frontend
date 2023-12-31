import BoardWriteUI from "./BoardWrite.presenter"
import {ChangeEvent, useState} from 'react'
import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { IBoardWriteProps } from "./BoardWrite.types"
import { IUpdateBoardInput, IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from "../../../../commons/types/generated/types"

export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    //javascript
    const [writer, setWriter] = useState("")
    const [pw, setPw] = useState("")
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")

    const [errorWriter, setErrorWriter] = useState("")
    const [errorPw, setErrorPw] = useState("")
    const [errorSubject, setErrorSubject] = useState("")
    const [errorContent, setErrorContent] = useState("")

    // 등록 mutation
    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)
    // 수정 mutation
    const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD)

    // 이벤트 핸들러 함수
    const handleChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setWriter(value)
        if(value){
            setErrorWriter("")
        }

        if (value && pw && subject && content){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }

    const handleChangePw = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setPw(value)
        if(value){
            setErrorPw("")
        }

        if (writer && value && subject && content){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }

    const handleChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSubject(value)
        if(value){
            setErrorSubject("")
        }

        if (writer && pw && value && content){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }

    const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        setContent(value)
        if(value){
            setErrorContent("")
        }

        if (writer && pw && subject && value){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }
    
    // 등록하기
    const handleClickSubmit = async () => {
        if(!writer){
            setErrorWriter("이름을 적어주세요.")
        }
        if(!pw){
            setErrorPw("비밀번호를 작성해주세요.")
        }
        if(!subject){
            setErrorSubject("제목을 작성해주세요.")
        }
        if(!content){
            setErrorContent("내용을 작성해주세요.")
        }
        if(writer && pw && subject && content){
            try{
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: pw,
                            title: subject,
                            contents: content
                        }
                    }
                })
                console.log(result.data?.createBoard._id)

                router.push(`/boards/${result.data?.createBoard._id}`)
                alert("모든 내용 입력이 완료되었습니다!")
            } catch(error){
                if(error instanceof Error) alert(error.message)
            }
        }
    }

    // 수정하기
    const handleClickUpdate = async () => {
        // refactoring: early-exit
        if(!subject && !content){
            alert("수정된 내용이 없습니다!")
            return
        }
        
        if(!pw){
            alert("비밀번호를 입력해주세요!")
            return
        }
        // 바뀐 것만 mutation에 넣어 보내준다.
        const updateBoardInput: IUpdateBoardInput = {}
        if(subject) updateBoardInput.title = subject
        if(content) updateBoardInput.contents = content

        try{
            if (typeof router.query.boardId !== "string"){
                alert("시스템에 문제가 있습니다.")
                return
            }

            const result = await updateBoard({
                variables: {
                    // writer는 수정하지 않는다.
                    boardId: router.query.boardId,
                    password: pw,
                    updateBoardInput  // short hand property 가능
                }
            })
            router.push(`/boards/${result.data?.updateBoard._id}`)
        } catch(error){
            if(error instanceof Error) alert(error.message)
        }
    }

    return (
        <BoardWriteUI 
            errorWriter={errorWriter}
            errorPw={errorPw}
            errorSubject={errorSubject}
            errorContent={errorContent}
            handleChangeWriter={handleChangeWriter}
            handleChangePw={handleChangePw}
            handleChangeSubject={handleChangeSubject}
            handleChangeContent={handleChangeContent}
            handleClickSubmit={handleClickSubmit}
            handleClickUpdate={handleClickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
        />
    )
}