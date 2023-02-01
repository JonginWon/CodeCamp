import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "./CreateBoard.query";
import CreateBoardPresenter from "./CreateBoard.presenter";

const CreateBoardContainer = () => {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [btnColor, setBtnColor] = useState(false);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value && password && title && contents) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (writer && e.target.value && title && contents) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (writer && password && e.target.value && contents) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (writer && password && title && e.target.value) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    } else {
      setWriterError("");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    } else {
      setPasswordError("");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    } else {
      setTitleError("");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    } else {
      setContentsError("");
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
      />
    </>
  );
};

export default CreateBoardContainer;
