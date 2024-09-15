'use client';
import { signInWithOAuth } from '@/utils/auth-helpers/client';
import { type Provider } from '@supabase/supabase-js';
import { GitHubIcon, GoogleIcon } from '../Icons';

export default function OauthSignIn() {
  const handleSubmit = async (provider: Provider) => {
    await signInWithOAuth(provider);
  };

  return (
    <>
      <button
        onClick={() => handleSubmit('google')}
        className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      >
        <GoogleIcon />
        <span className="text-sm font-semibold leading-6">Google</span>
      </button>

      <button
        onClick={() => handleSubmit('github')}
        className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      >
        <GitHubIcon />
        <span className="text-sm font-semibold leading-6">GitHub</span>
      </button>
    </>
  );
}
