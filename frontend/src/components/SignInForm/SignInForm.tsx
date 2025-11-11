import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';

import { routePaths } from '../../routes/routePaths';
import { signInSchema, type SignInFormData } from '../../utils/validation';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import InputField from '../InputField';

import styles from './SignInForm.module.css';

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });
  const onSubmit: SubmitHandler<SignInFormData> = (data) => console.log(data);

  const handleSignInCodeClick = () => {
    console.log('Sign-In Code clicked');
  };

  const handleForgotPasswordClick = () => {
    console.log('Sign-In Code clicked');
  };

  return (
    <div className={styles.formWrap}>
      <h3 className={styles.formTitle}>Sign In</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputField
              value={value}
              onChange={onChange}
              type="Email"
              state={errors.email ? 'Error' : 'Default'}
              errorMessage={errors.email?.message}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputField
              value={value}
              onChange={onChange}
              type="Password"
              state={errors.password ? 'Error' : 'Default'}
              errorMessage={errors.password?.message}
              onBlur={onBlur}
            />
          )}
        />
        <Button type="submit" className={styles.mb16} stretch>
          Sign In
        </Button>
        <span className={styles.or}>OR</span>
        <Button
          onClick={handleSignInCodeClick}
          className={styles.signInCodeButton}
          variant="secondary"
          stretch
        >
          Use a Sign-In Code
        </Button>
        <Button onClick={handleForgotPasswordClick} className={styles.forgotPassword}>
          Forgot Password?
        </Button>
        <Controller
          name="rememberMe"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Checkbox checked={value ?? false} onChange={(checked: boolean) => onChange(checked)} />
          )}
        />
        <div className={styles.newToRediflix}>
          <span className={styles.newToRediflixText}>New to Rediflix?</span>{' '}
          <Link to={routePaths.signUp().path} className={styles.newToRediflixLink}>
            Sign up now
          </Link>
        </div>
        <p className={styles.recaptchaText}>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <a
            href="https://cloud.google.com/security/products/recaptcha"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.recaptchaTextLink}
          >
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
