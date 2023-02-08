import * as Styles from "./DetailBoard.styles";

const DetailBoardPresenter = ({
  data,
  onClickDelete,
  onClickMoveToEditPage,
  onClickMoveToListPage,
}) => {
  return (
    <>
      <Styles.Wrapper>
        <Styles.CardWrapper>
          <Styles.Header>
            <Styles.WriterWrapper>
              <Styles.Avatar src="/images/board/avatar.png" />
              <Styles.Info>
                <Styles.Writer>{data?.fetchBoard?.writer}</Styles.Writer>
                <Styles.Date>{data?.fetchBoard?.createdAt}</Styles.Date>
              </Styles.Info>
            </Styles.WriterWrapper>
          </Styles.Header>
          <Styles.Body>
            <Styles.Title>{data?.fetchBoard?.title}</Styles.Title>
            <Styles.Contents>{data?.fetchBoard?.contents}</Styles.Contents>
          </Styles.Body>
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
