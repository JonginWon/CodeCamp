import * as Styles from "./BoardWrite-styles";
import { YellowBtn } from "./BoardWrite-styles";

const BoardWriteUI = (props) => {
  return (
    <>
      <Styles.RedInput
        type="text"
        onChange={props.onChangeWriter}
        placeholder="작성자"
      />
      <br />
      <Styles.BlueInput
        qqq="15px"
        type="text"
        onChange={props.onChangeTitle}
        placeholder="제목"
      />

      <br />
      <input type="text" onChange={props.onChangeContents} placeholder="내용" />
      <br />
      <YellowBtn onClick={props.onClickSubmit} BtnColor={props.myColor}>
        Graphql-API 요청
      </YellowBtn>
    </>
  );
};

export default BoardWriteUI;
