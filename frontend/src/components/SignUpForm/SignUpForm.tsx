import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { signUpSchema, type SignUpFormData } from '../../utils/validation';
import { Button } from '../Button';
import InputField from '../InputField';

import { Link } from 'react-router';
import { routePaths } from '../../routes/routePaths';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const {
    register,
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
        <div className={styles.formContainer}>
          <InputField
            {...register('email')}
            type="email"
            state={errors.email ? 'error' : 'default'}
            errorMessage={errors.email?.message}
          />
          <InputField
            {...register('password1')}
            type="password"
            placeholder="New password"
            state={errors.password1 ? 'error' : 'default'}
            errorMessage={errors.password1?.message}
          />
          <InputField
            {...register('password2')}
            type="password"
            placeholder="Confirm new password"
            state={errors.password2 ? 'error' : 'default'}
            errorMessage={errors.password2?.message}
          />
          <Button type="submit" className={styles.mb16} stretch>
            Sign Up
          </Button>
        </div>
        <span className={styles.alreadyHaveAnAccountText}>Already have an account?</span>{' '}
        <Link to={routePaths.signIn().path} className={styles.alreadyHaveAnAccountLink}>
          Sign in
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
