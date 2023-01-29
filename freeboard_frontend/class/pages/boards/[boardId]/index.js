import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  Wrapper,
  WriterWrapper,
  Writer,
  Title,
  Contents,
  Date,
  Avatar,
  Info,
  CardWrapper,
  Header,
  Body,
} from "../../../styles/detail-board";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
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
        <CardWrapper>
          <Header>
            <WriterWrapper>
              <Avatar src="/images/avatar.png" />
              <Info>
                <Writer>{data?.fetchBoard?.writer}</Writer>
                <Date>{data?.fetchBoard?.createdAt}</Date>
              </Info>
            </WriterWrapper>
          </Header>
          <Body>
            <Title>{data?.fetchBoard?.title}</Title>
            <Contents>{data?.fetchBoard?.contents}</Contents>
          </Body>
        </CardWrapper>
      </Wrapper>
    </>
  );
};

export default FetchBoardPage;
