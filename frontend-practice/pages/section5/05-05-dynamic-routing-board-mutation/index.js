import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

// graphql 변수에 담기
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(
            writer: $writer,
            title: $title,
            contents: $contents
        ){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {
    const router = useRouter()

    // state
    const [writer, setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    // mutation
    const [myFunction] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {

        try{
            const result = await myFunction({
                variables: {    // variables -> $ 역할을 한다.
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })
            console.log(result)
            console.log(result.data.createBoard.number)
    
            router.push(`05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
            alert(result.data.createBoard.message)
        } catch(error){
            alert(error.message)
        }
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


    // 한 줄일때는 괄호 필요 없음
    return(
        <div>
            작성자: <input type="text" onChange={onChangeWriter}></input>
            제목: <input type="text" onChange={onChangeTitle}></input>
            내용: <input type="text" onChange={onChangeContents}></input>
            <button onClick={onClickSubmit}>graphql-API 동기 요청하기</button>
        </div>
    )
}