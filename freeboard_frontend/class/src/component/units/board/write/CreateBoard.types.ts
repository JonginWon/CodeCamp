import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";
import { Address } from "react-daum-postcode";

export interface ICreateBoardProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  btnColor: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  onClickUpdate: () => void;
  isOpen: boolean;
  onToggleModal: () => void;
  handleComplete: (data: Address) => void;
  zipcode: string;
  address: string;
}

export interface IEditBoard {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ISubmitBtnProps {
  btnColor: boolean;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  boardAddress?: { zipcode?: string; address?: string; addressDetail?: string };
}
