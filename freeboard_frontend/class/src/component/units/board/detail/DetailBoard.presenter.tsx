import * as Styles from "./DetailBoard.styles";
import { getDate } from "../../../commons/libraries/utils";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { LikeBtnWrapper } from "./DetailBoard.styles";
interface IProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickDelete: () => void;
  onClickMoveToEditPage: () => void;
  onClickMoveToListPage: () => void;
}

const DetailBoardPresenter = ({
  data,
  onClickDelete,
  onClickMoveToEditPage,
  onClickMoveToListPage,
}: IProps) => {
  return (
    <>
      <Styles.Wrapper>
        <Styles.CardWrapper>
          <Styles.Header>
            <Styles.WriterWrapper>
              <Styles.Avatar src="/images/board/avatar.png" />
              <Styles.Info>
                <Styles.Writer>{data?.fetchBoard?.writer}</Styles.Writer>
                <Styles.Date>
                  Date: {getDate(data?.fetchBoard?.createdAt)}
                </Styles.Date>
              </Styles.Info>
            </Styles.WriterWrapper>
          </Styles.Header>
          <Styles.Body>
            <Styles.Title>{data?.fetchBoard?.title}</Styles.Title>
            <Styles.Contents>{data?.fetchBoard?.contents}</Styles.Contents>
          </Styles.Body>
          <Styles.LikeBtnWrapper>
            <Styles.LikeBtn>
              <Styles.LickImg src="/images/board/like.png" />
            </Styles.LikeBtn>
            <Styles.DislikeBtn>
              <Styles.DislikeImg src="/images/board/dislike.png" />
            </Styles.DislikeBtn>
          </Styles.LikeBtnWrapper>
        </Styles.CardWrapper>
        <Styles.ButtonWrapper>
          <Styles.ListBtn onClick={onClickMoveToListPage}>
            목록으로
          </Styles.ListBtn>
          <Styles.ReviseBtn onClick={onClickMoveToEditPage}>
            수정하기
          </Styles.ReviseBtn>
          <Styles.DeleteBtn onClick={onClickDelete}>삭제하기</Styles.DeleteBtn>
        </Styles.ButtonWrapper>
      </Styles.Wrapper>
    </>
  );
};

export default DetailBoardPresenter;
