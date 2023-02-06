import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1847px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const UserWrapper = styled.div`
  display: ${(props) => (props.isEdit ? "none" : "flex")};
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;
export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
`;
export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding-top: 16px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
`;

export const ZipcodeWrapper = styled.div`
  margin-bottom: 16px;
`;
export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  background: #ffffff;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  margin-right: 16px;
`;
export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  background: #000000;
  color: #ffffff;
`;
export const DetailedAddress = styled.input`
  display: block;
  width: 996px;
  height: 52px;
  margin-bottom: 30px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
`;

export const YoutubeLink = styled.input`
  width: 980px;
  height: 45.78px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;
export const Picture = styled.div`
  display: inline-block;
  width: 78px;
  height: 78px;
  margin-right: 24px;
  background: #bdbdbd;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;
export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background-color: ${({ btnColor }) => (btnColor ? "yellow" : "gray")};
`;

export const Error = styled.div`
  color: red;
  font-size: 15px;
`;
