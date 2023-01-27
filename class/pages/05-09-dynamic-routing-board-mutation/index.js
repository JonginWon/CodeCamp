import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  # 변수의 타입 적는 곳
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 실제 우리가 전달할 변수 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      message
      number
    }
  }
`;

const GraphqlMutationPage = () => {
  const router = useRouter();
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
    try {
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
      alert(result.data.createBoard.message);
      router.push(
        `/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}` // 탬플릿 리터럴
      );
    } catch (error) {
      // try에 있는 내용을 시도하다가 실패하면, 아랫줄 모두 무시하고 catch가 실행됨.
      console.log(error.message);
    }
  };

  return (
    <>
      <input type="text" onChange={onChangeWriter} placeholder="작성자" />
      <br />
      <input type="text" onChange={onChangeTitle} placeholder="제목" />
      <br />
      <input type="text" onChange={onChangeContents} placeholder="내용" />
      <br />
      <button onClick={onClickSubmit}>Graphql-API 요청</button>
    </>
  );
};

export default GraphqlMutationPage;
