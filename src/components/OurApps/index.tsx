import React, { useState, useEffect } from "react";
import ScrollAnimation from "../_common/ScrollAnimation";
import madfit from "../../assets/images/madfit.png";
import madfit2 from "../../assets/images/madfit@2x.png";
import pridfit from "../../assets/images/pridfit.png";
import pridfit2 from "../../assets/images/pridfit@2x.png";
import strongher from "../../assets/images/strongher.png";
import strongher2 from "../../assets/images/strongher@2x.png";

import "./style.scss";

export default function OurApps() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (step === 3) {
        setStep(1);
      } else {
        setStep(step + 1);
      }
    }, 2000);
  }, [step]);

  return (
    <div className="ourApps">
      <div className="container">
        <h2 className="h-2">OUR APPS IN ACTION</h2>
        <div className="ourApps__container">
          <div>
            <ScrollAnimation tag="span" effect="fadeInLeft">
              <div
                className={`apps__img img-1 ${step === 1 ? "visible" : ""}`}
              />
              <div
                className={`apps__img img-2 ${step === 2 ? "visible" : ""}`}
              />
              <div
                className={`apps__img img-3 ${step === 3 ? "visible" : ""}`}
              />
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            tag="span"
            effect="fadeInLeft"
            className="apps__logo"
          >
            <div>
              <img src={madfit} srcSet={`${madfit2} 2x`} alt="Madfit logo" />
            </div>
            <div>
              <img src={pridfit} srcSet={`${pridfit2} 2x`} alt="Pridfit logo" />
            </div>
            <div>
              <img
                src={strongher}
                srcSet={`${strongher2} 2x`}
                alt="Strongher logo"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
