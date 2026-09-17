# CHANGELOG — CITY7Z7-Relizo-Studio

> Единственный журнал релизов (источник истины истории).
> Корневой `README.md`.
> Новая запись всегда сверху, формат `- **Версия X.Y.Z**:`.


## 📜 Журнал последних изменений (Changelog)

- **Версия 1.5.1**:

(2026-09-17)

🎨 Design System Documentation:
- Проанализирован текущий дизайн и стилистика проекта Relizo Studio.
- Сформирован файл `design-system.md` с полной спецификацией токенов и правил:
  - Палитра цветов (HEX и HSL) для фонов, текста, бренда, границ и специализированных статусов треков.
  - Типографика (шрифтовые семьи Inter и Tabular Nums, иерархия H1-H3, метрики, веса и интервалы).
  - Правила отступов (Paddings, Margins, Grid gaps) и скругления углов (`rounded-*` от 4px до 12px и 9999px).
  - Студийные тени (`--shadow-studio`, `--shadow-studio-lg`), эффекты размытия и прозрачности.
  - Стили и состояния ключевых компонентов (Buttons, Inputs, Cards, StatusBadges, Navigation).
  - Готовые сниппеты конфигурации Tailwind CSS и CSS Variables для прямого переноса в темы.

- **Версия 1.5.0**:

(2026-09-17)

✅ Migration complete:

*Runtime*: Web (Node.js)
*Framework*: Vite + React 18 + Tailwind CSS
*Package Manager*: Converted to npm (removed legacy lockfile bun.lock)

*Dependencies*:
- Stripped better-sqlite3: Removed native C++ SQLite dependency and replaced with a fully self-contained, browser-compatible local storage query client in src/integrations/local/client.ts with mock interface in src/integrations/sqlite/client.ts. 

This ensures zero native compilation bottlenecks in the containerized cloud environment while keeping the application fully functional and interactive.

*Server & Port Configuration*:
- Configured Vite dev server and preview server to bind to host 0.0.0.0 and port 3000 with strict port binding.
- Updated package.json scripts ("dev": "vite --host 0.0.0.0 --port 3000", "preview": "vite preview --host 0.0.0.0 --port 3000").

*State & Data Layer*:
- Pre-populated the client-side data layer with catalog data (works, tracks, albums, releases, distributors, promotion channels, promo tasks, and social links) so the dashboard, release calendar, and music catalog pages render and operate immediately.
- Configured local storage persistence and mock audio/cover asset handling for uploads.

*Project Metadata*:
Created metadata.json configuring the application name, description, and required server capabilities.
- Added .env.example documentation.
- To connect a persistent cloud database, you can provision Firebase or AI Studio Cloud SQL from the integrations menu.