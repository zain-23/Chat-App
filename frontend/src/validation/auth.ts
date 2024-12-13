import * as z from 'zod';

const SigninSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email must example@xyz.com' }),
  password: z.string().min(1, { message: 'Password is required' })
});
const SignupSchema = z.object({
  fullName: z.string().min(1, { message: 'Fullname is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email must example@xyz.com' }),
  password: z.string().min(1, { message: 'Password is required' })
});

export { SigninSchema, SignupSchema };
