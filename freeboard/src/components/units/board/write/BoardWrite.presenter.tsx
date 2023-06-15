import * as S from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'

export default function BoardWriteUI(props: IBoardWriteUIProps) {

    return(
        <S.Wrapper>
            <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
            <S.WriterWrapper>
                <S.InputWrapper>
                    <S.Label>작성자</S.Label>
                    <S.Writer 
                        type="text" 
                        placeholder="이름을 적어주세요." 
                        onChange={props.handleChangeWriter} 
                        defaultValue={props.data?.fetchBoard.writer ?? ""} // nullish coalescing
                        readOnly={!!props.data?.fetchBoard.writer} // !!, Boolean() 붙여서 문자열일 경우, 명시적으로 true 반환
                    />
                    <S.Error>{props.errorWriter}</S.Error>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>비밀번호</S.Label>
                    <S.Password 
                        type="password" 
                        placeholder="비밀번호를 작성해주세요." 
                        onChange={props.handleChangePw}
                    />
                    <S.Error>{props.errorPw}</S.Error>
                </S.InputWrapper>
            </S.WriterWrapper>
            <S.InputWrapper>
                <S.Label>제목</S.Label>
                <S.Subject 
                    type="text" 
                    placeholder="제목을 작성해주세요." 
                    onChange={props.handleChangeSubject} 
                    defaultValue={props.data?.fetchBoard.title}
                />
                <S.Error>{props.errorSubject}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
                <S.Label>내용</S.Label>
                <S.Contents 
                    placeholder="내용을 작성해주세요." 
                    onChange={props.handleChangeContent} 
                    defaultValue={props.data?.fetchBoard.contents}
                />
                <S.Error>{props.errorContent}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
                <S.Label>주소</S.Label>
                <S.ZipCodeWrapper>
                    <S.ZipCode placeholder="07250" />
                    <S.SearchButton>우편번호 검색</S.SearchButton>
                </S.ZipCodeWrapper>
                <S.Address />
                <S.Address />
            </S.InputWrapper>
            <S.InputWrapper>
                <S.Label>유튜브</S.Label>
                <S.Youtube placeholder="링크를 복사해주세요."/>
            </S.InputWrapper>
            <S.ImageWrapper>
                <S.Label>사진첨부</S.Label>
                <S.UploadButton>+</S.UploadButton>
                <S.UploadButton>+</S.UploadButton>
                <S.UploadButton>+</S.UploadButton>
            </S.ImageWrapper>
            <S.OptionWrapper>
                <S.Label>메인 설정</S.Label>
                <S.RadioButton type="radio" id="youtube" name="radio-button" />
                <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
                <S.RadioButton type="radio" id="image" name="radio-button" />
                <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
            </S.OptionWrapper>
            <S.ButtonWrapper>
                {/* 수정 게시글이면, isActive 무조건 true */}
                <S.SubmitButton 
                    onClick={props.isEdit ? props.handleClickUpdate : props.handleClickSubmit}
                    isActive={props.isEdit ? true : props.isActive}>
                    {props.isEdit ? "수정" : "등록"}하기
                </S.SubmitButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    )
}