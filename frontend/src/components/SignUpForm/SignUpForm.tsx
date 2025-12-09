import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';

import { Button, INPUT_STATES, INPUT_TYPES, InputField } from '../';
import { useAuthContext } from '../../contexts/auth/authContext';
import { routePaths } from '../../routes/routePaths';
import { signUpSchema, type SignUpFormData } from '../../utils/validation';

import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const { signUp } = useAuthContext();

  const [serverError, setServerError] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
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
      if (serverError) setServerError(null);
      await signUp({ email: data.email, password: data.password1 });
    } catch (err) {
      setServerError(
        err instanceof AxiosError
          ? err.response?.data.error
          : 'Failed to sign up. Please try again.'
      );
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formWrap}>
        <h1 className={styles.formTitle}>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fieldsContainer}>
            <InputField
              {...register('email')}
              type={INPUT_TYPES.EMAIL}
              state={errors.email ? INPUT_STATES.ERROR : INPUT_STATES.DEFAULT}
              errorMessage={errors.email?.message}
            />
            <InputField
              {...register('password1')}
              type={INPUT_TYPES.PASSWORD}
              placeholder="New password"
              state={errors.password1 ? INPUT_STATES.ERROR : INPUT_STATES.DEFAULT}
              errorMessage={errors.password1?.message}
            />
            <InputField
              {...register('password2')}
              type={INPUT_TYPES.PASSWORD}
              placeholder="Confirm new password"
              state={errors.password2 ? INPUT_STATES.ERROR : INPUT_STATES.DEFAULT}
              errorMessage={errors.password2?.message}
            />
            {serverError && <p className={styles.errorMessage}>{serverError}</p>}
            <Button type="submit" className={styles.mb16} stretch disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </div>
          <span className={styles.alreadyHaveAnAccountText}>Already have an account?</span>{' '}
          <Link to={routePaths.signIn().path} className={styles.alreadyHaveAnAccountLink}>
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
