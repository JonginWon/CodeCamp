import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  # 변수의 타입 적는 곳
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 실제 우리가 전달할 변수 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      message
      number
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      number
      _id
      message
    }
  }
`;
