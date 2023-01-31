import * as Styles from "./DetailBoard.styles";

const DetailBoardPresenter = ({ data }) => {
  return (
    <>
      <Styles.Wrapper>
        <Styles.CardWrapper>
          <Styles.Header>
            <Styles.WriterWrapper>
              <Styles.Avatar src="/images/avatar.png" />
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
      </Styles.Wrapper>
    </>
  );
};

export default DetailBoardPresenter;
