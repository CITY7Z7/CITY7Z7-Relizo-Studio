// SQLite mock for AI Studio (native better-sqlite3 stripped)
export const db = {
  prepare: () => ({
    get: () => null,
    all: () => [],
    run: () => ({ changes: 0 }),
  }),
  pragma: () => null,
  exec: () => null,
};

export function getDatabase() {
  return db;
}

// Types for TypeScript
export type DbWork = {
  id: string;
  title: string;
  description?: string;
  genre?: string;
  year?: number;
  created_at: string;
  updated_at: string;
};

export type DbTrack = {
  id: string;
  title: string;
  duration?: number;
  file_path?: string;
  created_at: string;
  updated_at: string;
};

export type DbAlbum = {
  id: string;
  title: string;
  artist?: string;
  year?: number;
  created_at: string;
  updated_at: string;
};

export type DbRelease = {
  id: string;
  work_id: string;
  release_date?: string;
  label?: string;
  created_at: string;
};

export type DbDistributor = {
  id: string;
  name: string;
  country?: string;
  contact_email?: string;
  created_at: string;
};
