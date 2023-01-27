import { gql, useMutation } from "@apollo/client";

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
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      // variables 라는 명령어가 $ 역할을 해줌
      variables: {
        writer: "루피",
        title: "안녕",
        contents: "하세요",
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql-API 요청</button>
    </>
  );
};

export default GraphqlMutationPage;
