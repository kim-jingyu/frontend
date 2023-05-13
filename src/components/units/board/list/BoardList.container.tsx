import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export default function BoardList() {
    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    const router = useRouter()

    // 게시글 등록페이지로 이동
    const onClickMoveToBoardNew = () => {
        router.push('/boards/new')
    }

    // 게시글 상세페이지로 이동
    const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target instanceof HTMLDivElement){
            router.push(`/boards/${event.target.id}`)
        }
    }

    return(
        <BoardListUI 
            data={data}
            onClickMoveToBoardNew={onClickMoveToBoardNew}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        />
    )
}