'use client';
import Button from '@/components/ui/Button';
import { updatePassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Logo from '@/components/Shared/Logo';
import Label from '../Label';
import Input from '../Input';
import { HiExclamationCircle } from 'react-icons/hi2';
import { updatePasswordSchema } from '@/validations/auth';

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
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <Input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="you@example.com"
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
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <Input
                  {...register('confirmPassword')}
                  id="confirmPassword"
                  name="password"
                  type="password"
                  placeholder="you@example.com"
                  variant={errors.confirmPassword && 'error'}
                />
                {errors.confirmPassword && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <HiExclamationCircle
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
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-1.5 leading-6"
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
