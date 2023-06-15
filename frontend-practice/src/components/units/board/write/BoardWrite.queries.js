import { gql } from "@apollo/client"

// graphql 변수에 담기
export const CREATE_BOARD = gql`
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