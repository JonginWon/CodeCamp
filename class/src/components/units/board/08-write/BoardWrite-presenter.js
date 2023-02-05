import * as Styles from "./BoardWrite-styles";
import { YellowBtn } from "./BoardWrite-styles";

const BoardWriteUI = ({
  onChangeWriter,
  onChangeTitle,
  onChangeContents,
  onClickSubmit,
  onClickUpdate,
  myColor,
  isEdit,
}) => {
  return (
    <>
      <h1>{isEdit ? "수정" : "등록"} 페이지</h1>
      <Styles.RedInput
        type="text"
        onChange={onChangeWriter}
        placeholder="작성자"
      />
      <br />
      <Styles.BlueInput
        qqq="15px"
        type="text"
        onChange={onChangeTitle}
        placeholder="제목"
      />

      <br />
      <input type="text" onChange={onChangeContents} placeholder="내용" />
      <br />
      <YellowBtn
        onClick={isEdit ? onClickUpdate : onClickSubmit}
        BtnColor={myColor}
      >
        {isEdit ? "수정하기" : "등록하기"}
      </YellowBtn>
    </>
  );
};

export default BoardWriteUI;
