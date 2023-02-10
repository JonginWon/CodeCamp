import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./CreateBoard.query";
import CreateBoardPresenter from "./CreateBoard.presenter";
import { FETCH_BOARD } from "../detail/DetailBoard.query";

const CreateBoardContainer = ({ isEdit, data }) => {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [btnColor, setBtnColor] = useState(false);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    if (event.target.value && password && title && contents) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (writer && event.target.value && title && contents) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (writer && password && event.target.value && contents) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (writer && password && title && event.target.value) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }

    try {
      if (writer && password && title && contents) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              // shorthand-property
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result);
        alert("게시글이 등록되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickUpdate = async () => {
    try {
      const myVariables = {
        boardId: router.query.boardId,
        updateBoardInput: {},
      };
      if (password) myVariables.password = password;
      if (title) myVariables.updateBoardInput.title = title;
      if (contents) myVariables.updateBoardInput.contents = contents;

      const result = await updateBoard({
        variables: myVariables,
      });

      alert("게시글이 수정되었습니다.");
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <CreateBoardPresenter
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        btnColor={btnColor}
        isEdit={isEdit}
        data={data}
        onClickUpdate={onClickUpdate}
      />
    </>
  );
};

export default CreateBoardContainer;
