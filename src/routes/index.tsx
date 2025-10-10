import { createFileRoute } from '@tanstack/react-router';
import { Portfolio } from '@/pages/portfolio.tsx';

export const Route = createFileRoute('/')({
  component: Portfolio,
});
