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

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
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
      />
    </>
  );
};

export default CreateBoardContainer;
