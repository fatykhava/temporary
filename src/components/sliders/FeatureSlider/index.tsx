import Slider from "react-slick";
import ScrollAnimation from "../../_common/ScrollAnimation";

import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import featuresData from "../../../core/const/feature";
import Video from "../../_common/Video";

const sliderSettings = {
  dots: true,
  slidesToShow: 1,
  speed: 1000,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  initialSlide: 1,
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
            <ScrollAnimation
              className="feature__assets"
              effect={idx % 2 ? "fadeInScreenRight" : "fadeInScreenLeft"}
              duration={1500}
            >
              <div>
                <img
                  src={it.mockup}
                  srcSet={`${it.mockup2x} 2x`}
                  alt={it.caption}
                />
                {it.id === "001" && <Video feature={it} />}
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              tag="span"
              effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
              className="feature__number"
            >
              {++idx}
            </ScrollAnimation>
            <div className="feature__content">
              <div>
                <ScrollAnimation
                  effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                >
                  <h4 className="h-4">{it.caption}</h4>
                </ScrollAnimation>

                <ScrollAnimation
                  effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                >
                  <p className="feature__descr">{it.descr}</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
