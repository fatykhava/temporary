import React from 'react';
import ScrollAnimation from '../_common/ScrollAnimation';
import { ReactComponent as Rect1 } from '../../assets/images/rect1.svg';
import srcGirl from '../../assets/images/girl.png';
import srcGirl2x from '../../assets/images/girl@2x.png';

import './style.scss';

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
                delay={100}
              >
                YOUR APP
              </ScrollAnimation>
              <ScrollAnimation
                tag="span"
                className="Banner-TextSpan"
                effect="fadeInRight"
              >
                YOUR BRAND
              </ScrollAnimation>{' '}
              <ScrollAnimation
                tag="span"
                className="Banner-TextSpan"
                effect="fadeInLeft"
                delay={400}
              >
                YOUR BUSINESS
              </ScrollAnimation>{' '}
              <ScrollAnimation
                tag="span"
                className="Banner-TextSpan"
                effect="fadeInRight"
                delay={550}
              >
                YOUR WAY
              </ScrollAnimation>
            </h1>
            <div className="hero__graphics">
              <ScrollAnimation
                isEaseOut
                effect="scaleOut"
                duration={4000}
                className="Banner-Blotch"
              >
                <Rect1 className="hero__rect" />
              </ScrollAnimation>
              <ScrollAnimation
                className="Banner-ImgBlock"
                effect="fadeInLeft"
                duration={2000}
              >
                <img
                  src={srcGirl}
                  srcSet={`${srcGirl2x} 2x`}
                  alt="Girl"
                  className="hero__girl"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
