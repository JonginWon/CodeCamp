import BoardListPresenter from "./BoardList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BOARDS } from "./BoardList.query";
import { useRouter } from "next/router";

const BoardListContainer = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToDetailBoard = async (event) => {
    try {
      router.push(`/boards/${event.target.id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickMoveToBoardNew = async (event) => {
    try {
      router.push(`/boards/new`);
    } catch (error) {
      console.log(error.message);
    }
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
