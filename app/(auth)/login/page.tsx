import { Login } from '@/components/ui/AuthForms';
import Container from '@/components/ui/Container';
import { checkUserAndRedirect } from '@/utils/auth';

export default async function LoginPage() {
  await checkUserAndRedirect();

  return (
    <Container>
      <Login redirectMethod="client" />
    </Container>
  );
}
