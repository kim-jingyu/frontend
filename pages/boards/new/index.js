import {Contents, InputWrapper, Label, Password, Subject, Title, Wrapper, Writer, WriterWrapper, ZipCodeWrapper, ZipCode, SearchButton, Address, Youtube, ImageWrapper, UploadButton, OptionWrapper, RadioButton, RadioLabel, ButtonWrapper,CancelButton, SubmitButton, Error} from '../../../styles/boardsNew'
import {useState} from 'react'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){ # 변수의 타입 적는 곳
        createBoard( # 실제 전달할 변수 적는 곳
            createBoardInput: $createBoardInput
        ){
            _id
            writer
            title
            contents
        }
    }
`

export default function BoardsNewPage(){
    const router = useRouter()

    //javascript
    const [writer, setWriter] = useState("")
    const [pw, setPw] = useState("")
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")

    const [errorWriter, setErrorWriter] = useState("")
    const [errorPw, setErrorPw] = useState("")
    const [errorSubject, setErrorSubject] = useState("")
    const [errorContent, setErrorContent] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)

    // 이벤트 핸들러 함수
    const handleChangeWriter = (event) => {
        const value = event.target.value
        setWriter(value)
        if(value){
            setErrorWriter("")
        }
    }

    const handleChangePw = (event) => {
        const value = event.target.value
        setPw(value)
        if(value){
            setErrorPw("")
        }
    }

    const handleChangeSubject = (event) => {
        const value = event.target.value
        setSubject(value)
        if(value){
            setErrorSubject("")
        }
    }

    const handleChangeContent = (event) => {
        const value = event.target.value
        setContent(value)
        if(value){
            setErrorContent("")
        }
    }
    
    const handleClickSubmit = async () => {
        if(!writer){
            setErrorWriter("이름을 적어주세요.")
        }
        if(!pw){
            setErrorPw("비밀번호를 작성해주세요.")
        }
        if(!subject){
            setErrorSubject("제목을 작성해주세요.")
        }
        if(!content){
            setErrorContent("내용을 작성해주세요.")
        }
        if(writer && pw && subject && content){
            try{
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: pw,
                            title: subject,
                            contents: content
                        }
                    }
                })
                console.log(result.data.createBoard._id)

                router.push(`/boards/${result.data.createBoard._id}`)
                alert("모든 내용 입력이 완료되었습니다!")
            } catch(error){
                alert(error.message)
            }
        }
    }

    return(
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type="text" placeholder="이름을 적어주세요." onChange={handleChangeWriter}/>
                    <Error>{errorWriter}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={handleChangePw}/>
                    <Error>{errorPw}</Error>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject type="text" placeholder="제목을 작성해주세요." onChange={handleChangeSubject}/>
                <Error>{errorSubject}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents placeholder="내용을 작성해주세요." onChange={handleChangeContent}/>
                <Error>{errorContent}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipCodeWrapper>
                    <ZipCode placeholder="07250" />
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipCodeWrapper>
                <Address />
                <Address />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사해주세요."/>
            </InputWrapper>
            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인 설정</Label>
                <RadioButton type="radio" id="youtube" name="radio-button" />
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" id="image" name="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton onClick={handleClickSubmit}>등록하기</SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    )
}