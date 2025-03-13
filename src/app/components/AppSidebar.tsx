import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const items = [
  { title: "Dashboard", url: "/AdminPortal/Dashboard", icon: Home },
  {
    title: "Product Management",
    url: "/AdminPortal/ProductManagement",
    icon: Inbox,
  },
  {
    title: "Order Management",
    url: "/AdminPortal/OrderManagement",
    icon: Calendar,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-78 min-h-screen bg-white shadow-xl border-r border-gray-300">
      <SidebarContent className="p-6">
        <h2 className="text-2xl font-bold text-black mb-8">My Dashboard</h2>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="group">
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-5 p-4 rounded-lg transition duration-300 
                      hover:bg-gray-200 hover:shadow-md"
                    >
                      <item.icon className="w-7 h-7 text-black transition" />
                      <span className="text-black text-lg font-semibold">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    className="w-full text-left p-4 mt-8 rounded-lg flex items-center justify-between
                    bg-gray-200 hover:bg-gray-300 transition"
                  >
                    <span className="text-black text-lg font-semibold">
                      Settings
                    </span>
                    <span className="text-gray-600">▼</span>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="bottom"
                  align="start"
                  className="  w-full bg-white text-black border border-gray-300 shadow-lg rounded-md mt-2"
                >
                  <DropdownMenuItem className="p-4 text-lg hover:bg-gray-200 cursor-pointer">
                    <a href="/AdminPortal/EditProfile">Account</a>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="p-4 text-lg hover:bg-gray-200 cursor-pointer text-red-500 font-bold">
                    <a href="../Auth/Login">Sign out</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
