import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function NotFoundPage() {
  return (
    <main className="not-found">
      <Container className="not-found__content">
        <p className="not-found__code">404</p>

        <h1>Page not found</h1>

        <p>
          The page you are looking for does not exist or may have
          been moved.
        </p>

        <Button to="/">
          Return home
        </Button>
      </Container>
    </main>
  );
}

export default NotFoundPage;