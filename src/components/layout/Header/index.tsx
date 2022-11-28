import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as ArrowBack } from "../../../assets/images/arrow-back.svg";
import "./style.scss";

interface HeaderProps {
  theme?: string;
  back?: string;
}

const Header: React.FC<HeaderProps> = ({ theme = "light", back }) => {
  return (
    <div className={`header ${theme}`}>
      <div className="container">
        <div className="header__inner">
          {back && (
            <Link to={back} className="header__back">
              <ArrowBack />
            </Link>
          )}
          <div className="header__logo-wrapper">
            <Link to="/" className="header__logo-link">
              <Logo className="header__logo" />
            </Link>
            <h5 className='h-5'>A Vibe Media Presentation</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
