'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { FormError, FormSuccess } from '@/components/ui/formMessage';
import { Input } from '@/components/ui/input';
import { userInstance } from '@/lib/axios';
import { SigninSchema } from '@/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const Signin = () => {
  const [isPending, startLoginTransition] = useTransition();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const signinForm = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof SigninSchema>) => {
    setError('');
    setSuccess('');
    startLoginTransition(async () => {
      try {
        const res = await userInstance.post('/login', values);
        console.log({ res });
        setSuccess(res.data.message);
        signinForm.reset();
        router.push('/chat');
      } catch (error: any) {
        if (error instanceof AxiosError) {
          setError(error.response?.data.message);
          return;
        }
        setError(error.message);
      }
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...signinForm}>
          <form
            onSubmit={signinForm.handleSubmit(onSubmit)}
            className='space-y-4'
          >
            <FormField
              name='email'
              control={signinForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='johndoe@xyz.com'
                      type='email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              disabled={isPending}
            />
            <FormField
              name='password'
              control={signinForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type='password'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              disabled={isPending}
            />
            <Button
              disabled={isPending}
              type='submit'
            >
              Login
            </Button>
          </form>
        </Form>
        <FormError message={error} />
        <FormSuccess message={success} />
      </CardContent>
      <CardFooter>
        <p>
          Don&apos;t have an account <Link href={'/sign-up'}>Register</Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export { Signin };
