import CommentWritePresenter from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.query";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.query";

const CommentWriteContainer = () => {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(3);

  const conChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onChangeRating = (event: number): void => {
    setRating(event);
  };

  const onClickComment = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            contents,
            rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });

      alert("댓글이 등록되었습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <>
      <CommentWritePresenter
        conChangeWriter={conChangeWriter}
        onChangeContents={onChangeContents}
        onChangeRating={onChangeRating}
        onClickComment={onClickComment}
      />
    </>
  );
};

export default CommentWriteContainer;
