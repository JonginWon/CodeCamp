import * as S from "./BoardList.styles";
import { getDate } from "../../../commons/libraries/utils";

const BoardListPresenter = ({
  data,
  onClickMoveToDetailBoard,
  onClickMoveToBoardNew,
}) => {
  return (
    <>
      <S.Wrapper>
        <S.TableTop />
        <S.Row>
          <S.ColumnBasic>번호</S.ColumnBasic>
          <S.ColumnTitle>제목</S.ColumnTitle>
          <S.ColumnBasic>작성자</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.Row>
        {data?.fetchBoards.map((el, index) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>{index}</S.ColumnBasic>
            <S.ColumnTitle id={el._id} onClick={onClickMoveToDetailBoard}>
              {el.title}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
        <S.Footer>
          <S.Button onClick={onClickMoveToBoardNew}>
            <S.PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </S.Button>
        </S.Footer>
      </S.Wrapper>
    </>
  );
};
export default BoardListPresenter;
