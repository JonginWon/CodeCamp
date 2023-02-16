import { getDate } from "../../../commons/libraries/utils";
import * as S from "./CommentList.styles";
import { CommentListProps } from "./CommentList.types";

const CommentListPresenter = ({ data }: CommentListProps) => {
  return (
    <>
      <S.Wrapper>
        {data?.fetchBoardComments.map((el) => (
          <S.CommentWrapper key={el._id}>
            <S.Avatar src="/images/board/avatar.png" />
            <S.CommentInfoWrapper>
              <S.CommentTop>
                <S.Writer>{el.writer}</S.Writer>
                <S.Rating>{el.rating}</S.Rating>
              </S.CommentTop>
              <S.Contents>{el.contents}</S.Contents>
              <S.Date>{getDate(el.createdAt)}</S.Date>
            </S.CommentInfoWrapper>
          </S.CommentWrapper>
        ))}
      </S.Wrapper>
    </>
  );
};

export default CommentListPresenter;
