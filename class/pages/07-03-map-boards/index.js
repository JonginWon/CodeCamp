import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARDS = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

const StaticRoutedPage = () => {
  const [deleteBoard] = useMutation(DELETE_BOARDS);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = async (event) => {
    await deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </>
  );
};

export default StaticRoutedPage;
