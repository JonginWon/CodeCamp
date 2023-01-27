import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite-presenter";
import { CREATE_BOARD } from "./BoardWrite-querys";

const BoardWrite = () => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myColor, setMyColor] = useState(false);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value && title && contents) {
      setMyColor(true);
    } else {
      setMyColor(false);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (writer && e.target.value && contents) {
      setMyColor(true);
    } else {
      setMyColor(false);
    }
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (writer && title && e.target.value) {
      setMyColor(true);
    } else {
      setMyColor(false);
    }
  };

  const onChangeBtnColor = (e) => {};

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
        myColor={myColor}
      />
    </>
  );
};

export default BoardWrite;
