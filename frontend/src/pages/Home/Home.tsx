import logo from '../../assets/images/logo.svg';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <img src={logo} alt="Rediflix Logo" width={500} />
      <Button>Sign In</Button>
    </div>
  );
};

export default Home;
