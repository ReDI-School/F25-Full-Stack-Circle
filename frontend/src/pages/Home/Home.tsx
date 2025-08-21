import logo from '../../assets/images/logo.svg';
import Button from '../../components/Button/Button';
import { config } from '../../config';
import styles from './Home.module.css';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  useEffect(() => {
    const fetchConfig = async () => {
      const { environment, apiUrl } = await config();
      console.log(environment, apiUrl);
    };

    fetchConfig();
  }, []);

  return (
    <div className={styles.home}>
      <img src={logo} alt="Rediflix Logo" width={500} />
      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
};

export default Home;
