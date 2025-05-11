
import React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { Home, ShoppingBag, Users, TruckIcon, Settings, LogOut, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <AdminHeader />
          <main className="flex-1 p-6 overflow-auto bg-brand-light">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

const AdminHeader = () => {
  return (
    <header className="border-b bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <SidebarTrigger className="mr-2" />
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            className="pl-8 w-full" 
            placeholder="Search..." 
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <div className="hidden md:flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center">
            A
          </div>
          <span className="font-medium">Admin User</span>
        </div>
      </div>
    </header>
  );
};

const AdminSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex justify-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/1d299017-1995-4ce4-ad43-76f089edaa31.png" 
            alt="Tour Der Wang" 
            className="h-8 w-auto" 
          />
          <span className="font-bold text-brand-orange">Tour Der Wang</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/" className="flex items-center">
                <Home className="w-4 h-4 mr-3" />
                <span>Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/orders" className="flex items-center">
                <ShoppingBag className="w-4 h-4 mr-3" />
                <span>Orders</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/restaurants" className="flex items-center">
                <Users className="w-4 h-4 mr-3" />
                <span>Restaurants</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/drivers" className="flex items-center">
                <TruckIcon className="w-4 h-4 mr-3" />
                <span>Drivers</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/settings" className="flex items-center">
                <Settings className="w-4 h-4 mr-3" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="flex items-center w-full text-left">
                <LogOut className="w-4 h-4 mr-3" />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminLayout;
