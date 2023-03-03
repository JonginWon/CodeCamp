import * as S from "./CreateBoard.styles";
import { ICreateBoardProps } from "./CreateBoard.types";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

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
  onChangeYoutubeUrl,
  isOpen,
  onToggleModal,
  handleComplete,
  zipcode,
  address,
  onChangeAddressDetail,
}: ICreateBoardProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>게시물 {isEdit ? "수정" : "등록"}</S.Title>
        <S.UserWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              defaultValue={data?.fetchBoard.writer ?? ""}
              placeholder="이름을 적어주세요."
              onChange={onChangeWriter}
            />
            <S.Error>{writerError}</S.Error>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              onChange={onChangePassword}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.Error>{passwordError}</S.Error>
          </S.InputWrapper>
        </S.UserWrapper>

        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            defaultValue={data?.fetchBoard?.title}
            placeholder="제목을 작성해주세요."
            onChange={onChangeTitle}
          />
          <S.Error>{titleError}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            defaultValue={data?.fetchBoard?.contents}
            placeholder="내용을 작성해주세요."
            onChange={onChangeContents}
          />
          <S.Error>{contentsError}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              type="text"
              readOnly
              placeholder="07250"
              value={(zipcode || data?.fetchBoard?.boardAddress?.zipcode) ?? ""}
            />
            <S.ModalButton type="primary" onClick={onToggleModal}>
              우편번호 검색
            </S.ModalButton>

            {isOpen && (
              <Modal
                title="주소 검색"
                // open={isOpen} 오류 발생
                visible={true} // 오류 해결
                onOk={onToggleModal}
                onCancel={onToggleModal}
              >
                <DaumPostcodeEmbed onComplete={handleComplete} />
              </Modal>
            )}
          </S.ZipcodeWrapper>
          <S.DetailedAddress
            readOnly
            value={(address || data?.fetchBoard?.boardAddress?.address) ?? ""}
          />
          <S.DetailedAddress
            placeholder="상세 주소를 입력해주세요."
            onChange={onChangeAddressDetail}
            defaultValue={data?.fetchBoard?.boardAddress?.addressDetail ?? ""}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.YoutubeLink
            placeholder="링크를 복사해주세요."
            onChange={onChangeYoutubeUrl}
          />
        </S.InputWrapper>

        <S.ImageWrapper>
          <S.Label>사진 첨부</S.Label>
          <S.ImgUpload></S.ImgUpload>
        </S.ImageWrapper>

        <S.OptionWrapper>
          <S.Label>메인 설정</S.Label>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.OptionWrapper>

        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={isEdit ? onClickUpdate : onClickSubmit}
            btnColor={btnColor}
          >
            {isEdit ? "수정" : "등록"}하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export default CreateBoardPresenter;
