import { Box } from "@material-ui/core";
import ScrollAnimation from "../_common/ScrollAnimation";
import Video from "../_common/Video";
import featuresData from "../../core/const/feature";
import FeatureSlider from "../sliders/FeatureSlider";

import "./style.scss";

export default function FeaturesList() {
  return (
    <section className="section section--features">
      <div className="container">
        <h2 className="h-2">What we do</h2>
        <Box className="features">
          {featuresData.map((it, idx) => (
            <div key={it.id} className="feature">
              <it.bg className="feature__gradient-bg" />
              {it?.path && <it.path className="feature__path" />}
              <ScrollAnimation
                effect={idx % 2 ? "fadeInScreenRight" : "fadeInScreenLeft"}
                duration={1500}
              >
                <div className="feature__mockup">
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
                className="feature__numb"
              >
                {++idx}
              </ScrollAnimation>
              <div className="feature__info">
                <ScrollAnimation
                  effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                >
                  <h5 className="h-4">{it.caption}</h5>
                </ScrollAnimation>

                <ScrollAnimation
                  effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                >
                  <p className="feature__descr">{it.descr}</p>
                </ScrollAnimation>
              </div>
            </div>
          ))}
        </Box>
        <Box className="slider--features">
          <FeatureSlider />
        </Box>
      </div>
    </section>
  );
}
