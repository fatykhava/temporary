import Slider from "react-slick";

import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offerData from "../../../core/const/offer";

const sliderSettings = {
  dots: true,
  slidesToShow: 1,
  speed: 1000,
  slidesToScroll: 1,
  infinite: false,
  centerMode: true,
  initialSlide: 1,
  centerPadding: "0px",
  className: "offer__slider",
  arrow: false,
  variableWidth: true,
};

export default function OfferSlider() {
  return (
    <Slider {...sliderSettings}>
      {offerData.map((it, idx) => (
        <div key={it.id}>
          <div className={`offer__item bg-${idx % 2}`}>{it.descr}</div>
        </div>
      ))}
    </Slider>
  );
}
