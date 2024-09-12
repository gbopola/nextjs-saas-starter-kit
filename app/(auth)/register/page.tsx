import Login from '@/components/ui/AuthForms/Login';
import Register from '@/components/ui/AuthForms/Register';
import { getUser } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function RegisterPage() {
  const supabase = createClient();
  const [user] = await Promise.all([getUser(supabase)]);

  if (user) {
    return redirect('/dashboard');
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Register redirectMethod="client" />
      </div>
    </>
  );
}
