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
import { SignupSchema } from '@/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const Signup = () => {
  const [isPending, startRegisterTransition] = useTransition();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const signinForm = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof SignupSchema>) => {
    setSuccess('');
    setError('');
    startRegisterTransition(async () => {
      try {
        const res = await userInstance.post('/register', values);
        setSuccess(res.data.message);
        signinForm.reset();
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
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...signinForm}>
          <form
            onSubmit={signinForm.handleSubmit(onSubmit)}
            className='space-y-4'
          >
            <FormField
              name='fullName'
              control={signinForm.control}
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John Doe'
                      type='text'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              disabled={isPending}
            />
            <Button
              type='submit'
              disabled={isPending}
            >
              Register
            </Button>
          </form>
        </Form>
        <FormError message={error} />
        <FormSuccess message={success} />
      </CardContent>
      <CardFooter className='justify-center'>
        <p>
          Already have an account <Link href={'/sign-in'}>Login</Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export { Signup };
