import React from "react";
import ScrollAnimation from "../_common/ScrollAnimation";
import { ReactComponent as MadfitLogo } from "../../assets/images/madfit.svg";
import { ReactComponent as Rect3 } from "../../assets/images/rect3.svg";
import girlPwr from "../../assets/images/girlPower.png";
import girlPhone from "../../assets/images/girlPhone.png";
import madfit from "../../assets/images/madfit22.png";
import wave from "../../assets/images/wave.png";

import "./style.scss";
import styles from "./style.js";
import { Box, Button } from "@material-ui/core";

const StudioData = [
  {
    id: "001",
    title: "Instantly Successful",
    caption: "Six-Figure Revenue",
    descr: "On Day One of Launch",
  },
  {
    id: "002",
    title: "Over 2000",
    caption: "5 stars reviews",
    descr: "Across Apple Store and Google Play",
  },
];

export default function Madfit() {
  return (
    <section>
      <div className="madfit">
        <div className="container">
          <div className="Banner-TextSpan">
            <ScrollAnimation
              className="madfitLogo"
              tag="div"
              effect="fadeInTop"
              duration={1500}
            >
              <MadfitLogo className="mobile__none" />
            </ScrollAnimation>
            <p className="oneOfOur">One of Our</p>
            <h2 className="h-2 white">Flagship apps</h2>
          </div>
          <div className="madfit_container">
            <ScrollAnimation effect="fadeInLeft" duration={1500}>
              <ScrollAnimation
                isEaseOut
                effect="rotate"
                duration={1500}
                className="Banner-Blotch"
              >
                <Rect3 className="rect3" />
              </ScrollAnimation>
              <div className="girlPwr">
                <img src={girlPwr} alt="girl" className="girlPower" />
                <img src={girlPhone} alt="Phone" className="girlPhone" />
              </div>
              <div className="waveBlock">
                <img src={wave} alt="wave" className="wave" />
                <div className="logo">
                  <img src={madfit} alt="Madfit" className="mobile--madfit" />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation tag="div" effect="fadeInRight" duration={1500}>
              <div className="madfit_text">
                <p className="officialApp mobile__none">
                  Official app of the day
                </p>
                <p className="appStore mobile__none">In The Apple App Store</p>
                {StudioData.map((value) => (
                  <div key={value.id} className="madfit_advantages">
                    <p className="madfit_description">{value.title}</p>
                    <p className="madfit_caption">{value.caption}</p>
                    <p className="madfit_description">{value.descr}</p>
                  </div>
                ))}
                <div className="mobile__none">
                  <Box alignItems="center">
                    <Button
                      style={styles.button}
                      variant="contained"
                      color="default"
                      disableElevation
                      href="https://maddielymburner.co/"
                    >
                      learn more
                    </Button>
                  </Box>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
