import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';

import { routePaths } from '../../routes/routePaths';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import InputField from '../InputField';

type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const SignInForm = () => {
  const { control, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleSignInCodeClick = () => {
    console.log('Sign-In Code clicked');
  };

  const handleForgotPasswordClick = () => {
    console.log('Sign-In Code clicked');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputField {...field} />}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputField {...field} type="Password" />}
        />
        <Button type="submit">Sign In</Button>
        <span>OR</span>
        <Button onClick={handleSignInCodeClick}>Use a Sign-In Code</Button>
        <Button onClick={handleForgotPasswordClick}>Forgot Password?</Button>
        <Controller
          name="rememberMe"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onChange={(checked: boolean) => field.onChange(checked)}
            />
          )}
        />
        <span>New to Rediflix?</span> <Link to={routePaths.signUp().path}>Sign up now</Link>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <a
            href="https://cloud.google.com/security/products/recaptcha"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
