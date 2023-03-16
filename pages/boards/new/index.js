import {Contents, InputWrapper, Label, Password, Subject, Title, Wrapper, Writer, WriterWrapper, ZipCodeWrapper, ZipCode, SearchButton, Address, Youtube, ImageWrapper, UploadButton, OptionWrapper, RadioButton, RadioLabel, ButtonWrapper,CancelButton, SubmitButton, Error} from '../../../styles/emotion'
import {useState} from 'react'

export default function New(){
    //javascript
    const [writer, setWriter] = useState("")
    const [pw, setPw] = useState("")
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [address3, setAddress3] = useState("")
    const [youtube, setYoutube] = useState("")

    const [errorWriter, setErrorWriter] = useState("")
    const [errorPw, setErrorPw] = useState("")
    const [errorSubject, setErrorSubject] = useState("")
    const [errorContent, setErrorContent] = useState("")
    const [errorAddress1, setErrorAddress1] = useState("")
    const [errorAddress2, setErrorAddress2] = useState("")
    const [errorAddress3, setErrorAddress3] = useState("")
    const [errorYoutube, setErrorYoutube] = useState("")

    function handleChangeWriter(event){
        const value = event.target.value
        setWriter(value)
    }

    function handleChangePw(event){
        const value = event.target.value
        setPw(value)
    }

    function handleChangeSubject(event){
        const value = event.target.value
        setSubject(value)
    }

    function handleChangeContent(event){
        const value = event.target.value
        setContent(value)
    }

    function onChangeAd1(event){
        const value = event.target.value
        setAddress1(value)
    }

    function onChangeAd2(event){
        const value = event.target.value
        setAddress2(value)
    }

    function onChangeAd3(event){
        const value = event.target.value
        setAddress3(value)
    }

    function onChangeYoutube(event){
        const value = event.target.value
        setYoutube(value)
    }
    
    
    function handleClickSubmit(){
        if(writer === ""){
            setErrorWriter("이름을 적어주세요.")
        }
        if(pw === ""){
            setErrorPw("비밀번호를 작성해주세요.")
        }
        if(subject === ""){
            setErrorSubject("제목을 작성해주세요.")
        }
        if(content === ""){
            setErrorContent("내용을 작성해주세요.")
        }
        if(address1 === ""){
            setErrorAddress1("우편번호를 작성해주세요.")
        }
        if(address2 === ""){
            setErrorAddress2("주소를 작성해주세요.")
        }
        if(address3 === ""){
            setErrorAddress3("주소를 작성해주세요.")
        }
        if(youtube === ""){
            setErrorYoutube("링크를 복사해주세요.")
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
                    <ZipCode placeholder="07250" onChange={onChangeAd1}/>
                    <Error>{errorAddress1}</Error>
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipCodeWrapper>
                <Address onChange={onChangeAd2}/>
                <Error>{errorAddress2}</Error>
                <Address onChange={onChangeAd3}/>
                <Error>{errorAddress3}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사해주세요." onChange={onChangeYoutube}/>
                <Error>{errorYoutube}</Error>
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