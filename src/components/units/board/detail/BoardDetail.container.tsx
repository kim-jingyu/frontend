import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import { FETCH_BOARD } from './BoardDetail.queries'
import BoardDetailUI from './BoardDetail.presenter'

export default function BoardDetail() {
    const router = useRouter()

    // 상세화면 쿼리 결과
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })

    // 클릭 시, 수정화면으로 이동
    const onClickMoveToBoardEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`)
    }

    return(
        <BoardDetailUI data={data} onClickMoveToBoardEdit={onClickMoveToBoardEdit} />
    )
}