import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';
import BackgroundEffects from '@/components/BackgroundEffects';
import FloatingChatButton from '@/components/FloatingChatButton';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen relative flex w-full">
        <BackgroundEffects />
        <Navbar />
        <AppSidebar />
        <main className="flex-1 min-h-screen">
          {children}
        </main>
        <FloatingChatButton />
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
