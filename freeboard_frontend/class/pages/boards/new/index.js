import { useState } from "react";
import {
  Title,
  Wrapper,
  Label,
  Writer,
  Password,
  InputWrapper,
  Subject,
  Contents,
  DetailedAddress,
  Zipcode,
  SearchButton,
  UserWrapper,
  ZipcodeWrapper,
  YoutubeLink,
  ImageWrapper,
  Picture,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  SubmitButton,
  ButtonWrapper,
  Error,
} from "../../../styles/eomtion";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const PostPage = () => {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    } else {
      setWriterError("");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    } else {
      setPasswordError("");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    } else {
      setTitleError("");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    } else {
      setContentsError("");
    }

    try {
      if (writer && password && title && contents) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              // shorthand-property
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result);
        alert("게시글이 등록되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Wrapper>
        <Title>게시물 등록</Title>
        <UserWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              placeholder="이름을 적어주세요."
              onChange={onChangeWriter}
            />
            <Error>{writerError}</Error>
          </InputWrapper>

          <InputWrapper>
            <Label>비밀번호</Label>
            <Password
              type="password"
              placeholder="비밀번호를 입력해주시요."
              onChange={onChangePassword}
            />
            <Error>{passwordError}</Error>
          </InputWrapper>
        </UserWrapper>

        <InputWrapper>
          <Label>제목</Label>
          <Subject
            placeholder="제목을 작성해주세요."
            onChange={onChangeTitle}
          />
          <Error>{titleError}</Error>
        </InputWrapper>

        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            onChange={onChangeContents}
          />
          <Error>{contentsError}</Error>
        </InputWrapper>

        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250" />
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <DetailedAddress />
          <DetailedAddress />
        </InputWrapper>

        <InputWrapper>
          <Label>유튜브</Label>
          <YoutubeLink placeholder="링크를 복사해주세요." />
        </InputWrapper>

        <ImageWrapper>
          <Label>사진 첨부</Label>
          <Picture></Picture>
          <Picture></Picture>
          <Picture></Picture>
        </ImageWrapper>

        <OptionWrapper>
          <Label>메인 설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>

        <ButtonWrapper>
          <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default PostPage;
