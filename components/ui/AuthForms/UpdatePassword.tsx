'use client';
import Button from '@/components/ui/Button';
import { updatePassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

interface UpdatePasswordProps {
  redirectMethod: string;
}

const schema = z
  .object({
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z.string().min(6, {
      message: 'Confirm Password must be at least 6 characters'
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'], // The field to attach the error message to
    message: 'Passwords do not match'
  });

type FormFields = z.infer<typeof schema>;

export default function UpdatePassword({
  redirectMethod
}: UpdatePasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await handleRequest(data, updatePassword, router);
  };

  return (
    <div className="my-8">
      <form
        noValidate={true}
        className="mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="password">New Password</label>
            <input
              {...register('password')}
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              className="w-full p-3 rounded-md bg-zinc-800"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <label htmlFor="passwordConfirm">Confirm New Password</label>
            <input
              {...register('confirmPassword')}
              id="passwordConfirm"
              placeholder="Password"
              type="password"
              name="passwordConfirm"
              autoComplete="current-password"
              className="w-full p-3 rounded-md bg-zinc-800"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <Button type="submit" className="mt-1">
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}
