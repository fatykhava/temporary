import Slider from "react-slick";

import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import featuresData from "../../../core/const/feature";
import Video from "../../_common/Video";

const sliderSettings = {
  swipeToSlide: true,
  swipe: true,
  adaptiveHeight: true,
  dots: true,
  slidesToShow: 1,
  speed: 1000,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  initialSlide: 0,
  centerPadding: "0px",
  className: "feature__slider",
  arrow: false,
  variableWidth: true,
};

export default function FeatureSlider() {
  return (
    <Slider {...sliderSettings}>
      {featuresData.map((it, idx) => (
        <div key={it.id}>
          <div className={`feature__item bg-${idx}`}>
            <div className="feature__assets">
              <div>
                <img
                  src={it.mockup}
                  srcSet={`${it.mockup2x} 2x`}
                  alt={it.caption}
                />
                {it.id === "001" && <Video feature={it} />}
              </div>
            </div>
            <span className="feature__number">{++idx}</span>
            <div className="feature__content">
              <div>
                <h4 className="h-4">{it.caption}</h4>
                <p className="feature__descr">{it.descr}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
