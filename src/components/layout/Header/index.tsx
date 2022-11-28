import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { ReactComponent as ArrowBack } from '../../../assets/images/arrow-back.svg';
import './style.scss';

const nav = [
  {
    id: '001',
    label: 'What we do',
    link: '/#what_we_do',
  },
  {
    id: '002',
    label: 'Example',
    link: '/#examples',
  },
  {
    id: '003',
    label: 'Offer',
    link: '/#offer',
  },
  {
    id: '004',
    label: 'Team',
    link: '/team',
  },
];

interface HeaderProps {
  theme?: string;
  back?: string;
}

const Header: React.FC<HeaderProps> = ({ theme = 'light', back }) => {
  return (
    <div className={`header ${theme}`}>
      <div className="container">
        <div className="header__inner">
          {back && (
            <Link to={back} className="header__back">
              <ArrowBack />
            </Link>
          )}
          <Link to="/" className="header__logo-link">
            <Logo className="header__logo" />
          </Link>

          <nav className="nav">
            {nav.map((button, buttonIndex) => (
              <a
                key={button.id || buttonIndex}
                className="nav__item"
                href={button.link || '#'}
              >
                {button.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
