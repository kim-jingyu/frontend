import { useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function BoardCommentList() {
    const router = useRouter()
    if (!router || typeof router.query.boardId != "string") return <></>

    const {data} = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId
        }
    })

    return(
        <BoardCommentListUI data={data}/>
    )
}