import { IQuery } from "../../../../commons/types/generated/types";

export interface CommentListProps {
  data?: Pick<IQuery, "fetchBoardComments">;
}
