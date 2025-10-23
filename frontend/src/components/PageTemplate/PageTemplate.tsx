import { Link } from 'react-router-dom';
import styles from './PageTemplate.module.css';
import type { PageTemplateProps } from './PageTemplate.types';

import Image1 from '../../assets/images/page-template-hero-image.jpg';
import Logo from '../../assets/images/logo.svg?react';

const PageTemplate = ({
  children,
  imageLink = Image1,
  backGroundColor = '',
}: PageTemplateProps) => {
  let divStyle = {};

  if (imageLink) {
    divStyle = { backgroundImage: `url(${imageLink})` };
  } else if (backGroundColor) {
    divStyle = { background: backGroundColor };
  }

  return (
    <div className={styles.wrap} style={divStyle}>
      <div className={styles.navBarWrap}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logoWrap}>
            <Logo />
          </Link>
          <div>{children}</div>
        </nav>
      </div>
    </div>
  );
};

export default PageTemplate;
