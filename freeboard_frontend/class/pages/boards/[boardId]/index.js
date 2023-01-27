import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  Wrapper,
  WriterWrapper,
  Writer,
  TitleWrapper,
  Title,
  ContentsWrapper,
  Contents,
  Icon,
  date,
  DateWrapper,
} from "../../../styles/detail-board";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

const FetchBoardPage = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <Wrapper>
        <WriterWrapper>
          <Icon></Icon>
          <DateWrapper>
            <Writer>{data?.fetchBoard?.writer}</Writer>
            <date>Date: 2023.01.25</date>
          </DateWrapper>
        </WriterWrapper>
        <TitleWrapper>
          <Title>{data?.fetchBoard?.title}</Title>
        </TitleWrapper>
        <ContentsWrapper>
          <Contents>{data?.fetchBoard?.contents}</Contents>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
};

export default FetchBoardPage;
