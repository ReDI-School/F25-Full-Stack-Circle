import Button from '../../components/Button/Button';
import styles from './SignIn.module.css';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/');
  };

  return (
    <div className={styles.signin}>
      <h1>Sign In</h1>
      <Button onClick={handleSignIn}>Back to Home</Button>
    </div>
  );
};

export default SignIn;
