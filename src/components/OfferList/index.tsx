import srcOffer from "../../assets/images/offer.png";
import srcOffer2x from "../../assets/images/offer@2x.png";

import "./style.scss";

import { Box } from "@material-ui/core";
import ScrollAnimation from "../_common/ScrollAnimation";
import OfferSlider from "../sliders/OfferSlider";
import offerData from "../../core/const/offer";

export default function OfferList() {
  return (
    <ScrollAnimation
      tag="section"
      className="Banner Section section section--offers"
      effect="fadeInTopSmall"
    >
      <div className="container">
        <h2 className="h-2">Our offer</h2>
        <ScrollAnimation effect="fadeInBottom">
          <Box className="offers__description">
            <div>
              <img
                src={srcOffer}
                srcSet={`${srcOffer2x} 2x`}
                alt="Offers"
                className="offers__img"
              />
            </div>
            <h3 className="h-3">We don’t want to sell you an app</h3>
            <p>
              Vibe Media invests in businesses to grow them alongside their
              creators. We work together in a partnership to make the brand the
              best it can be.
            </p>
            <h3 className="h-3">With Vibe Media, you would get:</h3>
          </Box>
        </ScrollAnimation>
        <Box className="offers">
          {offerData.map((it, idx) => (
            <ScrollAnimation
              key={it.id}
              className={`offer offer__gradient-bg-${idx % 2}`}
              effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
            >
              <div>
                {it?.path && <it.path className="offer__path" />}
                {it.descr}
              </div>
            </ScrollAnimation>
          ))}
        </Box>
        <Box className="slider--offers">
          <OfferSlider />
        </Box>
      </div>
    </ScrollAnimation>
  );
}
