import { gql, useMutation, useQuery } from "@apollo/client"

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

// 게시글 삭제
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`


export default function StaticRoutingMovedPage() {
    // data는 못바꿈, useQuery 보는 순간에 백엔드에서 데이터를 받아오고 그 data를 넣어줌
    // 비동기 방식일 때, undefined인 상태
    const { data } = useQuery(FETCH_BOARDS)

    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log(data?.fetchBoards)

    const mystyles = {
        margin: "10px",
        padding: "0px"
    }

    const onClickDelete = (event) => {
        deleteBoard({
            variables: { number: Number(event.target.id) },
            refetchQueries: [ { query: FETCH_BOARDS } ]
        })
    }

    return(
        <div>
            {/* 
                특별한 이유가 없으면, Fragment <> , <Fragment> 로 감싸야 한다. -> div는 한 개더 그려야해서 성능상 이슈가 있을 수 있음.

                1. Fragment: <></>, <Fragment></Fragment>
                2. Fragment에 key 입력하는 방법: <Fragment key={1}></Fragment>
            */}

            {/* 게시글 목록 */}
            {data?.fetchBoards.map((el, index) => (
                // map으로 화면을 그릴때는 key가 세트임
                // index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 가지게 된다. 즉, 유일하지 않음.
                <div key={el.number}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px" }}>{el.number}</span>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                    {/* 삭제버튼 */}
                    <span>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </span>
                </div>
            ))}
        </div>
    ) 
}