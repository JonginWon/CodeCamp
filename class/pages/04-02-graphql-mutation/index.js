import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "종인이"
      title: "실습04-021"
      contents: "실습 중입니다."
    ) {
      _id
      message
      number
    }
  }
`;

const GraphqlMutationPage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard();
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql-API 요청</button>
    </>
  );
};

export default GraphqlMutationPage;
