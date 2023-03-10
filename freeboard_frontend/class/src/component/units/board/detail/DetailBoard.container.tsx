import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import DetailBoardPresenter from "./DetailBoard.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./DetailBoard.query";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

const DetailBoardContainer = () => {
  const router = useRouter();
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  const onClickDelete = async () => {
    const result = await deleteBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
    });
  };

  const onClickMoveToEditPage = (): void => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveToListPage = (): void => {
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
