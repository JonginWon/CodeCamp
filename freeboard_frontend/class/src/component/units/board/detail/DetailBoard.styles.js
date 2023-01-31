import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

// 헤더
export const Header = styled.div`
  width: 100%;
`;
export const WriterWrapper = styled.div`
  display: flex;
  padding-top: 80px;
  margin-bottom: 80px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Info = styled.div`
  margin-bottom: 20px;
`;
export const Avatar = styled.img`
  width: 46.67px;
  height: 46.67px;
  padding-top: 5px;
  margin-right: 16.67px;
`;
export const Date = styled.div`
  font-weight: 400;
  font-size: 16px;
`;
export const Writer = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

//바디
export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  margin-bottom: 40px;
`;
export const Contents = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
