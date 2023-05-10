import { gql, useQuery } from "@apollo/client"

// 목록 가져오기
const FETCH_BOARDS = gql`
    query{
        fetchBoards{
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
    const { data } = useQuery(FETCH_BOARDS)

    console.log(data?.fetchBoards)

    const mystyles = {
        margin: "10px",
        padding: "0px"
    }

    return(
        <div>
            {/* 게시글 목록 */}
            {data?.fetchBoards.map(el => (
                <div>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px" }}>{el.number}</span>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}
        </div>
    ) 
}