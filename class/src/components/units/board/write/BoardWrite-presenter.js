import * as Styles from "./BoardWrite-styles";

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
        type="text"
        onChange={props.onChangeTitle}
        placeholder="제목"
      />

      <br />
      <input type="text" onChange={props.onChangeContents} placeholder="내용" />
      <br />
      <button onClick={props.onClickSubmit}>Graphql-API 요청</button>
    </>
  );
};

export default BoardWriteUI;
