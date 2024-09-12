import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({
  className,
  variant,
  size,

  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
    />
  );
}

const buttonVariants = cva(
  'inline-flex justify-center items-center font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600',
        secondary:
          'bg-white hover:bg-gray-50 text-gray-900 ring-1 ring-inset ring-gray-300',
        destructive: 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600'
      },
      size: {
        xs: 'px-2 py-1 text-xs rounded',
        sm: 'px-2 py-1 text-sm rounded',
        md: 'px-2.5 py-1.5 text-sm rounded-md',
        lg: 'px-3 py-2 text-sm rounded-md',
        xl: 'px-3.5 py-2.5 text-sm rounded-md'
      }
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);
