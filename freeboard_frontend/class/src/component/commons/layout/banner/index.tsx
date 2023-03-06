import * as S from "./bannerStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LayoutBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <S.Wrapper>
        <Slider {...settings}>
          <div>
            <S.SliderImg src="/images/banner/iphone.jpeg" alt="" />
          </div>
          <div>
            <S.SliderImg src="/images/banner/iphone-14-pro.jpeg" alt="" />
          </div>
          <div>
            <S.SliderImg src="/images/banner/ipad-pro.jpeg" alt="" />
          </div>
        </Slider>
      </S.Wrapper>
    </>
  );
};

export default LayoutBanner;
