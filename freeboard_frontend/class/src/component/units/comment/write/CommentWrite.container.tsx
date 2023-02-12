import CommentWritePresenter from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.query";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.query";

const CommentWriteContainer = () => {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onChangeRating = (event: ChangeEvent<HTMLInputElement>): void => {
    setRating(event.target.value);
  };

  const onClickComment = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            contents,
            rating: parseFloat(rating),
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
        onChangeContents={onChangeContents}
        onChangeRating={onChangeRating}
        onClickComment={onClickComment}
      />
    </>
  );
};

export default CommentWriteContainer;
