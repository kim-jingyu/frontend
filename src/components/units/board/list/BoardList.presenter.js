
import * as S from './BoardList.styles'

export default function BoardListUI(props){
    return(
        <S.Wrapper>
            <S.TableTop></S.TableTop>
            <S.Row>
                <S.ColumnHeaderBasic>Id</S.ColumnHeaderBasic>
                <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
                <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
            </S.Row>
            {props.data?.fetchBoards.map((el) => (
                <S.Row key={el._id}>
                    <S.ColumnBasic>
                        {String(el._id).slice(-4).toUpperCase()}
                    </S.ColumnBasic>
                    <S.ColumnTitle>
                        {el.title}
                    </S.ColumnTitle>
                    <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                    <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                </S.Row>
            ))}
        </S.Wrapper>

        // <>
        //     {props.data?.fetchBoards.map((el) => (
        //         <div key={el._id}>

        //         </div>
        //     ))}
        // </>
    )
}