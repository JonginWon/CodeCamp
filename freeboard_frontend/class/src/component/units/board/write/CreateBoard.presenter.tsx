import * as Styles from "./CreateBoard.styles";
import { ICreateBoardProps } from "./CreateBoard.types";

const CreateBoardPresenter = ({
  onChangeWriter,
  onChangePassword,
  onChangeTitle,
  onChangeContents,
  onClickSubmit,
  writerError,
  passwordError,
  titleError,
  contentsError,
  btnColor,
  isEdit,
  data,
  onClickUpdate,
}: ICreateBoardProps) => {
  return (
    <>
      <Styles.Wrapper>
        <Styles.Title>게시물 {isEdit ? "수정" : "등록"}</Styles.Title>
        <Styles.UserWrapper>
          <Styles.InputWrapper>
            <Styles.Label>작성자</Styles.Label>
            <Styles.Writer
              defaultValue={String(data?.fetchBoard.writer)}
              placeholder="이름을 적어주세요."
              onChange={onChangeWriter}
            />
            <Styles.Error>{writerError}</Styles.Error>
          </Styles.InputWrapper>

          <Styles.InputWrapper>
            <Styles.Label>비밀번호</Styles.Label>
            <Styles.Password
              type="password"
              onChange={onChangePassword}
              placeholder="비밀번호를 입력해주세요."
            />
            <Styles.Error>{passwordError}</Styles.Error>
          </Styles.InputWrapper>
        </Styles.UserWrapper>

        <Styles.InputWrapper>
          <Styles.Label>제목</Styles.Label>
          <Styles.Subject
            defaultValue={data?.fetchBoard?.title}
            placeholder="제목을 작성해주세요."
            onChange={onChangeTitle}
          />
          <Styles.Error>{titleError}</Styles.Error>
        </Styles.InputWrapper>

        <Styles.InputWrapper>
          <Styles.Label>내용</Styles.Label>
          <Styles.Contents
            defaultValue={data?.fetchBoard?.contents}
            placeholder="내용을 작성해주세요."
            onChange={onChangeContents}
          />
          <Styles.Error>{contentsError}</Styles.Error>
        </Styles.InputWrapper>

        <Styles.InputWrapper>
          <Styles.Label>주소</Styles.Label>
          <Styles.ZipcodeWrapper>
            <Styles.Zipcode placeholder="07250" />
            <Styles.SearchButton>우편번호 검색</Styles.SearchButton>
          </Styles.ZipcodeWrapper>
          <Styles.DetailedAddress />
          <Styles.DetailedAddress />
        </Styles.InputWrapper>

        <Styles.InputWrapper>
          <Styles.Label>유튜브</Styles.Label>
          <Styles.YoutubeLink placeholder="링크를 복사해주세요." />
        </Styles.InputWrapper>

        <Styles.ImageWrapper>
          <Styles.Label>사진 첨부</Styles.Label>
          <Styles.Picture></Styles.Picture>
          <Styles.Picture></Styles.Picture>
          <Styles.Picture></Styles.Picture>
        </Styles.ImageWrapper>

        <Styles.OptionWrapper>
          <Styles.Label>메인 설정</Styles.Label>
          <Styles.RadioButton type="radio" id="youtube" name="radio-button" />
          <Styles.RadioLabel htmlFor="youtube">유튜브</Styles.RadioLabel>
          <Styles.RadioButton type="radio" id="image" name="radio-button" />
          <Styles.RadioLabel htmlFor="image">사진</Styles.RadioLabel>
        </Styles.OptionWrapper>

        <Styles.ButtonWrapper>
          <Styles.SubmitButton
            onClick={isEdit ? onClickUpdate : onClickSubmit}
            btnColor={btnColor}
          >
            {isEdit ? "수정" : "등록"}하기
          </Styles.SubmitButton>
        </Styles.ButtonWrapper>
      </Styles.Wrapper>
    </>
  );
};

export default CreateBoardPresenter;
