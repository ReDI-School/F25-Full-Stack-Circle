import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';

import { Button, Checkbox, INPUT_STATES, INPUT_TYPES, InputField } from '../';
import { useAuthContext } from '../../contexts/auth/authContext';
import { routePaths } from '../../routes/routePaths';
import { signInSchema, type SignInFormData } from '../../utils/validation';

import styles from './SignInForm.module.css';

const SignInForm = () => {
  const { login } = useAuthContext();

  const [serverError, setServerError] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      if (serverError) setServerError(null);
      await login({ email: data.email, password: data.password });
    } catch (err) {
      setServerError(
        err instanceof AxiosError
          ? err.response?.data.error
          : 'Failed to sign in. Please try again.'
      );
    }
  };

  const handleSignInCodeClick = () => {
    console.log('Sign-In Code clicked');
  };

  const handleForgotPasswordClick = () => {
    console.log('Sign-In Code clicked');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formWrap}>
        <h3 className={styles.formTitle}>Sign In</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fieldsContainer}>
            <InputField
              {...register('email')}
              type={INPUT_TYPES.EMAIL}
              state={errors.email ? INPUT_STATES.ERROR : INPUT_STATES.DEFAULT}
              errorMessage={errors.email?.message}
            />
            <InputField
              {...register('password')}
              type={INPUT_TYPES.PASSWORD}
              state={errors.password ? INPUT_STATES.ERROR : INPUT_STATES.DEFAULT}
              errorMessage={errors.password?.message}
            />

            {serverError && <p className={styles.errorMessage}>{serverError}</p>}
            <Button type="submit" className={styles.mb16} stretch disabled={isSubmitting}>
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
          </div>
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
          <Checkbox {...register('rememberMe')} />
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
    </div>
  );
};

export default SignInForm;
