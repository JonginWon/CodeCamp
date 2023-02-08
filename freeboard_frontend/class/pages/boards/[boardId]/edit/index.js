import CreateBoardContainer from "../../../../src/component/units/board/write/CreateBoard.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

const BoardEditPage = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <CreateBoardContainer isEdit={true} data={data} />
    </>
  );
};

export default BoardEditPage;
