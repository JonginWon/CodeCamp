import * as S from "./BoardList.styles";
import { getDate } from "../../../commons/libraries/utils";

const BoardListPresenter = ({ data }) => {
  console.log(data);
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
          <S.Row>
            <S.ColumnBasic>{index}</S.ColumnBasic>
            <S.ColumnTitle>{el.title}</S.ColumnTitle>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
        <div></div>
      </S.Wrapper>
    </>
  );
};
export default BoardListPresenter;
