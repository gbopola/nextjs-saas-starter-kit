import Login from '@/components/ui/AuthForms/Login';
import { getUser } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const supabase = createClient();
  const [user] = await Promise.all([getUser(supabase)]);

  if (user) {
    return redirect('/dashboard');
  }
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Login redirectMethod="client" />
      </div>
    </>
  );
}
