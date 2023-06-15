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
        if (event.target instanceof HTMLDivElement){    // event.target 이 태그가 아닌 경우에는 id가 없을수도 있음 -> event.target이 무조건 Div 태그일때
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