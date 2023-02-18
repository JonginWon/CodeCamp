import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  padding-top: 5px;
`;

export const CommentInfoWrapper = styled.div``;

export const CommentTop = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

export const Writer = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-right: 18px;
`;

export const Star = styled(Rate)`
  line-height: 20px;
`;

export const Contents = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;
