import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  border-top: 1px solid #bdbdbd;
`;

export const GuideWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

export const Icon = styled.img`
  margin-right: 14px;
`;

export const Guide = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

export const Rating = styled.input``;

export const ContentsWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 1200px;
  height: 108px;
  padding-left: 20px;
  padding-top: 20px;
  border: none;
  outline: none;
  resize: none;
`;

export const ContentsCount = styled.div`
  padding-left: 20px;
  line-height: 52px;
`;

export const ContentsFooterWrapper = styled.div`
  display: flex;
  border-top: 1px solid #f2f2f2;
  justify-content: space-between;
`;

export const RegisterBtn = styled.button`
  padding: 14px 16px 14px 16px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
