import { useState } from "react";
import { useSocialLinks, useUpdateSocialLink } from "@/hooks/useDatabase";
import {
  Instagram,
  Youtube,
  Music2,
  ExternalLink,
  Copy,
  Check,
  Pencil,
  Globe,
  Share2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SocialConfig {
  icon: React.ReactNode;
  brandColor: string;
  badgeBg: string;
  placeholder: string;
}

const socialConfigs: Record<string, SocialConfig> = {
  instagram: {
    icon: <Instagram className="h-3.5 w-3.5" />,
    brandColor: "text-pink-500 group-hover:text-pink-600",
    badgeBg: "bg-pink-500/10 border-pink-500/20",
    placeholder: "https://instagram.com/your_handle",
  },
  twitter: {
    icon: <span className="text-[11px] font-bold leading-none">𝕏</span>,
    brandColor: "text-foreground",
    badgeBg: "bg-foreground/10 border-foreground/20",
    placeholder: "https://x.com/your_handle",
  },
  youtube: {
    icon: <Youtube className="h-3.5 w-3.5" />,
    brandColor: "text-red-500 group-hover:text-red-600",
    badgeBg: "bg-red-500/10 border-red-500/20",
    placeholder: "https://youtube.com/@channel",
  },
  tiktok: {
    icon: <Music2 className="h-3.5 w-3.5" />,
    brandColor: "text-cyan-500 group-hover:text-cyan-600",
    badgeBg: "bg-cyan-500/10 border-cyan-500/20",
    placeholder: "https://tiktok.com/@your_handle",
  },
  spotify: {
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.215.353-.675.466-1.027.25-2.812-1.718-6.353-2.107-10.523-1.155-.403.092-.808-.163-.9-.567-.093-.404.163-.809.566-.901 4.568-1.044 8.487-.604 11.634 1.346.353.216.465.675.25 1.027zm1.47-3.262c-.27.44-.848.58-1.288.31-3.218-1.978-8.125-2.55-11.932-1.394-.493.15-1.023-.133-1.173-.627-.15-.494.133-1.024.627-1.174 4.356-1.322 9.775-.681 13.456 1.597.44.27.58.848.31 1.288zm.126-3.41c-3.859-2.292-10.228-2.503-13.899-1.389-.592.18-1.22-.158-1.4-.75-.18-.592.158-1.22.75-1.4 4.223-1.282 11.258-1.037 15.696 1.597.533.316.708 1.008.392 1.541-.316.533-1.008.708-1.541.392z"/>
      </svg>
    ),
    brandColor: "text-emerald-500 group-hover:text-emerald-600",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20",
    placeholder: "https://open.spotify.com/artist/id",
  },
  soundcloud: {
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M1.175 12.225c-.04 0-.077.037-.08.08l-.29 2.508.29 2.457c.003.043.04.08.08.08.04 0 .076-.037.08-.08l.333-2.457-.333-2.508c-.004-.043-.04-.08-.08-.08zm1.096-1.034c-.053 0-.097.043-.1.097l-.27 3.553.27 3.48c.003.054.047.097.1.097.054 0 .097-.043.1-.097l.31-3.48-.31-3.553c-.003-.054-.046-.097-.1-.097zm1.144-.827c-.067 0-.12.054-.124.12l-.24 4.38.24 4.29c.004.067.057.12.124.12.066 0 .12-.053.123-.12l.278-4.29-.278-4.38c-.003-.066-.057-.12-.123-.12zm1.18-.328c-.08 0-.144.064-.148.144l-.21 4.71.21 4.613c.004.08.068.144.148.144.08 0 .144-.064.147-.144l.244-4.614-.244-4.71c-.003-.08-.067-.143-.147-.143zm1.192-.206c-.093 0-.168.075-.172.168l-.18 4.914.18 4.81c.004.094.08.17.172.17.094 0 .17-.076.172-.17l.21-4.81-.21-4.914c-.002-.093-.078-.168-.172-.168zm2.42-.51c-.13 0-.236.106-.242.237l-.116 5.56.116 5.433c.006.13.112.237.242.237.13 0 .237-.107.242-.237l.135-5.433-.135-5.56c-.005-.13-.112-.237-.242-.237zm-1.22.25c-.106 0-.19.085-.195.19l-.15 5.21.15 5.087c.005.105.09.19.195.19.105 0 .19-.085.195-.19l.173-5.088-.173-5.21c-.005-.105-.09-.19-.195-.19zm3.64-1.11c-.16 0-.285.13-.29.287l-.08 6.46.08 6.273c.005.16.13.287.29.287.158 0 .287-.127.29-.287l.09-6.273-.09-6.46c-.003-.16-.132-.287-.29-.287zm-1.23.473c-.144 0-.26.117-.266.262l-.1 5.997.1 5.836c.006.145.122.262.266.262.143 0 .26-.117.265-.262l.115-5.836-.115-5.997c-.005-.145-.122-.262-.265-.262zm5.02-3.197c-.12 0-.238.016-.352.046-.226-.88-.95-1.54-1.84-1.616-.27-.024-.54.02-.79.125l-.04.017-.07.035c-.12-.348-.35-.644-.66-.842-.38-.242-.84-.33-1.28-.248-.11.02-.22.05-.33.09l-.02.01c-.13.048-.25.11-.36.185-.09.06-.17.132-.25.212l-.08.082-.02.02c-.05.06-.1.123-.14.19l-.02.03c-.04.06-.07.13-.1.2l-.01.03-.02.04c-.03.07-.05.15-.07.23v.01c-.01.06-.03.13-.03.2v11.895c.16.02.32.034.48.034h5.905c2.47 0 4.475-2.003 4.475-4.474 0-2.472-2.004-4.475-4.475-4.475z"/>
      </svg>
    ),
    brandColor: "text-amber-500 group-hover:text-amber-600",
    badgeBg: "bg-amber-500/10 border-amber-500/20",
    placeholder: "https://soundcloud.com/your_handle",
  },
};

export function SidebarSocials({ collapsed }: { collapsed: boolean }) {
  const { data: socialLinks = [], isLoading } = useSocialLinks();
  const updateSocialLink = useUpdateSocialLink();

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [editingLink, setEditingLink] = useState<{ id: string; platform: string; url: string } | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCopy = (e: React.MouseEvent, id: string, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (!url) {
      toast.info("No URL set for this network");
      return;
    }
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast.success("Profile link copied");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSaveEdit = () => {
    if (!editingLink) return;
    updateSocialLink.mutate(
      { id: editingLink.id, url: editingLink.url.trim() },
      {
        onSuccess: () => {
          toast.success(`${editingLink.platform} link updated`);
          setEditingLink(null);
        },
        onError: (err) => {
          toast.error(`Failed to save: ${err.message}`);
        },
      }
    );
  };

  const activeLinksCount = socialLinks.filter((l) => Boolean(l.url)).length;

  if (isLoading) {
    return (
      <div className="p-3">
        <div className="h-4 bg-muted/60 animate-pulse rounded w-24 mb-2" />
        <div className="space-y-1.5">
          <div className="h-6 bg-muted/40 animate-pulse rounded" />
          <div className="h-6 bg-muted/40 animate-pulse rounded" />
        </div>
      </div>
    );
  }

  // COLLAPSED VIEW (Icon-only mode)
  if (collapsed) {
    return (
      <div className="flex flex-col items-center py-2 gap-1 border-t border-sidebar-border/70">
        <Popover>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg hover:bg-sidebar-accent relative"
                  aria-label="Social Networks"
                >
                  <Share2 className="h-4 w-4 text-primary" />
                  {activeLinksCount > 0 && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </Button>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={8}>
              <div className="text-xs font-medium">Social Networks ({activeLinksCount}/{socialLinks.length})</div>
            </TooltipContent>
          </Tooltip>

          <PopoverContent side="right" align="end" className="w-64 p-3 shadow-studio-lg">
            <div className="flex items-center justify-between pb-2 border-b mb-2">
              <div className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold">Social Networks</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-[11px] px-1.5"
                onClick={() => setDialogOpen(true)}
              >
                Manage All
              </Button>
            </div>
            <div className="space-y-1.5 max-h-60 overflow-y-auto">
              {socialLinks.map((link) => {
                const config = socialConfigs[link.icon] || {
                  icon: <Globe className="h-3.5 w-3.5" />,
                  brandColor: "text-foreground",
                  badgeBg: "bg-muted",
                  placeholder: "https://...",
                };
                return (
                  <div
                    key={link.id}
                    className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-muted/50 text-xs group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${config.badgeBg} ${config.brandColor}`}>
                        {config.icon}
                      </div>
                      <span className="font-medium truncate">{link.platform}</span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {link.url ? (
                        <>
                          <button
                            type="button"
                            onClick={(e) => handleCopy(e, link.id, link.url)}
                            className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted"
                            title="Copy link"
                          >
                            {copiedId === link.id ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                          </button>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded text-muted-foreground hover:text-primary hover:bg-muted"
                            title="Open external profile"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingLink({ id: link.id, platform: link.platform, url: "" });
                            setDialogOpen(true);
                          }}
                          className="text-[10px] text-muted-foreground hover:text-primary"
                        >
                          + Add
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>

        {/* Manage Dialog */}
        <SocialManageDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          socialLinks={socialLinks}
          onSave={(id, url) => updateSocialLink.mutate({ id, url })}
        />
      </div>
    );
  }

  // EXPANDED VIEW (Rich Studio Footer)
  return (
    <div className="px-3 py-3 border-t border-sidebar-border/70 bg-sidebar/50">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5 text-primary" />
          <span className="text-[11px] uppercase tracking-[0.08em] font-semibold text-muted-foreground">
            Social Networks
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] tabular-nums font-medium text-muted-foreground bg-sidebar-accent px-1.5 py-0.5 rounded">
            {activeLinksCount}/{socialLinks.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 rounded text-muted-foreground hover:text-foreground"
            onClick={() => setDialogOpen(true)}
            title="Edit all social links"
          >
            <Pencil className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        {socialLinks.map((link) => {
          const config = socialConfigs[link.icon] || {
            icon: <Globe className="h-3 w-3" />,
            brandColor: "text-foreground",
            badgeBg: "bg-muted",
            placeholder: "https://...",
          };

          const isInlineEditing = editingLink?.id === link.id;

          if (isInlineEditing) {
            return (
              <div
                key={link.id}
                className="p-1.5 rounded-lg bg-card border border-primary/30 shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-[11px] font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className={config.brandColor}>{config.icon}</span>
                    {link.platform}
                  </span>
                  <button
                    type="button"
                    onClick={() => setEditingLink(null)}
                    className="text-muted-foreground hover:text-foreground text-[10px]"
                  >
                    Cancel
                  </button>
                </div>
                <Input
                  value={editingLink.url}
                  onChange={(e) =>
                    setEditingLink({ ...editingLink, url: e.target.value })
                  }
                  placeholder={config.placeholder}
                  className="h-6 text-[11px] px-1.5"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveEdit();
                    if (e.key === "Escape") setEditingLink(null);
                  }}
                />
                <div className="flex justify-end gap-1">
                  <Button
                    size="sm"
                    className="h-5 text-[10px] px-2 py-0"
                    onClick={handleSaveEdit}
                  >
                    Save
                  </Button>
                </div>
              </div>
            );
          }

          const hasUrl = Boolean(link.url);
          // Friendly display handle / path
          const displayUrl = link.url
            ? link.url.replace(/^https?:\/\/(www\.)?/, "")
            : "Not configured";

          return (
            <div
              key={link.id}
              className="group flex items-center justify-between px-2 py-1 rounded-md text-xs hover:bg-sidebar-accent/70 transition-colors"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${config.badgeBg} ${config.brandColor} transition-transform group-hover:scale-105`}
                >
                  {config.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-[11px] truncate text-sidebar-foreground">
                      {link.platform}
                    </span>
                  </div>
                  <div className="text-[10px] text-muted-foreground truncate font-mono">
                    {hasUrl ? displayUrl : <span className="italic text-muted-foreground/60">Tap to set URL</span>}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {hasUrl ? (
                  <>
                    <button
                      type="button"
                      onClick={(e) => handleCopy(e, link.id, link.url)}
                      className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                      title="Copy link"
                      aria-label={`Copy ${link.platform} URL`}
                    >
                      {copiedId === link.id ? (
                        <Check className="h-3 w-3 text-emerald-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-muted-foreground hover:text-primary hover:bg-sidebar-accent"
                      title="Open external profile"
                      aria-label={`Open ${link.platform}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </>
                ) : null}

                <button
                  type="button"
                  onClick={() =>
                    setEditingLink({
                      id: link.id,
                      platform: link.platform,
                      url: link.url || "",
                    })
                  }
                  className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                  title="Edit link"
                  aria-label={`Edit ${link.platform} URL`}
                >
                  <Pencil className="h-3 w-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Management Modal */}
      <SocialManageDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        socialLinks={socialLinks}
        onSave={(id, url) => updateSocialLink.mutate({ id, url })}
      />
    </div>
  );
}

function SocialManageDialog({
  open,
  onOpenChange,
  socialLinks,
  onSave,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  socialLinks: Array<{ id: string; platform: string; icon: string; url: string }>;
  onSave: (id: string, url: string) => void;
}) {
  const [formState, setFormState] = useState<Record<string, string>>({});

  const handleOpen = (nextOpen: boolean) => {
    if (nextOpen) {
      const initial: Record<string, string> = {};
      socialLinks.forEach((l) => {
        initial[l.id] = l.url || "";
      });
      setFormState(initial);
    }
    onOpenChange(nextOpen);
  };

  const handleSaveAll = () => {
    Object.entries(formState).forEach(([id, url]) => {
      const original = socialLinks.find((l) => l.id === id);
      if (original && original.url !== url) {
        onSave(id, url.trim());
      }
    });
    toast.success("Social network profiles saved");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className="max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <Globe className="h-5 w-5 text-primary" />
            Social Networks & Profiles
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Configure social media links and artist profiles for release distribution and promotion across Relizo Studio.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2 max-h-[60vh] overflow-y-auto pr-1">
          {socialLinks.map((link) => {
            const config = socialConfigs[link.icon] || {
              icon: <Globe className="h-4 w-4" />,
              brandColor: "text-foreground",
              badgeBg: "bg-muted",
              placeholder: "https://...",
            };

            return (
              <div key={link.id} className="space-y-1">
                <label className="flex items-center gap-2 text-xs font-medium">
                  <span className={`w-5 h-5 rounded flex items-center justify-center ${config.badgeBg} ${config.brandColor}`}>
                    {config.icon}
                  </span>
                  {link.platform}
                </label>
                <Input
                  value={formState[link.id] ?? link.url ?? ""}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      [link.id]: e.target.value,
                    }))
                  }
                  placeholder={config.placeholder}
                  className="h-8 text-xs font-mono"
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button size="sm" onClick={handleSaveAll}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
