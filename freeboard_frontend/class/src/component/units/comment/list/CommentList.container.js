import CommentListPresenter from "./CommentList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./CommentList.query";

const CommentListContainer = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <CommentListPresenter data={data} />
    </>
  );
};

export default CommentListContainer;
