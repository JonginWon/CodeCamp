import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import DetailBoardPresenter from "./DetailBoard.presenter";
import { FETCH_BOARD } from "./DetailBoard.query";

const DetailBoardContainer = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <DetailBoardPresenter data={data} />
    </>
  );
};

export default DetailBoardContainer;
