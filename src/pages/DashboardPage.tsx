import { useTracks, useReleases, usePromoTasks, useDistributors } from "@/hooks/useDatabase";
import { StatusBadge } from "@/components/StatusBadge";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  Loader2,
  Music2,
  Calendar,
  Truck,
  Megaphone,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Disc3,
  SlidersHorizontal,
  Clock,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: tracks = [], isLoading: lt } = useTracks();
  const { data: releases = [], isLoading: lr } = useReleases();
  const { data: promoTasks = [], isLoading: lp } = usePromoTasks();
  const { data: distributors = [], isLoading: ld } = useDistributors();

  if (lt || lr || lp || ld) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const statusCounts = releases.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const barData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));

  const statusColors: Record<string, string> = {
    Draft: "hsl(215, 16%, 47%)",
    Scheduled: "hsl(199, 89%, 48%)",
    Submitted: "hsl(38, 92%, 50%)",
    Ready: "hsl(142, 71%, 45%)",
    Released: "hsl(262, 83%, 58%)",
  };

  const pieData = barData.map((d) => ({ ...d, color: statusColors[d.name] || "#999" }));
  const pendingPromo = promoTasks.filter((t) => t.status !== "Completed");
  const activeDistributors = distributors.filter((d) => d.distribution_status === "Active");

  const upcomingReleases = releases
    .filter((r) => r.status !== "Released")
    .sort((a, b) => a.planned_release_date.localeCompare(b.planned_release_date))
    .slice(0, 5);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Studio Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-border/50">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Studio Dashboard</h1>
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              Live Operations
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Central command for music catalog, release distribution pipeline, and promotional campaigns.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link to="/releases">
            <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 shadow-2xs">
              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
              Calendar & Gantt
            </Button>
          </Link>
          <Link to="/tracks/new">
            <Button size="sm" className="h-8 text-xs gap-1.5 shadow-xs">
              <Plus className="h-3.5 w-3.5" />
              Upload Track
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Tracks */}
        <Link to="/tracks" className="group">
          <div className="rounded-xl bg-card border border-border/60 p-4 shadow-studio hover:shadow-studio-lg hover:border-primary/40 transition-all duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.08em] font-semibold text-muted-foreground">
                Catalog Tracks
              </span>
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Music2 className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <div className="text-2xl font-bold tabular-nums tracking-tight">{tracks.length}</div>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-0.5">
                <TrendingUp className="h-3 w-3" /> Ready for sync
              </span>
            </div>
          </div>
        </Link>

        {/* Releases */}
        <Link to="/releases" className="group">
          <div className="rounded-xl bg-card border border-border/60 p-4 shadow-studio hover:shadow-studio-lg hover:border-sky-500/40 transition-all duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.08em] font-semibold text-muted-foreground">
                Release Pipeline
              </span>
              <div className="w-7 h-7 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                <Disc3 className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <div className="text-2xl font-bold tabular-nums tracking-tight">{releases.length}</div>
              <span className="text-[10px] text-muted-foreground">
                {upcomingReleases.length} upcoming
              </span>
            </div>
          </div>
        </Link>

        {/* Active Distributors */}
        <Link to="/distributors" className="group">
          <div className="rounded-xl bg-card border border-border/60 p-4 shadow-studio hover:shadow-studio-lg hover:border-emerald-500/40 transition-all duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.08em] font-semibold text-muted-foreground">
                Distributors
              </span>
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                <Truck className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <div className="text-2xl font-bold tabular-nums tracking-tight">{activeDistributors.length}</div>
              <span className="text-[10px] text-muted-foreground">
                {distributors.length} registered
              </span>
            </div>
          </div>
        </Link>

        {/* Pending Promos */}
        <Link to="/promotion" className="group">
          <div className="rounded-xl bg-card border border-border/60 p-4 shadow-studio hover:shadow-studio-lg hover:border-pink-500/40 transition-all duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.08em] font-semibold text-muted-foreground">
                Promo Campaigns
              </span>
              <div className="w-7 h-7 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                <Megaphone className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <div className="text-2xl font-bold tabular-nums tracking-tight">{pendingPromo.length}</div>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">
                Action required
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Analytics Visual Charts (Full Width Bento) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Releases by Status Bar Chart */}
        <div className="rounded-xl bg-card border border-border/60 shadow-studio p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xs uppercase tracking-[0.08em] font-semibold text-muted-foreground">
                Releases by Status
              </h2>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Current milestone volume across production & distribution
              </p>
            </div>
            <span className="text-xs font-mono font-medium text-foreground bg-muted/70 px-2 py-0.5 rounded">
              {releases.length} total
            </span>
          </div>

          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "currentColor" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "currentColor" }}
                  allowDecimals={false}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    fontSize: "12px",
                  }}
                  cursor={{ fill: "hsl(var(--muted)/0.4)" }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {barData.map((entry) => (
                    <Cell key={entry.name} fill={statusColors[entry.name] || "#999"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution Donut Chart */}
        <div className="rounded-xl bg-card border border-border/60 shadow-studio p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-xs uppercase tracking-[0.08em] font-semibold text-muted-foreground">
                Pipeline Balance
              </h2>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Proportional distribution of active release stages
              </p>
            </div>
          </div>

          <div className="h-44 flex items-center justify-center my-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={65}
                  innerRadius={42}
                  paddingAngle={3}
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center pt-2 border-t border-border/40">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/40 text-xs">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                <span className="text-[11px] font-medium text-foreground">{d.name}</span>
                <span className="text-[10px] text-muted-foreground font-mono">({d.value})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operational Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Upcoming Releases */}
        <div className="rounded-xl bg-card border border-border/60 shadow-studio overflow-hidden">
          <div className="px-4 py-3 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-sky-500" />
              <h2 className="text-xs uppercase tracking-[0.08em] font-semibold text-foreground">
                Upcoming Releases
              </h2>
            </div>
            <Link to="/releases" className="text-[11px] text-primary hover:underline flex items-center gap-1">
              View All <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="divide-y divide-border/30">
            {upcomingReleases.length === 0 ? (
              <div className="py-10 text-center text-xs text-muted-foreground">
                No upcoming releases scheduled.
              </div>
            ) : (
              upcomingReleases.map((r) => (
                <Link
                  to="/releases"
                  key={r.id}
                  className="flex items-center justify-between px-4 py-3 hover:bg-muted/40 transition-colors group"
                >
                  <div className="min-w-0 flex-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {r.title}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-muted text-muted-foreground">
                        {r.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground font-mono">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span>{r.planned_release_date}</span>
                      {r.upc && <span>· UPC: {r.upc}</span>}
                    </div>
                  </div>
                  <StatusBadge status={r.status} />
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Pending Promotional Tasks */}
        <div className="rounded-xl bg-card border border-border/60 shadow-studio overflow-hidden">
          <div className="px-4 py-3 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Megaphone className="h-4 w-4 text-pink-500" />
              <h2 className="text-xs uppercase tracking-[0.08em] font-semibold text-foreground">
                Active Promotion Campaigns
              </h2>
            </div>
            <Link to="/promotion" className="text-[11px] text-primary hover:underline flex items-center gap-1">
              Manage <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="divide-y divide-border/30">
            {pendingPromo.length === 0 ? (
              <div className="py-10 text-center text-xs text-muted-foreground">
                All promotional campaigns completed.
              </div>
            ) : (
              pendingPromo.slice(0, 5).map((pt) => (
                <Link
                  to="/promotion"
                  key={pt.id}
                  className="flex items-center justify-between px-4 py-3 hover:bg-muted/40 transition-colors group"
                >
                  <div className="min-w-0 flex-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {pt.campaign_name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-pink-500/10 text-pink-600 dark:text-pink-400 font-medium">
                        {pt.platform}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground truncate mt-0.5">
                      Target: {pt.track_or_album}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono tabular-nums text-foreground block">
                      {pt.scheduled_date}
                    </span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">
                      {pt.status}
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Recent Studio Tracks Catalog */}
      <div className="rounded-xl bg-card border border-border/60 shadow-studio overflow-hidden">
        <div className="px-4 py-3 border-b border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music2 className="h-4 w-4 text-primary" />
            <h2 className="text-xs uppercase tracking-[0.08em] font-semibold text-foreground">
              Recent Studio Tracks
            </h2>
          </div>
          <Link to="/tracks" className="text-[11px] text-primary hover:underline flex items-center gap-1">
            Browse All ({tracks.length}) <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="divide-y divide-border/30">
          {tracks.slice(0, 6).map((t) => (
            <Link
              to={`/tracks/${t.id}`}
              key={t.id}
              className="flex items-center justify-between px-4 py-2.5 hover:bg-muted/40 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <Music2 className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-semibold truncate block group-hover:text-primary transition-colors">
                    {t.title}
                    {t.version_name && (
                      <span className="ml-1.5 text-[11px] font-normal text-muted-foreground">
                        ({t.version_name})
                      </span>
                    )}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="truncate">{t.artist}</span>
                    <span>·</span>
                    <span className="text-[11px] px-1 py-0.2 rounded bg-muted/80">{t.genre}</span>
                    {t.bpm && <span className="font-mono text-[11px]">{t.bpm} BPM</span>}
                    {t.musical_key && <span className="font-mono text-[11px]">{t.musical_key}</span>}
                  </div>
                </div>
              </div>
              <StatusBadge status={t.status} />
            </Link>
          ))}
          {tracks.length === 0 && (
            <div className="py-12 text-center text-xs text-muted-foreground">
              No tracks in catalog yet. Click "+ Upload Track" to add your first master.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

