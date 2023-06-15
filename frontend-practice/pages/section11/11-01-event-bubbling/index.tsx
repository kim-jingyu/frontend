import { gql, useQuery } from "@apollo/client"
import { MouseEvent } from "react"

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

    const onClickWriter = (event: MouseEvent<HTMLDivElement>) => {
        alert(event.currentTarget.id+"님이 작성한 글입니다.")   // currentTarget은 태그일 수 밖에 없다.
    }

    const qqq = () => {
        alert("클릭 Title")
    }

    return(
        <div>
            {/* 게시글 목록 */}
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={onClickWriter}>
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