import React from 'react';
import { Helmet } from 'react-helmet-async';
import { isObject } from 'underscore';
import Header from '../Header';
import Footer from '../Footer';
import './style.scss';

const { APP_NAME } = require('../../../core/constants').default;

interface HeaderProps {
  title?: string | any;
  className?: string;
  back?: string;
  headerTheme?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<HeaderProps> = ({
  children,
  title,
  className,
  headerTheme,
  showHeader = true,
  showFooter = true,
  back,
}) => {
  return (
    <div className={`page-wrap ${className}`}>
      <Helmet
        title={!isObject(title) ? title : title.props.children}
        titleTemplate={`%s - ${APP_NAME}`}
        defaultTitle={`${APP_NAME}`}
        meta={[
          { name: 'description', content: `${APP_NAME} website` },
          { property: 'og:type', content: 'website' },
        ]}
      />
      {showHeader && <Header theme={headerTheme} back={back} />}
      <main className="main">{children}</main>
      {showFooter ? <Footer /> : null}
    </div>
  );
};

export default Layout;
