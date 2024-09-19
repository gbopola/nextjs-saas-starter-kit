'use client';
import Button from '@/components/ui/Button';
import { updatePassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Label from '../Label';
import Input from '../Input';
import { HiExclamationCircle } from 'react-icons/hi2';
import { updatePasswordSchema } from '@/validations/auth';
import { Logo } from '@/components/Shared';
import { MdErrorOutline } from 'react-icons/md';

interface UpdatePasswordProps {
  redirectMethod: string;
}

type FormFields = z.infer<typeof updatePasswordSchema>;

export default function UpdatePassword({
  redirectMethod
}: UpdatePasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(updatePasswordSchema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await handleRequest(data, updatePassword, router);
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
          Enter your new password to reset your password.
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
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-2">
                <Input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••"
                  variant={errors.password && 'error'}
                />
                {errors.password && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <MdErrorOutline
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
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative mt-2">
                <Input
                  {...register('confirmPassword')}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••"
                  variant={errors.confirmPassword && 'error'}
                />
                {errors.confirmPassword && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <MdErrorOutline
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.confirmPassword && (
                <p
                  id="confirm-password-error"
                  className="mt-2 text-sm text-red-600"
                  role="alert"
                >
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div>
              <Button type="submit" loading={isSubmitting} className="w-full">
                Reset password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
