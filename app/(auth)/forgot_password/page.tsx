import ForgotPassword from '@/components/ui/AuthForms/ForgotPassword';
import Container from '@/components/ui/Container';

export default function ForgotPasswordPage({
  searchParams
}: {
  searchParams: { disable_button: boolean };
}) {
  return (
    <Container>
      <ForgotPassword
        redirectMethod="client"
        disableButton={searchParams.disable_button}
      />
    </Container>
  );
}
