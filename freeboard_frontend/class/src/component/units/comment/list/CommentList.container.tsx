import CommentListPresenter from "./CommentList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./CommentList.query";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

const CommentListContainer = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  return (
    <>
      <CommentListPresenter data={data} />
    </>
  );
};

export default CommentListContainer;
