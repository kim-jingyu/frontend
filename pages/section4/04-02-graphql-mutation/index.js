import { gql, useMutation } from "@apollo/client"

// graphql 변수에 담기
const CREATE_BOARD = gql`
    mutation{
        createBoard(
            writer: "writer",
            title: "title",
            contents: "contents"
        ){
            _id
            number
            message
        }
    }
`


export default function GraphqlMutationPage() {

    const [myFunction] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await myFunction()
        console.log(result)
        alert(result.data.createBoard.message)
    }

    // 한 줄일때는 괄호 필요 없음
    return <button onClick={onClickSubmit}>graphql-API 동기 요청하기</button>
}