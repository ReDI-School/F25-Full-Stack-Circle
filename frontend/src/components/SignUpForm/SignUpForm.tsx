import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';

import { signUpSchema, type SignUpFormData } from '../../utils/validation';
import { Button } from '../Button';
import InputField from '../InputField';

import { Link } from 'react-router';
import { routePaths } from '../../routes/routePaths';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
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
  const onSubmit: SubmitHandler<SignUpFormData> = (data) => console.log(data);

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
        <Button type="submit" className={styles.mb16} stretch>
          Sign Up
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
