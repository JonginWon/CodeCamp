import { ChangeEvent } from "react";

export interface ICommentWriteProps {
  conChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (event: number) => void;
  onClickComment: () => void;
}
