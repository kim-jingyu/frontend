import {gql} from '@apollo/client'

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){ # 변수의 타입 적는 곳
        createBoard( # 실제 전달할 변수 적는 곳
            createBoardInput: $createBoardInput
        ){
            _id
            writer
            title
            contents
        }
    }
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($boardId: ID!, $password: String, $updateBoardInput: UpdateBoardInput!){
        updateBoard(
            boardId: $boardId,
            password: $password,
            updateBoardInput: $updateBoardInput
        ){
            _id
            writer
            title
            contents
        }
    }
`