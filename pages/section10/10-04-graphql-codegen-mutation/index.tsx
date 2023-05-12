import { gql, useMutation } from "@apollo/client"
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types"
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
    // const [counter, setCounter] = useState<number>(0) -> state 타입 명시

    // <결과타입, 변수타입>
    const [myFunction] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: {    // variables -> $ 역할을 한다.
                writer: "작성자",
                title: "타이틀입니다!",
                contents: "내용입니다~"
            }
        })
        // 결과 타입이 만들어짐 -> result 안에 뭐가 있는지 확인 가능
        alert(result.data?.createBoard?.message)
        console.log(result)
    }

    // 한 줄일때는 괄호 필요 없음
    return <button onClick={onClickSubmit}>graphql-API 동기 요청하기</button>
}