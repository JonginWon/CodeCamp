import BoardListPresenter from "./BoardList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BOARDS } from "./BoardList.query";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

const BoardListContainer = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickMoveToDetailBoard = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.target.id}`);
  };

  const onClickMoveToBoardNew = () => {
    router.push(`/boards/new`);
  };

  return (
    <>
      <BoardListPresenter
        data={data}
        onClickMoveToDetailBoard={onClickMoveToDetailBoard}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
      />
    </>
  );
};
export default BoardListContainer;
