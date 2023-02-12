import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardListProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToDetailBoard: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew: () => void;
}
