import BoardWriteUI from "./BoardWrite.presenter"
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import { CREATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(){
    const router = useRouter()

    //javascript
    const [writer, setWriter] = useState("")
    const [pw, setPw] = useState("")
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")

    const [errorWriter, setErrorWriter] = useState("")
    const [errorPw, setErrorPw] = useState("")
    const [errorSubject, setErrorSubject] = useState("")
    const [errorContent, setErrorContent] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)

    // 이벤트 핸들러 함수
    const handleChangeWriter = (event) => {
        const value = event.target.value
        setWriter(value)
        if(value){
            setErrorWriter("")
        }
    }

    const handleChangePw = (event) => {
        const value = event.target.value
        setPw(value)
        if(value){
            setErrorPw("")
        }
    }

    const handleChangeSubject = (event) => {
        const value = event.target.value
        setSubject(value)
        if(value){
            setErrorSubject("")
        }
    }

    const handleChangeContent = (event) => {
        const value = event.target.value
        setContent(value)
        if(value){
            setErrorContent("")
        }
    }
    
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
                handleClickSubmit={handleClickSubmit} />
        </div>
    )
}