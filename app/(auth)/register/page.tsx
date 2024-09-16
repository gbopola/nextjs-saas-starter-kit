import { Register } from '@/components/ui/AuthForms';
import Container from '@/components/ui/Container';
import { checkUserAndRedirect } from '@/utils/auth';

export default async function RegisterPage() {
  await checkUserAndRedirect();
  return (
    <Container>
      <Register redirectMethod="client" />
    </Container>
  );
}
