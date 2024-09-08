'use client';

import OauthSignIn from '@/components/ui/AuthForms/OauthSignIn';
import { handleRequest } from '@/utils/auth-helpers/client';
import { signInWithPassword, signUp } from '@/utils/auth-helpers/server';
import { getUser } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import { zodResolver } from '@hookform/resolvers/zod';
import { clsx } from 'clsx';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi2';
import { z } from 'zod';

// Define prop type with allowEmail boolean
interface PasswordSignInProps {
  redirectMethod: string;
}

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Not a valid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
});

type FormFields = z.infer<typeof schema>;

export default function Register({ redirectMethod }: PasswordSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await handleRequest(data, signUp, router);
  };

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form
            noValidate={true}
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  {...register('email')}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby="email-error"
                  className={clsx(
                    'block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                    {
                      'ring-red-300 focus:ring-red-500 focus:ring-1 text-red-900':
                        errors.email
                    }
                  )}
                />
                {errors.email && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <HiExclamationCircle
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 text-sm text-red-600"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  aria-invalid={errors.password ? 'true' : 'false'}
                  aria-describedby="password-error"
                  className={clsx(
                    'block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                    {
                      'ring-red-300 focus:ring-red-500 focus:ring-1 text-red-900':
                        errors.password
                    }
                  )}
                />
                {errors.password && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <HiExclamationCircle
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.password && (
                <p
                  id="password-error"
                  className="mt-2 text-sm text-red-600"
                  role="alert"
                >
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <div>
            <div className="relative mt-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <OauthSignIn />
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
