import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite-presenter";
import { CREATE_BOARD } from "./BoardWrite-querys";

const BoardWrite = () => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      // variables 라는 명령어가 $ 역할을 해줌
      variables: {
        // state 이름이랑 variables 이름이랑 같아도 상관 없음 (스코프 체인)
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result?.data?.createBoard?.message);
  };
  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
      />
    </>
  );
};

export default BoardWrite;
