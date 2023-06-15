import { gql, useMutation } from "@apollo/client"

// graphql 변수에 담기
const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { # 변수의 타입 적는 곳
        createProduct(      # 실제 우리가 전달할 변수 적는 곳
            seller: $seller,
            createProductInput: $createProductInput
        ){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "판매자",
                createProductInput: {
                    name: "키보드",
                    detail: "REAL_FORCE",
                    price: 400000
                }
            }
        })
        console.log(result)
    }

    // 한 줄일때는 괄호 필요 없음
    return <button onClick={onClickSubmit}>graphql-API 동기 요청하기</button>
}