'use client';
import Button from '@/components/ui/Button';
import { requestPasswordUpdate } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Label from '../Label';
import Input from '../Input';
import { HiExclamationCircle } from 'react-icons/hi2';
import { forgotPasswordSchema } from '@/validations/auth';
import { Logo } from '@/components/Shared';

// Define prop type with allowEmail boolean
interface ForgotPasswordProps {
  redirectMethod: string;
  searchParams: string;
}

type FormFields = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword({
  redirectMethod,
  searchParams
}: ForgotPasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  //    get search params from the URL
  const params = searchParams === 'disable_button' ? true : false;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await handleRequest(data, requestPasswordUpdate, router);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo height={10} />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset your password
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
              <div className="relative mt-2 rounded-md shadow-sm">
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
              <Button
                type="submit"
                disabled={isSubmitting || params}
                className="w-full leading-6"
              >
                Send link to email
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
