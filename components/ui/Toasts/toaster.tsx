'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@/components/ui/Toasts/toast';
import { useToast } from '@/components/ui/Toasts/use-toast';
import { Transition } from '@headlessui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiCheckCircle, HiXMark } from 'react-icons/hi2';

export function Toaster() {
  const [show, setShow] = useState(true);
  const { toast, toasts } = useToast();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const status = searchParams.get('status');
    const status_description = searchParams.get('status_description');
    const error = searchParams.get('error');
    const error_description = searchParams.get('error_description');
    if (error || status) {
      toast({
        title: error
          ? (error ?? 'Hmm... Something went wrong.')
          : (status ?? 'Alright!'),
        description: error ? error_description : status_description,
        variant: error ? 'destructive' : undefined
      });
      // Clear any 'error', 'status', 'status_description', and 'error_description' search params
      // so that the toast doesn't show up again on refresh, but leave any other search params
      // intact.
      const newSearchParams = new URLSearchParams(searchParams.toString());
      const paramsToRemove = [
        'error',
        'status',
        'status_description',
        'error_description'
      ];
      paramsToRemove.forEach((param) => newSearchParams.delete(param));
      const redirectPath = `${pathname}?${newSearchParams.toString()}`;
      router.replace(redirectPath, { scroll: false });
    }
  }, [searchParams]);

  return (
    <div>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          // <Toast key={id} {...props}>
          //   <div className="grid gap-1">
          //     {title && <ToastTitle>{title}</ToastTitle>}
          //     {description && (
          //       <ToastDescription>{description}</ToastDescription>
          //     )}
          //   </div>
          //   {action}
          //   <ToastClose />
          // </Toast>
          <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
          >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
              {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
              <Transition show={show}>
                <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <HiCheckCircle
                          aria-hidden="true"
                          className="h-6 w-6 text-green-400"
                        />
                      </div>
                      <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-medium text-gray-900">
                          {title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {description}
                        </p>
                      </div>
                      <div className="ml-4 flex flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            setShow(false);
                          }}
                          className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">Close</span>
                          <HiXMark aria-hidden="true" className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        );
      })}
    </div>
  );
}
