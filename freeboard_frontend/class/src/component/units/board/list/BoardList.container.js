import BoardListPresenter from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.query";

const BoardListContainer = () => {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      <BoardListPresenter data={data} />
    </>
  );
};
export default BoardListContainer;
