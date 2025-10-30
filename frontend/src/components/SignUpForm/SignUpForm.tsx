import { Controller, useForm, type SubmitHandler } from 'react-hook-form';

import { Button } from '../Button';
import InputField from '../InputField';

type Inputs = {
  email: string;
  password1: string;
  password2: string;
};

const SignUpForm = () => {
  const { control, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputField {...field} />}
        />
        <Controller
          name="password1"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputField {...field} type="Password" placeholder="New password" />
          )}
        />
        <Controller
          name="password2"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputField {...field} type="Password" placeholder="Confirm new password" />
          )}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
