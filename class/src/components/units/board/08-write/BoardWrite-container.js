import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite-presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite-querys";
import { useRouter } from "next/router";

const BoardWrite = ({ isEdit }) => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myColor, setMyColor] = useState(false);
  const router = useRouter();

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

    alert(result.data.createBoard.message);
    console.log(result);
    router.push(`/08-05-board/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const result = await updateBoard({
      // variables 라는 명령어가 $ 역할을 해줌
      variables: {
        // state 이름이랑 variables 이름이랑 같아도 상관 없음 (스코프 체인)
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents,
      },
    });

    router.push(`/08-05-board/${result.data.updateBoard.number}`);
  };

  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        myColor={myColor}
        isEdit={isEdit}
      />
    </>
  );
};

export default BoardWrite;
