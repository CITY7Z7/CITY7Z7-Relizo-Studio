import {
  mockWorks,
  mockTracks,
  mockAlbums,
  mockAlbumTracks,
  mockReleases,
  mockDistributors,
  mockPromotionChannels,
  mockPromoTasks,
  mockProductionTasks,
  mockTrackRelationships,
} from "@/data/mockData";

type Row = Record<string, any>;

function getInitialTableData(table: string): Row[] {
  switch (table) {
    case "works":
      return mockWorks.map((w) => ({
        id: w.work_id,
        title: w.title,
        composer: w.composer || "",
        lyricist: w.lyricist || "",
        publisher: w.publisher || "",
        notes: w.notes || "",
        created_at: "2024-01-10T10:00:00Z",
        updated_at: "2024-01-10T10:00:00Z",
      }));

    case "tracks":
      return mockTracks.map((t) => ({
        id: t.track_id,
        work_id: t.work_id || null,
        title: t.title,
        version_name: t.version_name || "",
        track_type: t.track_type || "Original",
        parent_track_id: t.parent_track_id || null,
        remixer_artist: t.remixer_artist || "",
        artist: t.artist,
        featured_artists: t.featured_artists || "",
        genre: t.genre || "Electronic",
        subgenre: t.subgenre || "",
        bpm: t.bpm || 120,
        musical_key: t.musical_key || "C Major",
        duration: t.duration || "3:30",
        isrc: t.isrc || "",
        language: t.language || "English",
        explicit_flag: !!t.explicit_flag,
        audio_file: t.audio_file || null,
        cover_art: t.cover_art || null,
        description: t.description || "",
        lyrics: t.lyrics || "",
        status: t.status || "Draft",
        created_at: t.created_at || "2024-01-15T10:00:00Z",
        updated_at: t.updated_at || "2024-01-20T14:30:00Z",
        album_artist: t.artist,
        year: 2024,
        track_number: 1,
        disc_number: 1,
        publisher: "Neon Records",
        composer: "",
        conductor: "",
        comment: "",
        grouping: "",
        audio_file_type: "audio/wav",
        file_size: 42000000,
        channels: "Stereo",
        bitrate: "1411 kbps",
        sample_rate: "44.1 kHz",
        loudness_level: "-14 LUFS",
        encoder: "LAME 3.100",
        play_count: 150,
        last_played_at: "2024-03-01T12:00:00Z",
        musicians: "",
        additional_contributors: "",
        upc: "",
        release_type: "",
        release_date: "",
        id3_metadata: "",
        riff_metadata: "",
        track_notes: "",
        catalog_tags: "electronic, studio",
        waveform_peaks: [0.2, 0.4, 0.7, 0.9, 0.8, 0.6, 0.5, 0.8, 0.95, 0.7, 0.5, 0.3, 0.2],
      }));

    case "albums":
      return mockAlbums.map((a) => ({
        id: a.album_id,
        title: a.title,
        artist: a.artist,
        release_type: a.release_type || "Album",
        release_date: a.release_date || "2024-02-14",
        label: a.label || "Neon Records",
        catalog_number: a.catalog_number || "NR-001",
        upc: a.upc || "",
        cover_art: a.cover_art || null,
        created_at: "2024-01-12T00:00:00Z",
        updated_at: "2024-01-20T00:00:00Z",
      }));

    case "album_tracks":
      return mockAlbumTracks.map((at, idx) => ({
        id: `at_${idx + 1}`,
        album_id: at.album_id,
        track_id: at.track_id,
        track_number: at.track_number,
      }));

    case "releases":
      return mockReleases.map((r) => ({
        id: r.id,
        title: r.title,
        type: r.type,
        reference_id: r.reference_id,
        planned_release_date: r.planned_release_date,
        distributor_submission_date: r.distributor_submission_date,
        marketing_start_date: r.marketing_start_date,
        status: r.status,
        created_at: "2024-01-15T00:00:00Z",
        updated_at: "2024-02-01T00:00:00Z",
      }));

    case "distributors":
      return mockDistributors.map((d) => ({
        id: d.id,
        name: d.name,
        contact_email: d.contact_email,
        submission_format: d.submission_format,
        delivery_method: d.delivery_method,
        notes: d.notes,
        distribution_status: d.distribution_status,
        created_at: "2024-01-01T00:00:00Z",
      }));

    case "promotion_channels":
      return mockPromotionChannels.map((pc) => ({
        id: pc.id,
        platform: pc.platform,
        contact_person: pc.contact_person,
        email: pc.email,
        notes: pc.notes,
        created_at: "2024-01-01T00:00:00Z",
      }));

    case "promo_tasks":
      return mockPromoTasks.map((pt) => ({
        id: pt.id,
        campaign_name: pt.campaign_name,
        track_or_album: pt.track_or_album,
        platform: pt.platform,
        scheduled_date: pt.scheduled_date,
        content_type: pt.content_type,
        status: pt.status,
        created_at: "2024-02-01T00:00:00Z",
      }));

    case "production_tasks":
      return mockProductionTasks.map((p) => ({
        id: p.id,
        title: p.title,
        track_title: p.track_title,
        release_id: p.release_id || null,
        phase: p.phase,
        start_date: p.start_date,
        end_date: p.end_date,
        progress: p.progress,
        created_at: "2024-01-05T00:00:00Z",
        updated_at: "2024-02-08T00:00:00Z",
      }));

    case "production_subtasks":
      return mockProductionTasks.flatMap((p) =>
        (p.subtasks || []).map((s) => ({
          id: s.id,
          production_task_id: p.id,
          title: s.title,
          start_date: s.start_date,
          end_date: s.end_date,
          type: s.type,
          completed: !!s.completed,
        }))
      );

    case "track_relationships":
      return mockTrackRelationships.map((rel) => ({
        id: rel.relationship_id,
        source_track_id: rel.source_track_id,
        target_track_id: rel.target_track_id,
        relationship_type: rel.relationship_type,
        notes: rel.notes,
        created_at: "2024-02-15T00:00:00Z",
      }));

    case "social_links":
      return [
        { id: "sl1", platform: "Instagram", icon: "instagram", url: "https://instagram.com/relizo.music", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
        { id: "sl2", platform: "Twitter / 𝕏", icon: "twitter", url: "https://x.com/relizomusic", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
        { id: "sl3", platform: "YouTube", icon: "youtube", url: "https://youtube.com/@relizomusic", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
        { id: "sl4", platform: "TikTok", icon: "tiktok", url: "https://tiktok.com/@relizomusic", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
        { id: "sl5", platform: "Spotify", icon: "spotify", url: "https://open.spotify.com/artist/relizo", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
        { id: "sl6", platform: "SoundCloud", icon: "soundcloud", url: "https://soundcloud.com/relizomusic", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
      ];

    case "track_distributors":
      return [
        { id: "td1", track_id: "t1", distributor_id: "d1", created_at: "2024-01-20T00:00:00Z" },
        { id: "td2", track_id: "t3", distributor_id: "d1", created_at: "2024-02-05T00:00:00Z" },
        { id: "td3", track_id: "t5", distributor_id: "d2", created_at: "2024-03-01T00:00:00Z" },
      ];

    case "track_promotions":
      return [
        { id: "tp1", track_id: "t1", promo_task_id: "pt1", created_at: "2024-02-01T00:00:00Z" },
        { id: "tp2", track_id: "t5", promo_task_id: "pt3", created_at: "2024-03-20T00:00:00Z" },
      ];

    case "track_audio_files":
      return [];

    default:
      return [];
  }
}

function getTable(table: string): Row[] {
  try {
    const key = `relizo_table_${table}`;
    const raw = localStorage.getItem(key);
    if (!raw) {
      const initial = getInitialTableData(table);
      localStorage.setItem(key, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch {
    return getInitialTableData(table);
  }
}

function setTable(table: string, rows: Row[]): void {
  try {
    const key = `relizo_table_${table}`;
    localStorage.setItem(key, JSON.stringify(rows));
  } catch (err) {
    console.warn("Error persisting table", table, err);
  }
}

class QueryBuilder {
  private table: string;
  private filters: Record<string, any> = {};
  private orderBy?: { column: string; ascending: boolean };
  private operation: "select" | "insert" | "update" | "delete" = "select";
  private payload: Row | Row[] = {};
  private one = false;

  constructor(table: string) {
    this.table = table;
  }

  select(_columns = "*") {
    return this;
  }

  order(column: string, options?: { ascending?: boolean }) {
    this.orderBy = { column, ascending: options?.ascending ?? true };
    return this;
  }

  eq(column: string, value: any) {
    this.filters[column] = value;
    return this;
  }

  maybeSingle() {
    this.one = true;
    return this;
  }

  single() {
    this.one = true;
    return this;
  }

  insert(payload: Row | Row[]) {
    this.operation = "insert";
    this.payload = payload;
    return this;
  }

  update(payload: Row) {
    this.operation = "update";
    this.payload = payload;
    return this;
  }

  delete() {
    this.operation = "delete";
    return this;
  }

  then(resolve: (value: any) => any, reject?: (reason: any) => any) {
    try {
      let rows = [...getTable(this.table)];

      if (this.operation === "select") {
        for (const [key, value] of Object.entries(this.filters)) {
          rows = rows.filter((r) => String(r[key]) === String(value));
        }
        if (this.orderBy) {
          const { column, ascending } = this.orderBy;
          rows.sort((a, b) => {
            const valA = a[column] ?? "";
            const valB = b[column] ?? "";
            const comp = String(valA).localeCompare(String(valB), undefined, { numeric: true });
            return ascending ? comp : -comp;
          });
        }
        const result = this.one ? (rows[0] ?? null) : rows;
        return Promise.resolve({ data: result, error: null }).then(resolve, reject);
      }

      if (this.operation === "insert") {
        const toInsert = Array.isArray(this.payload) ? this.payload : [this.payload];
        const newRows: Row[] = toInsert.map((item) => {
          const id = item.id || crypto.randomUUID().replaceAll("-", "");
          const now = new Date().toISOString();
          return {
            created_at: now,
            updated_at: now,
            ...item,
            id,
          };
        });
        rows = [...rows, ...newRows];
        setTable(this.table, rows);
        const result = Array.isArray(this.payload) ? newRows : newRows[0];
        return Promise.resolve({ data: this.one ? result : result, error: null }).then(resolve, reject);
      }

      if (this.operation === "update") {
        let updatedItem: Row | null = null;
        rows = rows.map((r) => {
          const match = Object.entries(this.filters).every(([k, v]) => String(r[k]) === String(v));
          if (match) {
            const updated = {
              ...r,
              ...this.payload,
              updated_at: new Date().toISOString(),
            };
            updatedItem = updated;
            return updated;
          }
          return r;
        });
        setTable(this.table, rows);
        return Promise.resolve({ data: this.one ? updatedItem : updatedItem, error: null }).then(resolve, reject);
      }

      if (this.operation === "delete") {
        rows = rows.filter((r) => !Object.entries(this.filters).every(([k, v]) => String(r[k]) === String(v)));
        setTable(this.table, rows);
        return Promise.resolve({ data: null, error: null }).then(resolve, reject);
      }

      return Promise.resolve({ data: null, error: null }).then(resolve, reject);
    } catch (err: any) {
      if (reject) return reject(err);
      return Promise.resolve({ data: null, error: err }).then(resolve);
    }
  }
}

export type Session = { user: { id: string; email: string } } | null;
const listeners = new Set<(event: string, session: Session) => void>();

const session = (): Session => {
  if (typeof window === "undefined") return null;
  const isLoggedOut = localStorage.getItem("relizo_logged_out") === "true";
  if (isLoggedOut) return null;
  const email = localStorage.getItem("relizo_user") || "demo@relizo.studio";
  return { user: { id: email, email } };
};

const notify = (next: Session) => {
  listeners.forEach((listener) => listener(next ? "SIGNED_IN" : "SIGNED_OUT", next));
};

export const localClient = {
  from: (table: string) => new QueryBuilder(table),
  auth: {
    getSession: async () => ({ data: { session: session() }, error: null }),
    onAuthStateChange: (listener: (_event: string, session: Session) => void) => {
      listeners.add(listener);
      return { data: { subscription: { unsubscribe: () => listeners.delete(listener) } } };
    },
    signInWithPassword: async ({ email }: { email: string; password?: string }) => {
      localStorage.removeItem("relizo_logged_out");
      localStorage.setItem("relizo_user", email);
      const next = session();
      notify(next);
      return { data: { session: next }, error: null };
    },
    signUp: async ({ email }: { email: string; password?: string }) => {
      localStorage.removeItem("relizo_logged_out");
      localStorage.setItem("relizo_user", email);
      const next = session();
      notify(next);
      return { data: { session: next }, error: null };
    },
    signOut: async () => {
      localStorage.setItem("relizo_logged_out", "true");
      localStorage.removeItem("relizo_user");
      notify(null);
      return { error: null };
    },
  },
  storage: {
    from: (_bucket: string) => ({
      upload: async (path: string, file: File) => {
        try {
          const dataUrl = await new Promise<string>((res, rej) => {
            const reader = new FileReader();
            reader.onload = () => res(reader.result as string);
            reader.onerror = rej;
            reader.readAsDataURL(file);
          });
          sessionStorage.setItem(`relizo_file_${path}`, dataUrl);
          return { data: { path }, error: null };
        } catch {
          return { data: { path }, error: null };
        }
      },
      getPublicUrl: (path: string) => {
        const stored = typeof window !== "undefined" ? sessionStorage.getItem(`relizo_file_${path}`) : null;
        return { data: { publicUrl: stored || `/uploads/${path}` } };
      },
    }),
  },
};
