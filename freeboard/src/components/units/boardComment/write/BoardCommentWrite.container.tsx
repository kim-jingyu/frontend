import { ChangeEvent, useState } from "react"
import BoardCommentWriteUI from "./BoardCommentWrite.presenter"
import { useRouter } from "next/router"
import { useMutation } from "@apollo/client"
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries"
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types"
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries"

export default function BoardCommentWrite() {
    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [contents, setContents] = useState("")

    const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value)
    }

    const onClickSubmit = async () => {
        try{
            if(typeof router.query.boardId !== "string"){
                alert("시스템에 문제가 있습니다.")
                return
            }

            const result = await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer,
                        password,
                        contents,
                        rating: 0
                    },
                    boardId: router.query.boardId
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: {
                            boardId: router.query.boardId
                        }
                    }
                ]
            })

            console.log(result.data?.createBoardComment._id)
            alert("댓글 작성이 완료되었습니다!")
        } catch(error){
            if(error instanceof Error) alert(error.message)
        }
    }

    return(
        <BoardCommentWriteUI 
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            contents={contents}
        />
    )
}