import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite-presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite-querys";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.Types";

const BoardWrite = (props: IBoardWriteProps) => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myColor, setMyColor] = useState(false);
  const router = useRouter();

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    if (e.target.value && title && contents) {
      setMyColor(true);
    } else {
      setMyColor(false);
    }
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
    if (writer && e.target.value && contents) {
      setMyColor(true);
    } else {
      setMyColor(false);
    }
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>): void => {
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
    router.push(`/10-01-typescript-board/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = {
      number: Number(router.query.number),
    };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });

    router.push(`/10-01-typescript-board/${result.data.updateBoard.number}`);
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
        isEdit={props.isEdit}
        data={props.data}
      />
    </>
  );
};

export default BoardWrite;
