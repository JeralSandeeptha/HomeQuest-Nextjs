'use client';
import { AlertMessage } from '@/components/alert-message/AlertMessage';
import { AppSidebar } from '@/components/app-sidebar/AppSidebar';
import { SiteHeader } from '@/components/site-header/SiteHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import useNotification from '@/hooks/useNotification';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const context = useNotification();

  console.log(context);

  return (
    <div className="[--header-height:calc(theme(spacing.14))]">

      {
        context.isSuccess && <AlertMessage text='Success' message='Your operation was successful' icon='Jeral'/>
      }
      
      {
        context.isError && <AlertMessage text='Error' message='Your operation is was failed' icon='Jeral'/>
      }
      
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