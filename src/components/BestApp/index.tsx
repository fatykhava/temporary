import React from "react";
import { Box, Button } from "@material-ui/core";
import ScrollAnimation from "../_common/ScrollAnimation";
import { ReactComponent as Stone1 } from "../../assets/images/stone1.svg";
import { ReactComponent as Stone2 } from "../../assets/images/stone2.svg";

import "./style.scss";

export default function BestApp() {
  return (
    <ScrollAnimation
      tag="section"
      className="Banner Section"
      effect="fadeInTopSmall"
    >
      <div className="bestApp">
        <div className="container">
          <div className="best__inner">
            <div className="textBest">
              <ScrollAnimation
                className="stone1"
                tag="span"
                effect="rotate"
                duration={1500}
              >
                <Stone1 />
              </ScrollAnimation>
              <ScrollAnimation
                className="stone2"
                tag="span"
                effect="rotate"
                duration={1500}
              >
                <Stone2 />
              </ScrollAnimation>
              <ScrollAnimation
                tag="div"
                effect="fadeInBottom"
              >
                <p className="BestApp-TextSpan BestWidth">
                  We will make the best app for your brand - and we are willing
                  to prove it.
                </p>
                <p className="BestApp-TextSpan normal">
                  Even if you are undecided or on another app already, we will
                  build you a custom app with no cost or no risk to you.
                </p>
                <p className="BestApp-TextSpan">
                  You have nothing to lose - let us show you our world-class
                  work that has made our apps some of the biggest and most
                  successful fitness apps on the planet.
                </p>
                <p className="BestApp-TextSpan normal">
                  We’d like the opportunity to discuss this in more detail. This
                  offer is only the start of what we could achieve for your
                  brand.
                </p>
                <p className="BestApp-TextSpan normal">
                  Give us a call and let us explain how.
                </p>
                <Box alignItems="center">
                  <Button
                    style={{ background: "#ffff" }}
                    variant="contained"
                    color="default"
                    disableElevation
                    href="tel: 0-800-111-222"
                  >
                    contact us
                  </Button>
                </Box>
                <p className="thank">Thank you for your time!</p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
