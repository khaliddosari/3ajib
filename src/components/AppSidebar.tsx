import { LayoutGrid, Sparkles, Calculator, CreditCard, ChevronLeft, ChevronRight, Lightbulb, X } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useSidebar } from '@/components/ui/sidebar';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export function AppSidebar() {
  const { state, toggleSidebar, isMobile } = useSidebar();
  const collapsed = state === 'collapsed';
  const { t } = useTranslation();

  const sidebarItems = [
    { title: t('sidebar', 'home'), url: '/', icon: LayoutGrid },
    { title: t('sidebar', 'features'), url: '/features', icon: Lightbulb },
    { title: t('sidebar', 'demo'), url: '/demo', icon: Sparkles },
    { title: t('sidebar', 'calculator'), url: '/calculator', icon: Calculator },
    { title: t('sidebar', 'subscription'), url: '/pricing', icon: CreditCard },
  ];




  return (
    <Sidebar
      className={`${collapsed && !isMobile ? 'w-14' : 'w-56'} transition-all duration-300 border-r border-sidebar-border bg-sidebar`}
      collapsible="icon"
    >
      {/* Mobile close button */}
      {isMobile && (
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="font-display font-bold text-lg gradient-text">3ajib</span>
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors"
          >
            <X className="w-5 h-5 text-sidebar-foreground" />
          </button>
        </div>
      )}

      <SidebarContent className={isMobile ? 'pt-2' : 'pt-20'}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                      onClick={() => { if (isMobile) toggleSidebar(); }}
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      {(!collapsed || isMobile) && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Desktop toggle button */}
      {!isMobile && (
        <button
          onClick={toggleSidebar}
          className="absolute bottom-4 right-0 translate-x-1/2 z-50 w-6 h-6 rounded-full bg-sidebar-accent border border-sidebar-border flex items-center justify-center text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
        >
          {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
        </button>
      )}
    </Sidebar>
  );
}
