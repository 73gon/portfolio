import { createFileRoute } from '@tanstack/react-router';
import { Portfolio } from '@/pages/portfolio';

export const Route = createFileRoute('/')({
  component: Portfolio,
});
