import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  useTracks,
  useAlbums,
  useReleases,
  useDistributors,
  usePromoTasks,
} from "@/hooks/useDatabase";
import {
  Music,
  Disc3,
  Calendar,
  Truck,
  Megaphone,
  Plus,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";

export function QuickCommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const { data: tracks = [] } = useTracks();
  const { data: albums = [] } = useAlbums();
  const { data: releases = [] } = useReleases();
  const { data: distributors = [] } = useDistributors();
  const { data: promoTasks = [] } = usePromoTasks();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const runCommand = (action: () => void) => {
    onOpenChange(false);
    action();
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search catalog, releases, distributors, or quick actions..." />
      <CommandList className="max-h-[380px]">
        <CommandEmpty>No results found in Relizo Studio.</CommandEmpty>

        {/* Quick Actions */}
        <CommandGroup heading="Quick Actions">
          <CommandItem
            onSelect={() => runCommand(() => navigate("/tracks/new"))}
            className="cursor-pointer"
          >
            <Plus className="mr-2 h-4 w-4 text-primary" />
            <span>Create New Track</span>
            <span className="ml-auto text-[10px] text-muted-foreground font-mono">/tracks/new</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/releases"))}
            className="cursor-pointer"
          >
            <Calendar className="mr-2 h-4 w-4 text-sky-500" />
            <span>Open Release Calendar & Gantt</span>
            <span className="ml-auto text-[10px] text-muted-foreground font-mono">Gantt</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/"))}
            className="cursor-pointer"
          >
            <LayoutDashboard className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>Go to Studio Dashboard</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        {/* Tracks */}
        {tracks.length > 0 && (
          <CommandGroup heading={`Tracks (${tracks.length})`}>
            {tracks.slice(0, 5).map((track) => (
              <CommandItem
                key={track.id}
                value={`${track.title} ${track.artist} ${track.version_name} ${track.isrc}`}
                onSelect={() => runCommand(() => navigate(`/tracks/${track.id}`))}
                className="cursor-pointer"
              >
                <Music className="mr-2 h-4 w-4 text-primary shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-medium text-xs truncate">
                    {track.title} {track.version_name && `(${track.version_name})`}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate">
                    {track.artist} · {track.genre} · {track.status}
                  </span>
                </div>
                <ArrowRight className="ml-auto h-3 w-3 text-muted-foreground shrink-0" />
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {/* Albums */}
        {albums.length > 0 && (
          <CommandGroup heading={`Albums (${albums.length})`}>
            {albums.map((album) => (
              <CommandItem
                key={album.id}
                value={`${album.title} ${album.artist} ${album.label}`}
                onSelect={() => runCommand(() => navigate(`/albums/${album.id}`))}
                className="cursor-pointer"
              >
                <Disc3 className="mr-2 h-4 w-4 text-amber-500 shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-medium text-xs truncate">{album.title}</span>
                  <span className="text-[10px] text-muted-foreground truncate">
                    {album.artist} · {album.release_type} · {album.release_date}
                  </span>
                </div>
                <ArrowRight className="ml-auto h-3 w-3 text-muted-foreground shrink-0" />
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {/* Releases */}
        {releases.length > 0 && (
          <CommandGroup heading={`Releases (${releases.length})`}>
            {releases.slice(0, 4).map((rel) => (
              <CommandItem
                key={rel.id}
                value={`${rel.title} ${rel.type} ${rel.status}`}
                onSelect={() => runCommand(() => navigate("/releases"))}
                className="cursor-pointer"
              >
                <Calendar className="mr-2 h-4 w-4 text-cyan-500 shrink-0" />
                <span className="font-medium text-xs truncate">{rel.title}</span>
                <span className="ml-2 text-[10px] text-muted-foreground font-mono">
                  {rel.planned_release_date}
                </span>
                <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-muted">
                  {rel.status}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {/* Distributors */}
        {distributors.length > 0 && (
          <CommandGroup heading={`Distributors (${distributors.length})`}>
            {distributors.map((d) => (
              <CommandItem
                key={d.id}
                value={`${d.name} ${d.delivery_method} ${d.contact_email}`}
                onSelect={() => runCommand(() => navigate("/distributors"))}
                className="cursor-pointer"
              >
                <Truck className="mr-2 h-4 w-4 text-emerald-500 shrink-0" />
                <span className="font-medium text-xs truncate">{d.name}</span>
                <span className="ml-2 text-[10px] text-muted-foreground">
                  ({d.distribution_status})
                </span>
                <span className="ml-auto text-[10px] text-muted-foreground">
                  {d.delivery_method}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {/* Promo Tasks */}
        {promoTasks.length > 0 && (
          <CommandGroup heading={`Promotion Campaigns (${promoTasks.length})`}>
            {promoTasks.slice(0, 4).map((p) => (
              <CommandItem
                key={p.id}
                value={`${p.campaign_name} ${p.platform} ${p.track_or_album}`}
                onSelect={() => runCommand(() => navigate("/promotion"))}
                className="cursor-pointer"
              >
                <Megaphone className="mr-2 h-4 w-4 text-pink-500 shrink-0" />
                <span className="font-medium text-xs truncate">{p.campaign_name}</span>
                <span className="ml-2 text-[10px] text-muted-foreground">
                  [{p.platform}]
                </span>
                <span className="ml-auto text-[10px] text-muted-foreground">
                  {p.status}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
