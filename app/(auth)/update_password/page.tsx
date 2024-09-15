import UpdatePassword from '@/components/ui/AuthForms/UpdatePassword';
import Container from '@/components/ui/Container';

export default async function ResetPasswordPage() {
  return (
    <Container>
      <UpdatePassword redirectMethod="client" />
    </Container>
  );
}
