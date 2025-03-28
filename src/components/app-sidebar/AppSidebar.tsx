"use client"
import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  MapPinHouse,
  SquareTerminal,
  CircleUser,
  LayoutDashboard,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "../nav-user/NavUser";
import { NavMain } from "../nav-main/NavMain";
import Link from "next/link"
const data = {
  user: {
    name: "shadcn",
    email: "jeral@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Service Management",
      url: "/dashboard/services",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Add New Service",
          url: "/dashboard/services/add-new-service",
        },
      ],
    },
    {
      title: "Author Management",
      url: "/dashboard/authors",
      icon: Bot,
      items: [
        {
          title: "Add New Author",
          url: "/dashboard/authors/add-new-author",
        },
      ],
    },
    {
      title: "Blog Management",
      url: "/dashboard/blogs",
      icon: BookOpen,
      items: [
        {
          title: "Add New Blog",
          url: "/dashboard/blogs/add-new-blog",
        },
      ],
    },
    {
      title: "Property Management",
      url: "/dashboard/properties",
      icon: MapPinHouse,
      items: [
        {
          title: "Add New Property",
          url: "/dashboard/properties/add-new-property",
        },
      ],
    },
    {
      title: "Agent Management",
      url: "/dashboard/agents",
      icon: CircleUser,
      items: [
        {
          title: "Add New Agent",
          url: "/dashboard/agents/add-new-agent",
        },
      ],
    },
  ]
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))] mt-12"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href='/dashboard'>
              <SidebarMenuButton size="lg" asChild>
                  <div className="flex items-center">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <Command className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Acme Inc</span>
                      <span className="truncate text-xs">Enterprise</span>
                    </div>
                  </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}