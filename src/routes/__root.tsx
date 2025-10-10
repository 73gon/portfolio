import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TooltipProvider } from '@/components/ui/tooltip';

export const Route = createRootRoute({
  component: () => (
    <TooltipProvider>
      <div className='flex min-h-screen flex-col'>
        <Navbar />
        <main className='flex-1'>
          <Outlet />
        </main>
        <Footer />
      </div>
      <TanStackRouterDevtools />
    </TooltipProvider>
  ),
});
