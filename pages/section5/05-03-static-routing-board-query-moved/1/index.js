import { gql, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:1){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage() {
    // data는 못바꿈, useQuery 보는 순간에 백엔드에서 데이터를 받아오고 그 data를 넣어줌
    // 비동기 방식일 때, undefined인 상태
    const { data } = useQuery(FETCH_BOARD)

    console.log(data)

    // 비동기 방식
    // 1번째 그리기 : 하드코딩된 값들
    // 2번째 그리기 : 데이터 통신에서 받아온 값들
    // data가 있으면 그리고, 없으면 그리지 마 (조건부 렌더링) -> Optional-chaining (?.)
    // 삼항 연산자
    return(
        <div>
            <div>1번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {data && data.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data ? data.fetchBoard?.contents : "로딩중입니다."}</div>
        </div>
    ) 
}