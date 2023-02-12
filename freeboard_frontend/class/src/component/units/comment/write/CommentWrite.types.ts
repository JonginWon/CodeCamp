import { ChangeEvent } from "react";

export interface ICommentWriteProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickComment: () => void;
}
