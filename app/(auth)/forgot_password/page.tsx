import ForgotPassword from '@/components/ui/AuthForms/ForgotPassword';
import Container from '@/components/ui/Container';

export default function ForgotPasswordPage() {
  return (
    <Container>
      <ForgotPassword redirectMethod="client" />
    </Container>
  );
}
