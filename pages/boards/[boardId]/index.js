// 게시물 상세 페이지
import { useRouter } from "next/router"
import { Avatar, AvatarWrapper, Body, BottomWrapper, Writer, Button, CardWrapper, Contents, CreatedAt, Header, Info, Title, Wrapper } from "../../../styles/boardsDetail"
import { gql, useQuery } from "@apollo/client"

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
        _id
        writer
        title
        contents
        createdAt
  }
}
`

export default function PostDetailPage() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })
    

    return(
        <Wrapper>
            <CardWrapper>
                <Header>
                    <AvatarWrapper>
                        <Avatar src="/images/avatar.png"></Avatar>
                        <Info>
                            <Writer>{data?.fetchBoard?.writer}</Writer>
                            <CreatedAt>{data?.fetchBoard?.createdAt}</CreatedAt>
                        </Info>
                    </AvatarWrapper>
                </Header>
                <Body>
                    <Title>{data?.fetchBoard?.title}</Title>
                    <Contents>{data?.fetchBoard?.contents}</Contents>
                </Body>
            </CardWrapper>
            <BottomWrapper>
                <Button>목록으로</Button>
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </BottomWrapper>
        </Wrapper>
    )
}