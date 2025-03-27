import { AppSidebar } from '@/components/app-sidebar/AppSidebar';
import { SiteHeader } from '@/components/site-header/SiteHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            { children }
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );

}

export default DashboardLayout;