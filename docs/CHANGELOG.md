# CHANGELOG — CITY7Z7-Relizo-Studio

> Единственный журнал релизов (источник истины истории).
> Корневой `README.md`.
> Новая запись всегда сверху, формат `- **Версия X.Y.Z**:`.


## 📜 Журнал последних изменений (Changelog)

- **Версия 1.6.1**:

(2026-09-17)

🎨 Design System Synchronization & Specification Update:
- Актуализирован файл `design-system.md` с учетом реального состояния кодовой базы и компонентов:
  - Добавлены токены социальных сетей и музыкальных платформ (Spotify `#10B981`, SoundCloud `#F59E0B`, YouTube `#EF4444`, Instagram `#EC4899`, TikTok `#06B6D4`, X `#030711`) и стили бейджей 10% tint.
  - Документирована спецификация компонента футера сайдбара `SidebarSocials` (развернутый список, инлайн-редактирование, всплывающий Popover с тултипом в icon-only режиме, модальный диалог `SocialManageDialog`).
  - Документирована спецификация глобальной командной строки `QuickCommandPalette` (`⌘K` / `Ctrl+K` / `/`), горячих клавиш `<kbd>`, групп действий и mono-роутов.
  - Описаны токены Studio Header (`AppLayout.tsx`): плавающая шапка `bg-card/80 backdrop-blur-md`, плашка студии с пульсирующим live-индикатором `bg-emerald-500 animate-pulse`, кнопка быстрого создания трека и триггер быстрого поиска.
  - Актуализированы параметры сетки дашборда: полноразмерный холст `max-w-7xl`, 4-колоночная bento-сетка KPI-карточек со студийными тенями, интерактивным увеличением иконок при ховере (`group-hover:scale-110`) и кастомными тултипами графиков Recharts.
  - Добавлены микро-тени `shadow-xs`, `shadow-2xs` и токены выделения `selection:bg-primary/20`.

- **Версия 1.6.0**:

(2026-09-17)

✨ UI/UX Redesign & Sidebar Social Networks Integration:
- **Перемещение Social Networks в левый сайдбар (снизу)**:
  - Создан компонент `SidebarSocials` (`src/components/SidebarSocials.tsx`), интегрированный в `SidebarFooter` сайдбара `AppSidebar`.
  - Поддерживает расширенный режим со списком платформ (Spotify, SoundCloud, YouTube, Instagram, X/Twitter, TikTok), отображением статуса, копированием ссылок в буфер обмена (`navigator.clipboard`), переходом по внешним адресам и встроенным быстрым редактированием ссылок через `useUpdateSocialLink`.
  - Поддерживает свернутый компактный режим (icon-only mode) с всплывающим Popover/Tooltip для удобного доступа с любого экрана.
  - Встроен диалог `SocialManageDialog` для централизованного редактирования и сохранения ссылок на профили артиста/лейбла.
- **Редизайн Studio Dashboard (`src/pages/DashboardPage.tsx`)**:
  - Удален узкий 200px сайдбар социальных сетей из Dashboard, освободив полноразмерный холст для bento-сетки операционного центра.
  - Добавлены 4 интерактивные студийные KPI-карточки (Catalog Tracks, Release Pipeline, Distributors, Promo Campaigns) с индикаторами статуса и быстрыми переходами.
  - Оптимизированы визуальные диаграммы Recharts: BarChart по статусам релизов и Donut PieChart распределения этапов с адаптивными легендами.
  - Добавлены структурированные секции: очередь ближайших релизов, трекер активных промо-кампаний и список свежих студийных треков с переходом к деталям.
- **Глобальная панель быстрого поиска и навигации (Command Palette `⌘K`)**:
  - Создан компонент `QuickCommandPalette` (`src/components/QuickCommandPalette.tsx`), вызываемый горячими клавишами `⌘K` / `Ctrl+K` или кликом в шапке `AppLayout`.
  - Поддерживает сквозной поиск по трекам, альбомам, релизам, дистрибьюторам и промо-кампаниям, а также мгновенные переходы и действие «Создать трек».
- **Студийный апгрейд навигации и шапки (`AppLayout.tsx`, `AppSidebar.tsx`)**:
  - В шапку добавлен статус студии ("Neon Records · Studio 01" с пульсирующим live-индикатором) и кнопка быстрого создания трека.
  - В пункты навигации сайдбара внедрены бейджи-счетчики треков, альбомов, релизов и задач промоушена в реальном времени.

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