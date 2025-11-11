import SignUpForm from '../../components/SignUpForm/SignUpForm';

import styles from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.signin}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
