import { Container } from '@/components/layout/Container';

export default function Loading() {
  return (
    <Container className="min-h-[50vh] flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-edge border-t-edge-brand rounded-full animate-spin mb-4" />
      <p className="text-body-base text-content-disabled animate-pulse">Loading...</p>
    </Container>
  );
}
