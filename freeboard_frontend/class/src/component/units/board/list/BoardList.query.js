import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: Id!) {
    fetchBoard(boardId: $boardId) {
      _id
    }
  }
`;
