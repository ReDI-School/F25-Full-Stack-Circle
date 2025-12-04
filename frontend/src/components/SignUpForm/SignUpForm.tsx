import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';

import { useAuth } from '../../hooks/useAuth';
import { routePaths } from '../../routes/routePaths';
import { signUpSchema, type SignUpFormData } from '../../utils/validation';
import { Button } from '../Button';
import InputField from '../InputField';

import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const { signUp } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password1: '',
      password2: '',
    },
  });

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    try {
      setError(null);
      setIsLoading(true);
      await signUp({ email: data.email, password: data.password1 });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.formWrap}>
      <h1 className={styles.formTitle}>Sign Up</h1>
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
          name="password1"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputField
              value={value}
              onChange={onChange}
              type="Password"
              placeholder="New password"
              state={errors.password1 ? 'Error' : 'Default'}
              errorMessage={errors.password1?.message}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          name="password2"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputField
              value={value}
              onChange={onChange}
              type="Password"
              placeholder="Confirm new password"
              state={errors.password2 ? 'Error' : 'Default'}
              errorMessage={errors.password2?.message}
              onBlur={onBlur}
            />
          )}
        />
        {error && <div className={styles.errorMessage}>{error}</div>}
        <Button type="submit" className={styles.mb16} stretch disabled={isLoading}>
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </Button>
        <span className={styles.alreadyHaveAnAccountText}>Already have an account?</span>{' '}
        <Link to={routePaths.signIn().path} className={styles.alreadyHaveAnAccountLink}>
          Sign in
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
