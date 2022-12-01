import React from "react";
import { Box, Button } from "@mui/material";
import ScrollAnimation from "../_common/ScrollAnimation";
import glyphs from "../../assets/images/glyphs.png";

import "./style.scss";
import styles from "./style.js";

const StudioData = [
  {
    id: "001",
    caption: "Award Winning App Studio",
    descr: "Good Design Award - Gold Accolade Winner",
  },
  {
    id: "002",
    caption: "22 years global experience",
    descr: "More Than 80 App And Brand Launches",
  },
  {
    id: "003",
    caption: "In House App Team",
    descr: "Expert Employees In Our Australasia-Based Office",
  },
];

export default function Studio() {
  return (
    <section>
      <div className="studioApp">
        <div className="container">
          <h2 className="h-2 white">Our Sister App Studio</h2>
          <div className="studio_container">
            <ScrollAnimation isEaseOut tag="span" effect="fadeInLeft">
              <div className="glyphs">
                <img src={glyphs} alt="7 glyphs" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              isEaseOut
              tag="span"
              effect="fadeInRight"
            >
              <div className="studio_advantages">
                {StudioData.map((value) => (
                  <div key={value.id}>
                    <p className="studio_caption">{value.caption}</p>
                    <p className="studio_description">{value.descr}</p>
                  </div>
                ))}
                <Box alignItems="center">
                  <Button
                    style={styles.button}
                    variant="contained"
                    disableElevation
                    href="https://7glyphs.com"
                  >
                    learn more
                  </Button>
                </Box>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
