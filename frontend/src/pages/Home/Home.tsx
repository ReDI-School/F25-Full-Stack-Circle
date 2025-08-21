import logo from '../../assets/images/logo.svg';
import Button from '../../components/Button/Button';
import { config } from '../../config';
import styles from './Home.module.css';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  console.log({ config });

  return (
    <div className={styles.home}>
      <img src={logo} alt="Rediflix Logo" width={500} />
      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
};

export default Home;
