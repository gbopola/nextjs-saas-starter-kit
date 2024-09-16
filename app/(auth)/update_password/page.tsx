import { UpdatePassword } from '@/components/ui/AuthForms';
import Container from '@/components/ui/Container';

export default async function ResetPasswordPage() {
  return (
    <Container>
      <UpdatePassword redirectMethod="client" />
    </Container>
  );
}
