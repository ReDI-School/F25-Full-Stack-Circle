import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(4, 'Your password must contain between 4 and 60 characters')
    .max(60, 'Your password must contain between 4 and 60 characters'),
  rememberMe: z.boolean().optional(),
});

export type SignInFormData = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
    password1: z
      .string()
      .min(1, 'Password is required')
      .min(4, 'Your password must contain between 4 and 60 characters')
      .max(60, 'Your password must contain between 4 and 60 characters'),
    password2: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password1 === data.password2, {
    message: 'Passwords do not match',
    path: ['password2'],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
