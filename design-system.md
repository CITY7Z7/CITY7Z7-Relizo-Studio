# Relizo Studio Design System

Документация дизайн-системы веб-приложения **Relizo (Music Release Operations App)**.
Данный документ содержит полную спецификацию токенов, правил верстки, типографики, компонентов и стилей, отражающих реальную архитектуру проекта (v1.6.x), включая глобальную командную строку (`⌘K`), панель Social Networks в футере сайдбара, обновленный Studio Header и bento-дашборд.

---

## 1. Palette (Цвета)

Все токены цвета определены через HSL каналы в формате CSS Variables (`H S% L%`) и проецируются в HEX для точной цветопередачи в графических редакторах (Figma) и CSS.

### 1.1. Backgrounds (Фоны поверхностей)

| Токен / Роль | CSS Переменная / Класс | HSL | HEX | Назначение & Контекст |
| :--- | :--- | :--- | :--- | :--- |
| **Main Background** | `--background` | `hsl(210, 20%, 98%)` | `#F9FAFB` | Основной фон приложения, холст подложки (холодный нейтральный оттенок) |
| **Viewport Background** | `bg-background/50` | `hsla(210, 20%, 98%, 0.5)` | `#F9FAFB80` | Полупрозрачная подложка рабочей области под скролл-контентом |
| **Card Surface** | `--card` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Карточки контента, блоки метрик, контейнеры таблиц, списков и графиков |
| **Sticky Header Surface**| `bg-card/80 backdrop-blur-md`| `hsla(0, 0%, 100%, 0.8)` | `#FFFFFFCC` | Фиксированная верхняя панель (AppLayout Header) с размытием |
| **Popover / Dropdown** | `--popover` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Выпадающие списки (Select), тултипы, контекстные меню, поповер соцсетей |
| **Modal / Dialog Surface** | `bg-card` / `--background` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Поверхность модальных окон (`DialogContent`, `CommandDialog`) |
| **Modal Backdrop Overlay** | `bg-black/80 backdrop-blur-sm`| `hsla(0, 0%, 0%, 0.8)` | `#000000CC` | Затемнение под диалогами и Command Palette с размытием |
| **Sidebar Background** | `--sidebar-background` | `hsl(210, 20%, 97%)` | `#F6F7F9` | Фон боковой панели навигации (AppSidebar) |
| **Sidebar Footer / Socials** | `bg-sidebar/50` | `hsla(210, 20%, 97%, 0.5)`| `#F6F7F980` | Подложка футера сайдбара с социальными сетями |
| **Sidebar Accent / Hover** | `--sidebar-accent` | `hsl(210, 40%, 94%)` | `#EAF0F6` | Фон пунктов сайдбара при наведении курсора |
| **Muted Surface** | `--muted` / `--secondary` | `hsl(210, 40%, 96%)` | `#F1F5F9` | Подложка табов, бейджей, неактивных чипов, инпутов поиска |
| **Subtle Hover / Row Hover** | `bg-muted/50` | `hsla(210, 40%, 96%, 0.5)`| `#F1F5F980` | Подсветка строк таблиц и элементов командного меню при наведении |
| **Active Tint Background** | `bg-primary/10` | `hsla(221, 83%, 53%, 0.1)`| `#2463EB1A` | Фоновая подсветка активного пункта меню, иконки метрик, PRO-бейдж |
| **Selection Highlight** | `selection:bg-primary/20` | `hsla(221, 83%, 53%, 0.2)`| `#2463EB33` | Фон выделения текста пользователем в рабочей области |

---

### 1.2. Text & Foregrounds (Типографические цвета)

| Токен / Роль | CSS Переменная | HSL | HEX | Контраст / Применение |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Text** | `--foreground` | `hsl(224, 71%, 4%)` | `#030711` | Основной текст, заголовки H1-H3, названия треков и релизов (WCAG AAA ~19:1) |
| **Card / Popover Text** | `--card-foreground` | `hsl(224, 71%, 4%)` | `#030711` | Текст внутри карточек и диалогов |
| **Secondary / Muted Text** | `--muted-foreground` | `hsl(215, 16%, 47%)` | `#65758B` | Подзаголовки, лейблы полей, дата, ISRC, плейсхолдеры, лейблы колонок (WCAG AA 4.8:1) |
| **Sidebar Foreground** | `--sidebar-foreground` | `hsl(224, 71%, 4%)` | `#030711` | Текст пунктов навигации боковой панели |
| **Disabled Text** | `disabled:opacity-50` | `hsla(224, 71%, 4%, 0.5)` | `#03071180` | Недоступные кнопки, заблокированные инпуты |
| **Inverse / On-Color Text**| `--primary-foreground` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Текст на кнопках Primary, бейджах активной навигации, логотипе |

---

### 1.3. Brand / Primary / Secondary / Accent

| Токен / Роль | CSS Переменная | HSL | HEX | Назначение & Состояния |
| :--- | :--- | :--- | :--- | :--- |
| **Primary / Brand** | `--primary` | `hsl(221, 83%, 53%)` | `#2463EB` | Фирменный синий (Electric/Royal Blue). CTA-кнопки, активные линки, кольца фокуса |
| **Primary Hover** | `hover:bg-primary/90` | `hsla(221, 83%, 53%, 0.9)`| `#2463EBE6` | Состояние наведения Primary кнопок |
| **Secondary** | `--secondary` | `hsl(210, 40%, 96%)` | `#F1F5F9` | Второстепенные действия, чипы фильтров |
| **Secondary Hover** | `hover:bg-secondary/80`| `hsla(210, 40%, 96%, 0.8)`| `#F1F5F9CC` | Наведение на вторичные кнопки |
| **Accent** | `--accent` | `hsl(210, 40%, 96%)` | `#F1F5F9` | Интерактивные ховер-состояния в Ghost-кнопках, дропдаунах |
| **Destructive / Danger** | `--destructive` | `hsl(0, 84%, 60%)` | `#EF4343` | Красный сигнал опасности. Удаление, ошибки валидации, деструктивные действия |
| **Destructive Hover** | `hover:bg-destructive/90` | `hsla(0, 84%, 60%, 0.9)`| `#EF4343E6` | Наведение на опасную кнопку |

---

### 1.4. Borders & Dividers (Границы и Разделители)

| Токен / Роль | CSS Переменная / Класс | HSL | HEX | Назначение |
| :--- | :--- | :--- | :--- | :--- |
| **Default Border** | `--border` | `hsl(214, 32%, 91%)` | `#E1E7EF` | Базовые границы карточек, таблиц, разделителей (`border-border`) |
| **Input Border** | `--input` | `hsl(214, 32%, 91%)` | `#E1E7EF` | Границы полей ввода, селектов, чекбоксов |
| **Sidebar Border** | `--sidebar-border` | `hsl(214, 32%, 91%)` | `#E1E7EF` | Граница отделения бокового меню от основного холста |
| **Header Border (70%)**| `border-border/70` | `hsla(214, 32%, 91%, 0.7)`| `#E1E7EFB3` | Нижняя граница шапки `AppLayout` и разделитель футера сайдбара |
| **Card Border (60%)** | `border-border/60` | `hsla(214, 32%, 91%, 0.6)`| `#E1E7EF99` | Рамки KPI-карточек, триггера `⌘K` и разделителей колонок |
| **Subtle Divider (50%)**| `border-border/50` | `hsla(214, 32%, 91%, 0.5)`| `#E1E7EF80` | Шапки карточек, разделители секций дашборда |
| **Ultra-subtle Line (30%)**| `border-border/30` | `hsla(214, 32%, 91%, 0.3)`| `#E1E7EF4D` | Строчные разделители списков треков и задач |
| **Focus Ring** | `--ring` | `hsl(221, 83%, 53%)` | `#2463EB` | Контур доступности при фокусе с клавиатуры (`focus-visible:ring-2`) |

---

### 1.5. Domain Status Colors (Жизненный цикл музыкального релиза)

Специализированные токены статусов треков, альбомов и релизных пайплайнов:

| Статус | CSS Переменная | HSL | HEX | Фон бейджа (10% tint) | Семантика в Relizo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Draft** | `--status-draft` | `hsl(215, 16%, 47%)` | `#65758B` | `bg-status-draft/10` (`#65758B1A`) | Черновик, трек в работе / демо |
| **Scheduled** | `--status-scheduled` | `hsl(199, 89%, 48%)` | `#0DA2E7` | `bg-status-scheduled/10` (`#0DA2E71A`) | Запланирован в календарь релиза |
| **Submitted** | `--status-submitted` | `hsl(38, 92%, 50%)` | `#F59F0A` | `bg-status-submitted/10` (`#F59F0A1A`) | Отправлен дистрибьютору на модерацию |
| **Ready** | `--status-ready` | `hsl(142, 71%, 45%)` | `#21C45D` | `bg-status-ready/10` (`#21C45D1A`) | Одобрен, готов к выходу на витрины |
| **Released** | `--status-released` | `hsl(262, 83%, 58%)` | `#7C3BED` | `bg-status-released/10` (`#7C3BED1A`) | Опубликован, доступен в стримингах |

---

### 1.6. Social Networks & Platform Brand Tokens

Токены для интеграции музыкальных платформ и социальных сетей (`SidebarSocials`):

| Платформа | Текстовый/Иконочный цвет | Badge Background (10% tint & border) | HEX Основной | Назначение |
| :--- | :--- | :--- | :--- | :--- |
| **Spotify** | `text-emerald-500` / `hover:text-emerald-600` | `bg-emerald-500/10 border-emerald-500/20` | `#10B981` | Профиль артиста в Spotify |
| **SoundCloud** | `text-amber-500` / `hover:text-amber-600` | `bg-amber-500/10 border-amber-500/20` | `#F59E0B` | Ссылки на демо и стримы SoundCloud |
| **YouTube** | `text-red-500` / `hover:text-red-600` | `bg-red-500/10 border-red-500/20` | `#EF4444` | Музыкальные клипы и официальный канал |
| **Instagram** | `text-pink-500` / `hover:text-pink-600` | `bg-pink-500/10 border-pink-500/20` | `#EC4899` | Промо-активность и визуал артиста |
| **TikTok** | `text-cyan-500` / `hover:text-cyan-600` | `bg-cyan-500/10 border-cyan-500/20` | `#06B6D4` | Тренды, сниппеты треков |
| **X (Twitter)** | `text-foreground` | `bg-foreground/10 border-foreground/20` | `#030711` | Анонсы релизов и связь с комьюнити |

---

### 1.7. Live Studio Indicators & Operational Accents

| Токен / Роль | Tailwind Классы | HEX | Контекст применения |
| :--- | :--- | :--- | :--- |
| **Live Pulse Indicator** | `bg-emerald-500 animate-pulse` | `#10B981` | Индикатор работы студии "Studio 01" в шапке `AppLayout` |
| **Active Dot Indicator** | `bg-primary rounded-full` | `#2463EB` | Маркер наличия настроенных ссылок в свернутом сайдбаре |
| **PRO Tier Accent** | `bg-primary/10 text-primary border-primary/20` | `#2463EB` | Бейдж PRO в шапке бокового меню |
| **Live Operations Pill** | `bg-primary/10 text-primary border-primary/20` | `#2463EB` | Бейдж статуса в заголовке `DashboardPage` |
| **Copy Success State** | `text-emerald-500` | `#10B981` | Иконка галочки при успешном копировании URL в буфер |

---

## 2. Typography (Типографика)

### 2.1. Font Families

1. **Основной шрифт (Body, UI, Headings)**:
   - Шрифт: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
   - Импорт: Google Fonts `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');`
   - Особенности: сбалансированная геометрия для плотных таблиц и профессиональных студийных интерфейсов.
2. **Моноширинный / Числовой шрифт (Tabular Numbers & Data)**:
   - CSS-класс: `.tabular-nums` (`font-variant-numeric: tabular-nums;`)
   - Семейство: `font-mono` (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`)
   - Назначение: счетчики сайдбара, горячие клавиши `<kbd>`, таймкоды, даты (`YYYY-MM-DD`), ISRC/UPC коды, технические роуты (`/tracks/new`).

---

### 2.2. Scale, Sizes & Line-Heights

| Уровень / Роль | Tailwind Классы | Font Size | Line Height | Tracking | Применение |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Page Title)** | `text-2xl font-bold tracking-tight` | `1.5rem` (24px) | `2rem` (32px) | `-0.025em` | Главные заголовки страниц (Studio Dashboard, Tracks) |
| **H2 (Card Title)** | `text-2xl font-semibold leading-none tracking-tight` | `1.5rem` (24px) | `1` (24px) | `-0.015em` | Заголовки модальных окон, детальных карточек |
| **H3 (Subheader)** | `text-lg font-semibold leading-snug` | `1.125rem` (18px) | `1.375` (24.75px) | Normal | Названия подразделов, секций альбомов и диалогов |
| **Stat Metric Large** | `text-3xl font-semibold tabular-nums` | `1.875rem` (30px) | `2.25rem` (36px) | Normal | Крупные цифровые индикаторы на детальных экранах |
| **KPI Stat Metric** | `text-xl font-bold tabular-nums` | `1.25rem` (20px) | `1.75rem` (28px) | Normal | Числовые значения KPI-карточек bento-сетки дашборда |
| **Section Eyebrow** | `text-[10px] uppercase font-semibold tracking-[0.1em]` | `0.625rem` (10px) | `1.2` (12px) | `+0.1em` | Заголовки групп навигации сайдбара, шапки виджетов |
| **Body Base** | `text-base` (desktop: `text-sm`) | `1rem` (16px) / `0.875rem` (14px) | `1.5` (24px/21px) | Normal | Основной текст в инпутах, формах, описаниях |
| **Body Regular** | `text-sm font-normal` | `0.875rem` (14px) | `1.25rem` (20px) | Normal | Текст ячеек таблиц, навигация, подписи |
| **Body Medium** | `text-sm font-medium` | `0.875rem` (14px) | `1.25rem` (20px) | Normal | Названия треков, лейблы кнопок, активные пункты меню |
| **Caption / Small** | `text-xs text-muted-foreground` | `0.75rem` (12px) | `1rem` (16px) | Normal | Вторичные метаданные (артист, жанр, формат, даты) |
| **Sidebar Counter** | `text-[10px] font-mono tabular-nums font-medium` | `0.625rem` (10px) | `1` (10px) | Normal | Числовые бейджи треков и релизов в навигации |
| **Shortcut Badge** | `font-mono text-[10px] font-medium` | `0.625rem` (10px) | `1` (10px) | Normal | Клавиши горячего доступа (`⌘K`, `Esc`, `Enter`) |
| **Micro PRO Badge** | `text-[9px] font-mono font-medium` | `0.5625rem` (9px) | `1` (9px) | Normal | Микро-бейджи тарифа и системного статуса |
| **Status Badge Text**| `text-[10px] font-bold uppercase tracking-wider` | `0.625rem` (10px) | `1` (10px) | `+0.05em` | Текст статусных бейджей (Draft, Ready, Released) |

---

### 2.3. Font Weights

- `300 (Light)`: Вторичные акценты, тонкие технические подписи.
- `400 (Regular)`: Стандартный текст описаний, значений ячеек таблиц.
- `500 (Medium)`: Интерактивные ссылки, названия релизов, лейблы форм, текст кнопок, счетчики.
- `600 (Semibold)`: Заголовки разделов, карточек, подписи групп сайдбара.
- `700 (Bold)`: Главные заголовки страниц H1, метрики дашборда, логотип Studio, `StatusBadge`.

---

## 3. Spacing & Borders (Отступы и Границы)

### 3.1. Spacing Rules (Внутренние и внешние отступы)

1. **Page Outer Canvas**:
   - `p-6 max-w-7xl mx-auto space-y-6`: стандартный контейнер страниц Studio Dashboard, Catalog, Releases. Полноразмерный адаптивный холст без боковых смещений.
2. **Top Studio Header**:
   - Фиксированная высота `h-12` (`3rem` / `48px`), внутренний паддинг `px-4` (`1rem` / `16px`), `sticky top-0 z-10`.
   - Центрированная область поиска: `flex-1 max-w-xs mx-3`.
3. **Card & Bento Spacing**:
   - KPI-карточки дашборда: `p-4` (`1rem` / `16px`).
   - Детальные формы и диалоги: `p-6` (`1.5rem` / `24px`).
   - Шапки карточек: `px-4 py-3 border-b border-border/50`.
   - Строки списков в карточке: `px-4 py-2.5 border-b border-border/30`.
4. **Layout Grid Gaps**:
   - Bento-сетка KPI (4 колонки): `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`.
   - Сетка диаграмм и виджетов: `grid grid-cols-1 lg:grid-cols-2 gap-6`.
   - Формы и диалоги: `space-y-4` (`1rem` / `16px`) или `space-y-3`.
5. **Sidebar & Socials Spacing**:
   - Развернутый футер соцсетей: `px-3 py-3 border-t border-sidebar-border/70`.
   - Строка платформы: `px-2 py-1 rounded-md text-xs`.
   - Иконка платформы: `w-5 h-5 rounded`.
   - Свернутый футер: `flex flex-col items-center py-2 gap-1`.

---

### 3.2. Border Radius (Скругления)

Базовый радиус дизайн-системы: `--radius: 0.5rem;` (8px).

| Токен | Класс | Значение (px / rem) | Элементы интерфейса |
| :--- | :--- | :--- | :--- |
| **Extra Small** | `rounded-xs` / `rounded` | `2px` – `4px` | Микро-бейджи статусов, счетчики в строках, `<kbd>` |
| **Small** | `rounded-sm` | `4px` / `0.25rem` (`calc(var(--radius) - 4px)`) | Кнопка закрытия модалки, чекбоксы, триггеры табов |
| **Medium** | `rounded-md` | `6px` / `0.375rem` (`calc(var(--radius) - 2px)`) | Кнопки (`Button`), поля ввода (`Input`), статус-бейджи, пункты списков соцсетей |
| **Large** | `rounded-lg` | `8px` / `0.5rem` (`var(--radius)`) | Интерактивные кнопки навигации сайдбара, кнопки поиска `⌘K`, модальные окна |
| **Extra Large** | `rounded-xl` | `12px` / `0.75rem` | Студийные KPI-карточки, виджеты дашборда, контейнеры таблиц |
| **Full** | `rounded-full` | `9999px` | Пульсирующий индикатор Studio Live, бейджи-счетчики сайдбара, аватары, Workspace Pill |

---

### 3.3. Border Width & Style

- **Толщина границ**: Строго `1px` (`border`, `border-b`, `border-t`, `border-r`).
- **Стиль**: `solid`.
- **Фокус-рамка (Focus Ring)**: `ring-2` (2px) со смещением `ring-offset-2` (2px) цветом `ring-offset-background`.
- **Иерархия разделителей**:
  - Внешняя граница блока: `border border-border/60` (`#E1E7EF99`).
  - Шапка карточки/секции: `border-b border-border/50` (`#E1E7EF80`).
  - Строки элементов: `border-b border-border/30` (`#E1E7EF4D`).

---

## 4. Shadows & Effects (Тени и Эффекты)

В проекте используется фирменная концепция **Studio Shadows** — многослойные тени с микро-обводкой (hairline stroke) и мягким рассеиванием, дополненные быстрыми микро-тенями для кнопок и инпутов.

### 4.1. Box Shadows

```css
/* Studio Shadow (Базовая тень для карточек и виджетов) */
--shadow-studio: 0 0 0 1px rgba(0,0,0,.06), 0 1px 2px -1px rgba(0,0,0,.06), 0 2px 4px rgba(0,0,0,.04);

/* Studio Shadow Large (Глубокая тень для парящих панелей, поповеров и фокуса) */
--shadow-studio-lg: 0 0 0 1px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04), 0 12px 24px -4px rgba(0,0,0,.08);
```

| Токен | Класс | Значение | Где применяется |
| :--- | :--- | :--- | :--- |
| **Studio Card** | `.shadow-studio` | `0 0 0 1px rgba(0,0,0,.06), 0 1px 2px -1px rgba(0,0,0,.06), 0 2px 4px rgba(0,0,0,.04)` | Bento KPI-карточки, сайдбар, списки треков |
| **Studio Elevated** | `.shadow-studio-lg`| `0 0 0 1px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04), 0 12px 24px -4px rgba(0,0,0,.08)` | Поповер социальных сетей, ховер KPI-карточек, дропдауны |
| **Micro Shadow 2xs**| `shadow-2xs` | `0 1px 1px 0 rgba(0, 0, 0, 0.03)` | Поисковая плашка `⌘K`, клавиши `<kbd>` |
| **Micro Shadow xs** | `shadow-xs` | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | Кнопка «New Track», бейдж логотипа, шапка `AppLayout` |
| **Large Modal Shadow**| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Окно командной панели `CommandDialog`, модалка `SocialManageDialog` |

---

### 4.2. Blur, Backdrop-filter & Opacity

- **Sticky Header Glass**: `backdrop-blur-md bg-card/80` — мягкое размытие контента под фиксированной шапкой.
- **Modal Backdrop**: `bg-black/80 backdrop-blur-sm` — плавное затемнение фона с размытием 4px.
- **Sidebar Glass**: `bg-sidebar/95 backdrop-blur-sm` — плотная матовая подложка боковой панели.
- **Hover Transitions**: `transition-all duration-200` на карточках bento (подъем тени и подсветка границы `hover:border-primary/40`).
- **Interactive Icon Lift**: `group-hover:scale-110 transition-transform` на контейнерах иконок метрик.

---

## 5. Component Styles (Стили ключевых компонентов)

### 5.1. Studio Header & Navigation Bar (`AppLayout.tsx`)

- **Контейнер**:
  `h-12 flex items-center justify-between border-b border-border/70 bg-card/80 backdrop-blur-md px-4 shrink-0 sticky top-0 z-10 shadow-xs`
- **Studio Workspace Pill**:
  `hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-muted/60 border border-border/40 text-xs`
  - Пульсирующий индикатор: `w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0`
  - Заголовок лейбла: `font-semibold text-foreground`
  - Номер студии: `text-muted-foreground font-mono text-[10px]`
- **Центральный триггер Command Palette (`⌘K`)**:
  `w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-muted/40 hover:bg-muted/80 border border-border/60 text-xs text-muted-foreground transition-colors group shadow-2xs`
  - Клавиша горячего вызова: `kbd className="pointer-events-none hidden sm:inline-flex h-4 select-none items-center gap-0.5 rounded border border-border/70 bg-card px-1 font-mono text-[10px] font-medium text-muted-foreground shadow-2xs"`
- **Кнопка создания трека (New Track CTA)**:
  `h-7 text-xs gap-1 px-2.5 shadow-xs`
- **Профиль пользователя и выход**:
  `Producer` бейдж с иконкой `UserCircle2` + `SignOutButton` (`h-7 text-xs text-muted-foreground hover:text-destructive px-2`).

---

### 5.2. Quick Command Palette (`QuickCommandPalette.tsx`)

Глобальная диалоговая командная строка быстрого поиска и действий.

- **Триггеры вызова**: `⌘K`, `Ctrl+K`, символ `/` (с авто-игнорированием в полях ввода).
- **Контейнер**: `CommandDialog` с подложкой `bg-black/80 backdrop-blur-sm`.
- **Инпут поиска**: `CommandInput` с плейсхолдером `"Search catalog, releases, distributors, or quick actions..."`.
- **Список результатов**: `CommandList` с ограничением `max-h-[380px]`.
- **Группы команд**:
  - `Quick Actions`: создание трека (`/tracks/new`), переход в Gantt (`Gantt`), переход в Dashboard.
  - `Tracks`, `Albums`, `Releases`, `Distributors`, `Promotion Campaigns`.
- **Элемент результата (`CommandItem`)**:
  - Стили: `cursor-pointer flex items-center p-2 rounded-md hover:bg-muted/50`.
  - Цветовая дифференциация иконок: Music (`text-primary`), Calendar (`text-sky-500`/`text-cyan-500`), Albums (`text-amber-500`), Distributors (`text-emerald-500`), Promo (`text-pink-500`).

---

### 5.3. Sidebar & Social Networks Footer (`AppSidebar.tsx` & `SidebarSocials.tsx`)

- **Шапка бренда**:
  - Иконка: `w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-xs`.
  - Заголовок: `Relizo Studio` + PRO бейдж (`text-[9px] font-mono font-medium px-1 py-0.2 rounded bg-primary/10 text-primary border border-primary/20`).
- **Пункты навигации с динамическими бейджами-счетчиками**:
  - Активный пункт: `bg-primary/10 text-primary font-semibold shadow-xs`.
  - Неактивный пункт: `hover:bg-sidebar-accent text-sidebar-foreground`.
  - Бейдж-счетчик: `text-[10px] font-mono tabular-nums px-1.5 py-0.2 rounded-full font-medium` (`bg-primary text-primary-foreground` при активности).
- **Футер Social Networks (Развернутый вид)**:
  - Панель: `px-3 py-3 border-t border-sidebar-border/70 bg-sidebar/50`.
  - Заголовок секции: `text-[11px] uppercase tracking-[0.08em] font-semibold text-muted-foreground`.
  - Счетчик активных профилей: `text-[10px] tabular-nums font-medium text-muted-foreground bg-sidebar-accent px-1.5 py-0.5 rounded`.
  - Строка платформы: `group flex items-center justify-between px-2 py-1 rounded-md text-xs hover:bg-sidebar-accent/70 transition-colors`.
  - Иконка платформы: `w-5 h-5 rounded flex items-center justify-center shrink-0` с индивидуальным `badgeBg` и `brandColor`.
  - Инлайн-редактирование: компактный инпут `h-6 text-[11px] px-1.5` и кнопка `Save` `h-5 text-[10px] px-2`.
  - Действия строки (при hover): кнопка копирования URL с анимацией галочки `Check`, кнопка внешнего перехода `ExternalLink`, кнопка редактирования `Pencil`.
- **Футер Social Networks (Свернутый вид)**:
  - Кнопка-триггер: `h-8 w-8 rounded-lg hover:bg-sidebar-accent relative` с точкой индикатора `w-1.5 h-1.5 rounded-full bg-primary`.
  - Всплывающее окно: `PopoverContent` шириной `w-64 p-3 shadow-studio-lg` со списком платформ и кнопкой `Manage All`.
- **Диалог управления (`SocialManageDialog`)**:
  - Модальное окно `max-w-md p-6` с полями для всех сетей и кнопками `Cancel` / `Save Changes`.

---

### 5.4. Studio Dashboard Bento Grid (`DashboardPage.tsx`)

- **Контейнер страницы**: `p-6 max-w-7xl mx-auto space-y-6`.
- **Studio Header**:
  - Заголовок H1 `text-2xl font-bold tracking-tight text-foreground`.
  - Бейдж Live: `text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20`.
  - Кнопки действий: `Calendar & Gantt` (outline `h-8 text-xs`) и `Upload Track` (primary `h-8 text-xs`).
- **KPI Bento Cards (4 колонки)**:
  - Сетка: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`.
  - Карточка: `rounded-xl bg-card border border-border/60 p-4 shadow-studio hover:shadow-studio-lg hover:border-primary/40 transition-all duration-200`.
  - Иконка-контейнер: `w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform`.
  - Метрика: `text-xl font-bold tabular-nums text-foreground`.
- **Графики Recharts**:
  - Диаграмма BarChart: высота 190px, радиус закругления столбиков `radius={[4, 4, 0, 0]}`, тултип со скруглением 8px.
  - Диаграмма Donut PieChart: высота 190px, `innerRadius={48}`, `outerRadius={75}`, `paddingAngle={3}`.

---

### 5.5. Buttons (`Button` / `buttonVariants`)

- **Базовый класс**:
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`
- **Размеры кнопок**:
  - `default`: `h-10 px-4 py-2` (высота 40px).
  - `sm`: `h-9 rounded-md px-3` (высота 36px).
  - `compact / studio`: `h-7 text-xs px-2.5` или `h-8 text-xs px-3` (основной рабочий размер в Studio).
  - `micro`: `h-5 text-[10px] px-2 py-0` или `h-6 text-[11px] px-1.5` (действия инлайн-сохранения).
  - `icon`: `h-8 w-8` или `h-10 w-10` (квадратные иконки действий).
- **Варианты (Variants)**:
  - **Primary (`default`)**: `bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs`.
  - **Secondary**: `bg-secondary text-secondary-foreground hover:bg-secondary/80`.
  - **Ghost**: `hover:bg-accent hover:text-accent-foreground`.
  - **Outline**: `border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-2xs`.
  - **Destructive**: `bg-destructive text-destructive-foreground hover:bg-destructive/90`.

---

### 5.6. Inputs & Form Fields (`Input`, `SelectTrigger`, `Textarea`)

- **Базовый класс Input**:
  `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`
- **Компактный инпут для форм и диалогов**:
  `h-8 text-xs font-mono` или `h-6 text-[11px] px-1.5`
- **Состояния**:
  - *Default*: Рамка `#E1E7EF`, фон `#FFFFFF`, плейсхолдер `#65758B`.
  - *Focus*: `ring-2 ring-primary ring-offset-2` (`#2463EB`).
  - *Disabled*: Непрозрачность `50%`, курсор `not-allowed`.

---

### 5.7. Status Badges (`StatusBadge`)

Используется для маркировки этапов релиза (Draft, Scheduled, Submitted, Ready, Released).

- **Класс контейнера**:
  `inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider`
- **Индикаторная точка (Dot)**:
  `w-1.5 h-1.5 rounded-full bg-current`
- **Спецификация состояний**:
  - `Draft`: `text-status-draft bg-status-draft/10` (`#65758B`)
  - `Scheduled`: `text-status-scheduled bg-status-scheduled/10` (`#0DA2E7`)
  - `Submitted`: `text-status-submitted bg-status-submitted/10` (`#F59F0A`)
  - `Ready`: `text-status-ready bg-status-ready/10` (`#21C45D`)
  - `Released`: `text-status-released bg-status-released/10` (`#7C3BED`)

---

## 6. Tailwind CSS Theme Config Snippet

Для прямого переноса в `tailwind.config.ts` и `src/index.css`:

### 6.1. CSS Variables (`src/index.css`)
```css
@layer base {
  :root {
    --background: 210 20% 98%;      /* #F9FAFB */
    --foreground: 224 71% 4%;       /* #030711 */

    --card: 0 0% 100%;              /* #FFFFFF */
    --card-foreground: 224 71% 4%;  /* #030711 */

    --popover: 0 0% 100%;           /* #FFFFFF */
    --popover-foreground: 224 71% 4%;

    --primary: 221 83% 53%;         /* #2463EB */
    --primary-foreground: 0 0% 100%;/* #FFFFFF */

    --secondary: 210 40% 96%;       /* #F1F5F9 */
    --secondary-foreground: 224 71% 4%;

    --muted: 210 40% 96%;           /* #F1F5F9 */
    --muted-foreground: 215 16% 47%;/* #65758B */

    --accent: 210 40% 96%;          /* #F1F5F9 */
    --accent-foreground: 224 71% 4%;

    --destructive: 0 84% 60%;       /* #EF4343 */
    --destructive-foreground: 0 0% 100%;

    --border: 214 32% 91%;          /* #E1E7EF */
    --input: 214 32% 91%;           /* #E1E7EF */
    --ring: 221 83% 53%;            /* #2463EB */

    --radius: 0.5rem;

    /* Status Colors */
    --status-draft: 215 16% 47%;    /* #65758B */
    --status-scheduled: 199 89% 48%;/* #0DA2E7 */
    --status-submitted: 38 92% 50%; /* #F59F0A */
    --status-ready: 142 71% 45%;    /* #21C45D */
    --status-released: 262 83% 58%; /* #7C3BED */

    /* Studio Shadows */
    --shadow-studio: 0 0 0 1px rgba(0,0,0,.06), 0 1px 2px -1px rgba(0,0,0,.06), 0 2px 4px rgba(0,0,0,.04);
    --shadow-studio-lg: 0 0 0 1px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04), 0 12px 24px -4px rgba(0,0,0,.08);

    /* Sidebar Tokens */
    --sidebar-background: 210 20% 97%; /* #F6F7F9 */
    --sidebar-foreground: 224 71% 4%;  /* #030711 */
    --sidebar-primary: 221 83% 53%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 210 40% 94%;     /* #EAF0F6 */
    --sidebar-accent-foreground: 224 71% 4%;
    --sidebar-border: 214 32% 91%;
    --sidebar-ring: 221 83% 53%;
  }
}
```

### 6.2. Tailwind Extension (`tailwind.config.ts`)
```ts
export default {
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        status: {
          draft: "hsl(var(--status-draft))",
          scheduled: "hsl(var(--status-scheduled))",
          submitted: "hsl(var(--status-submitted))",
          ready: "hsl(var(--status-ready))",
          released: "hsl(var(--status-released))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
```
