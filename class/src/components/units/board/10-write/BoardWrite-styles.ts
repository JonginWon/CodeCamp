import styled from "@emotion/styled";
import { IYellowBtnProps } from "./BoardWrite.Types";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueInput: any = styled.input`
  border-color: blue;
`;

export const YellowBtn: any = styled.button`
  font-size: ${(props: IYellowBtnProps) => props.qqq};
  background-color: ${(props: IYellowBtnProps) =>
    props.BtnColor ? "yellow" : "default"};
`;
