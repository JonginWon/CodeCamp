import * as S from "./navigationStyles";

const LayoutNavigation = () => {
  return (
    <>
      <S.Wrapper>
        <S.FreeBoardBtn>자유게시판</S.FreeBoardBtn>
        <S.MarketBtn>중고마켓</S.MarketBtn>
        <S.MyPageBtn>마이페이지</S.MyPageBtn>
      </S.Wrapper>
    </>
  );
};

export default LayoutNavigation;
