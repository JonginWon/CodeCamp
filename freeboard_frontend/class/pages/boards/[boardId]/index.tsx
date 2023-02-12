import DetailBoardContainer from "../../../src/component/units/board/detail/DetailBoard.container";
import CommentWriteContainer from "../../../src/component/units/comment/write/CommentWrite.container";
import CommentListContainer from "../../../src/component/units/comment/list/CommentList.container";

const FetchBoardPage = () => {
  return (
    <>
      <DetailBoardContainer />
      <CommentWriteContainer />
      <CommentListContainer />
    </>
  );
};

export default FetchBoardPage;
