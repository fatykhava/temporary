import React from "react";
import ScrollAnimation from "../_common/ScrollAnimation";
import { ReactComponent as Rect1 } from "../../assets/images/rect1.svg";
import srcGirl from "../../assets/images/girl.png";
import srcGirl2x from "../../assets/images/girl@2x.png";
import srcIphone from "../../assets/images/phone.png";
import srcIphone2x from "../../assets/images/phone@2x.png";
import srcButtons from "../../assets/images/buttons.png";
import srcButtons2x from "../../assets/images/buttons@2x.png";

import "./style.scss";

export default function Hero() {
  return (
    <ScrollAnimation
      tag="section"
      className="Banner Section"
      effect="fadeInTopSmall"
    >
      <div className="hero">
        <div className="container">
          <div className="hero__inner">
            <h1 className="h-1">
              <ScrollAnimation
                tag="span"
                className="Banner-TextSpan"
                effect="fadeInLeft"
                delay={250}
              >
                {"YOUR APP\nYOUR BRAND\nYOUR WAY"}
              </ScrollAnimation>
            </h1>
            <div className="hero__graphics">
              <ScrollAnimation
                isEaseOut
                effect="rotate"
                duration={1500}
                className="Banner-Blotch"
              >
                <Rect1 className="hero__rect" />
              </ScrollAnimation>
              <ScrollAnimation
                className="Banner-ImgBlock"
                effect="fadeInTop"
                duration={1500}
              >
                <div className="Banner-Img">
                  <img
                    src={srcGirl}
                    srcSet={`${srcGirl2x} 2x`}
                    alt="Girl"
                    className="hero__girl"
                  />
                  <img
                    src={srcIphone}
                    srcSet={`${srcIphone2x} 2x`}
                    alt="Phone"
                  />
                  <img
                    src={srcButtons}
                    srcSet={`${srcButtons2x} 2x`}
                    alt="Buttons"
                    className="hero__buttons"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
