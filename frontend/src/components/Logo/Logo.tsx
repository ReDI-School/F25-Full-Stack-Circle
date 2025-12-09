import { Link } from 'react-router';

import LogoImage from '../../assets/images/logo.svg';
import { routePaths } from '../../routes/routePaths';

import styles from './Logo.module.css';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className = '' }: LogoProps) => (
  <Link to={routePaths.home().path} className={`${styles.logo} ${className}`}>
    <img src={LogoImage} alt="Rediflix Logo" />
  </Link>
);
