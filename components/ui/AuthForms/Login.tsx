'use client';
import OauthSignIn from '@/components/ui/AuthForms/OauthSignIn';
import { handleRequest } from '@/utils/auth-helpers/client';
import { signInWithPassword } from '@/utils/auth-helpers/server';
import { LoginSchema } from '@/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi2';
import { z } from 'zod';
import Button, { ButtonLoading } from '../Button';
import Input from '../Input';
import Label from '../Label';
import { Logo } from '@/components/Shared';

// Define prop type with allowEmail boolean
interface PasswordSignInProps {
  redirectMethod: string;
}

type FormFields = z.infer<typeof LoginSchema>;

export default function Login({ redirectMethod }: PasswordSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(LoginSchema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await handleRequest(data, signInWithPassword, router);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo height={10} />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
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
              <Label htmlFor="email">Email</Label>
              <div className="relative mt-2">
                <Input
                  {...register('email')}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  variant={errors.email && 'error'}
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
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-2">
                <Input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  variant={errors.password && 'error'}
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
                <Link
                  href="/reset-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div>
              {isSubmitting ? (
                <ButtonLoading />
              ) : (
                <Button type="submit" className="w-full leading-6">
                  Sign in
                </Button>
              )}
            </div>
          </form>

          <div>
            <div className="relative mt-8">
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
          Don't have an account?{' '}
          <Link
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}
