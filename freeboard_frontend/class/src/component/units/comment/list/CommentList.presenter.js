import { getDate } from "../../../commons/libraries/utils";
import * as S from "./CommentList.styles";

const CommentListPresenter = ({ data }) => {
  return (
    <>
      <S.Wrapper>
        {data?.fetchBoardComments.map((el) => (
          <S.CommentWrapper key={el._id}>
            <S.Avatar src="/images/board/avatar.png" />
            <S.CommentInfoWrapper>
              <S.CommentTop>
                <S.Writer>원종인</S.Writer>
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
