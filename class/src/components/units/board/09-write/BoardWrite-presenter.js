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
  data,
}) => {
  return (
    <>
      <h1>{isEdit ? "수정" : "등록"} 페이지</h1>
      작성자:{" "}
      <Styles.RedInput
        type="text"
        onChange={onChangeWriter}
        defaultValue={data?.fetchBoard.writer}
      />
      <br />
      제목:{" "}
      <Styles.BlueInput
        qqq="15px"
        type="text"
        onChange={onChangeTitle}
        defaultValue={data?.fetchBoard.title}
      />
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={onChangeContents}
        defaultValue={data?.fetchBoard.contents}
      />
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
