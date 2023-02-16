import * as S from "./CommentWrite.styles";
import { ICommentWriteProps } from "./CommentWrite.types";
import StarRate from "../../../commons/libraries/starRate";

const CommentWritePresenter = ({
  onChangeContents,
  onChangeRating,
  onClickComment,
  conChangeWriter,
}: ICommentWriteProps) => {
  return (
    <>
      <S.Wrapper>
        <S.GuideWrapper>
          <S.Icon src="/images/comment/Icon.png" />
          <S.Guide>댓글</S.Guide>
        </S.GuideWrapper>
        <S.RatingWrapper>
          이름: <S.Writer type="text" onChange={conChangeWriter} />
          점수: <S.Rating type="text" onChange={onChangeRating} />
          <StarRate />
        </S.RatingWrapper>
        <S.ContentsWrapper>
          <S.Contents
            onChange={onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.ContentsFooterWrapper>
            <S.ContentsCount>0/100</S.ContentsCount>
            <S.RegisterBtn onClick={onClickComment}>등록하기</S.RegisterBtn>
          </S.ContentsFooterWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
};

export default CommentWritePresenter;
