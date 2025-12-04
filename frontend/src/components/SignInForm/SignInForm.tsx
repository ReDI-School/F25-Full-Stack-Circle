import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';

import { useAuth } from '../../hooks/useAuth';
import { routePaths } from '../../routes/routePaths';
import { signInSchema, type SignInFormData } from '../../utils/validation';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import InputField from '../InputField';

import styles from './SignInForm.module.css';

const SignInForm = () => {
  const { login } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      setError(null);
      setIsLoading(true);
      await login({ email: data.email, password: data.password });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
        {error && <p className={styles.errorMessage}>{error}</p>}
        <Button type="submit" className={styles.mb16} stretch disabled={isLoading}>
          {isLoading ? 'Signing In...' : 'Sign In'}
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
            <Checkbox
              checked={value ?? false}
              onChange={(event) => onChange(event.target.checked)}
            />
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
