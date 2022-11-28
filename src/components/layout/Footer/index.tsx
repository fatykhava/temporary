import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { ReactComponent as LogoVM } from "../../../assets/images/logoVM.svg";

import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__section">
        <LogoVM className="header__logo" />
        <p className="name__logo">VibeMedia</p>
        <p className="number">0 800 111 222</p>
        <p className="email">
          hello@gmail.com
          <p>137 buckley avenue, Hobsonvile, auckland, NZ</p>
        </p>
        <nav className="nav__footer">
          <a href="#" className="nav_item_footer">
            Vibemedia.App
          </a>
          <a href="#" className="nav_item_footer">
            7glyphs.com
          </a>
        </nav>
        <p className="ltd">
          Vibe Media™ Ltd. Copyright © 2022. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
