import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueInput = styled.input`
  border-color: blue;
  font-size: ${(props) => props.qqq};
`;

export const YellowBtn = styled.button`
  background-color: ${(props) => (props.BtnColor ? "yellow" : "default")};
`;
