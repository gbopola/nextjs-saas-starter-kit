'use client';
import Button from '@/components/ui/Button';
import { requestPasswordUpdate } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Label from '../Label';
import Input from '../Input';
import { forgotPasswordSchema } from '@/validations/auth';
import { Logo } from '@/components/Shared';
import { MdErrorOutline } from 'react-icons/md';

// Define prop type with allowEmail boolean
interface ForgotPasswordProps {
  redirectMethod: string;
  disableButton?: boolean;
}

type FormFields = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword({
  redirectMethod,
  disableButton
}: ForgotPasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

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
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <h2 className="mt-6 text-center sm:text-3xl text-2xl font-semibold text-gray-900 leading-9">
          Reset your password
        </h2>
        <p className="text-center mt-3 text-gray-600 leading-6">
          Enter your email address and we will send you a link to reset your
          password.
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 sm:px-12">
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
                    <MdErrorOutline
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
                disabled={disableButton}
                loading={isSubmitting}
                className="w-full"
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
