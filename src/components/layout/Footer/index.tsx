import React from "react";
import { ReactComponent as LogoVM } from "../../../assets/images/logoVM.svg";

import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__section">
        <LogoVM className="header__logo" />
        <p className="name__logo">VibeMedia</p>
        <p className="email">
          <a href="mailto:team@vibemedia.app" className="nav_item_footer">
            team@vibemedia.app
          </a>
        </p>
        <p className="email address">{`Smales Farm\n72 Taharoto Road\nTakapuna\nAuckland 0622\nNew Zealand`}</p>
        <nav className="nav__footer">
          <a href="https://vibemedia.app" className="nav_item_footer">
            Vibemedia.App
          </a>
          <a href="https://7glyphs.com" className="nav_item_footer">
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
