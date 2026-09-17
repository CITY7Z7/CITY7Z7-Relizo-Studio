import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { LogOut, Search, Plus, UserCircle2, Sparkles } from "lucide-react";
import { localClient as supabase } from "@/integrations/local/client";
import { toast } from "sonner";
import { Link } from "react-router";
import { QuickCommandPalette } from "@/components/QuickCommandPalette";

function SignOutButton() {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(error.message);
    else toast.success("Signed out successfully");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSignOut}
      className="h-7 text-xs text-muted-foreground hover:text-destructive px-2"
      title="Sign out from studio"
    >
      <LogOut className="h-3.5 w-3.5 mr-1" />
      <span className="hidden sm:inline">Sign out</span>
    </Button>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background selection:bg-primary/20 selection:text-primary">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Studio Header */}
          <header className="h-12 flex items-center justify-between border-b border-border/70 bg-card/80 backdrop-blur-md px-4 shrink-0 sticky top-0 z-10 shadow-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <SidebarTrigger className="h-8 w-8 rounded-lg hover:bg-muted" />

              {/* Studio Workspace Pill */}
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-muted/60 border border-border/40 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-semibold text-foreground truncate">Neon Records</span>
                <span className="text-muted-foreground font-mono text-[10px]">Studio 01</span>
              </div>
            </div>

            {/* Center Quick Search Trigger (⌘K) */}
            <div className="flex items-center justify-center flex-1 max-w-xs mx-3">
              <button
                type="button"
                onClick={() => setCommandOpen(true)}
                className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-muted/40 hover:bg-muted/80 border border-border/60 text-xs text-muted-foreground transition-colors group shadow-2xs"
                title="Quick Search (⌘K)"
              >
                <div className="flex items-center gap-2 truncate">
                  <Search className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground shrink-0" />
                  <span className="truncate">Search catalog, releases...</span>
                </div>
                <kbd className="pointer-events-none hidden sm:inline-flex h-4 select-none items-center gap-0.5 rounded border border-border/70 bg-card px-1 font-mono text-[10px] font-medium text-muted-foreground shadow-2xs">
                  <span className="text-[10px]">⌘</span>K
                </kbd>
              </button>
            </div>

            {/* Right Action Bar */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Fast Action: New Track */}
              <Link to="/tracks/new">
                <Button size="sm" className="h-7 text-xs gap-1 px-2.5 shadow-xs">
                  <Plus className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">New Track</span>
                </Button>
              </Link>

              {/* User Profile Pill & Signout */}
              <div className="flex items-center gap-1 pl-2 border-l border-border/60">
                <div className="hidden lg:flex items-center gap-1.5 text-xs text-muted-foreground">
                  <UserCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground">Producer</span>
                </div>
                <SignOutButton />
              </div>
            </div>
          </header>

          {/* Main Studio Viewport */}
          <main className="flex-1 overflow-auto bg-background/50">
            {children}
          </main>
        </div>

        {/* Global Command Dialog */}
        <QuickCommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      </div>
    </SidebarProvider>
  );
}

