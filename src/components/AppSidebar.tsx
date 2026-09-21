import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Music, Disc3, Calendar, Truck, Megaphone, BarChart3, Activity } from "lucide-react";
import { SidebarSocials } from "@/components/SidebarSocials";
import { useTracks, useAlbums, useReleases, usePromoTasks } from "@/hooks/useDatabase";

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const { data: tracks = [] } = useTracks();
  const { data: albums = [] } = useAlbums();
  const { data: releases = [] } = useReleases();
  const { data: promoTasks = [] } = usePromoTasks();

  const isActive = (path: string) =>
    location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  const catalogItems = [
    { title: "Tracks", url: "/tracks", icon: Music, badge: tracks.length },
    { title: "Albums", url: "/albums", icon: Disc3, badge: albums.length },
  ];

  const planningItems = [
    { title: "Release Calendar", url: "/releases", icon: Calendar, badge: releases.length },
  ];

  const distroItems = [
    { title: "Distributors", url: "/distributors", icon: Truck },
    { title: "Promotion", url: "/promotion", icon: Megaphone, badge: promoTasks.filter(t => t.status !== "Completed").length },
  ];

  const dashboardItems = [
    { title: "Dashboard", url: "/", icon: BarChart3 },
  ];

  const renderGroup = (label: string, items: Array<{ title: string; url: string; icon: any; badge?: number }>) => (
    <SidebarGroup className="py-1.5">
      {!collapsed && (
        <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground font-semibold px-2 mb-1 flex items-center justify-between">
          <span>{label}</span>
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu className="space-y-0.5">
          {items.map((item) => {
            const active = isActive(item.url);
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={active}>
                  <NavLink
                    to={item.url}
                    end={item.url === "/"}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all duration-150 group"
                    activeClassName="bg-primary/10 text-primary font-semibold shadow-xs"
                    aria-label={item.title}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <item.icon className={`h-4 w-4 shrink-0 transition-colors ${active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </div>

                    {!collapsed && item.badge !== undefined && item.badge > 0 && (
                      <span className={`text-[10px] font-mono tabular-nums px-1.5 py-0.2 rounded-full font-medium ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:bg-sidebar-accent group-hover:text-foreground"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar/95 backdrop-blur-sm shadow-studio flex flex-col justify-between">
      {/* Studio Brand Header */}
      <div className="px-2 py-3.5 flex items-center justify-between border-b border-sidebar-border/60 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-xs shrink-0 text-primary-foreground font-bold tracking-tighter">
            <Activity className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold tracking-tight text-foreground flex items-center gap-1.5">
                Relizo Studio
                <span className="text-[9px] font-mono font-medium px-1 py-0.2 rounded bg-primary/10 text-primary border border-primary/20">
                  PRO
                </span>
              </span>
              <span className="text-[10px] text-muted-foreground truncate">
                Music Release Operations
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <SidebarContent className="px-2 py-2 flex-1 overflow-y-auto">
        {renderGroup("Overview", dashboardItems)}
        {renderGroup("Music Catalog", catalogItems)}
        {renderGroup("Release Planning", planningItems)}
        {renderGroup("Distribution & Promo", distroItems)}
      </SidebarContent>

      {/* Social Networks in Left Sidebar Footer (Mandated) */}
      <SidebarFooter className="p-0 shrink-0">
        <SidebarSocials collapsed={collapsed} />
      </SidebarFooter>
    </Sidebar>
  );
}

