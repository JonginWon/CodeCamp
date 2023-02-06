import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import DetailBoardPresenter from "./DetailBoard.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./DetailBoard.query";

const DetailBoardContainer = () => {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickDelete = async () => {
    const result = await deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
  };

  const onClickMoveToEditPage = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveToListPage = () => {
    router.push(`/boards`);
  };

  return (
    <>
      <DetailBoardPresenter
        data={data}
        onClickDelete={onClickDelete}
        onClickMoveToEditPage={onClickMoveToEditPage}
        onClickMoveToListPage={onClickMoveToListPage}
      />
    </>
  );
};

export default DetailBoardContainer;
