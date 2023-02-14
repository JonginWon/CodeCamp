import * as S from "./BoardWrite-styles";
import { IBoardWriteUIProps } from "./BoardWrite.Types";

const BoardWriteUI = (props: IBoardWriteUIProps) => {
  return (
    <>
      <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
      작성자:{" "}
      <S.RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard?.writer}
      />
      <br />
      제목:{" "}
      <S.BlueInput
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <S.YellowBtn
        qqq="15px"
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        BtnColor={props.myColor}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.YellowBtn>
    </>
  );
};

export default BoardWriteUI;
