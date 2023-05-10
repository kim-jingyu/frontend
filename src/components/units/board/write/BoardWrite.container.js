import BoardWriteUI from "./BoardWrite.presenter"
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(props){
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
    const [createBoard] = useMutation(CREATE_BOARD)
    // 수정 mutation
    const [updateBoard] = useMutation(UPDATE_BOARD)

    // 이벤트 핸들러 함수
    const handleChangeWriter = (event) => {
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

    const handleChangePw = (event) => {
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

    const handleChangeSubject = (event) => {
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

    const handleChangeContent = (event) => {
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
                console.log(result.data.createBoard._id)

                router.push(`/boards/${result.data.createBoard._id}`)
                alert("모든 내용 입력이 완료되었습니다!")
            } catch(error){
                alert(error.message)
            }
        }
    }

    // 수정하기
    const handleClickUpdate = async () => {
        try{
            const result = await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password: pw,
                    updateBoardInput: {
                        title: subject,
                        contents: content
                    }
                }
            })
            router.push(`/boards/${result.data.updateBoard._id}`)
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <div>
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
            />
        </div>
    )
}