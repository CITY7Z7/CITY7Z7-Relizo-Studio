# Relizo Studio Design System

Документация дизайн-системы веб-приложения **Relizo (Music Release Operations App)**.
Данный документ содержит полную спецификацию токенов, правил верстки, типографики, компонентов и стилей, готовых для использования или переноса в Tailwind CSS и CSS Variables.

---

## 1. Palette (Цвета)

Все токены цвета определены через HSL каналы в формате CSS Variables (`H S% L%`) и проецируются в HEX для точной цветопередачи в графических редакторах (Figma) и CSS.

### 1.1. Backgrounds (Фоны поверхностей)

| Токен / Роль | CSS Переменная | HSL | HEX | Назначение & Контекст |
| :--- | :--- | :--- | :--- | :--- |
| **Main Background** | `--background` | `hsl(210, 20%, 98%)` | `#F9FAFB` | Основной фон приложения, холст подложки (мягкий холодный сланцевый оттенок) |
| **Card Surface** | `--card` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Карточки контента, блоки метрик, контейнеры таблиц и графиков |
| **Popover / Dropdown** | `--popover` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Выпадающие списки (Select), тултипы, контекстные меню, поповеры |
| **Modal / Dialog Surface** | `--background` / `--card` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Поверхность модальных окон (`DialogContent`, `AlertDialogContent`) |
| **Modal Backdrop Overlay** | `bg-black/80` | `hsla(0, 0%, 0%, 0.8)` | `#000000CC` | Полупрозрачное затемнение под модальными окнами (`DialogOverlay`) |
| **Sidebar Background** | `--sidebar-background` | `hsl(210, 20%, 97%)` | `#F6F7F9` | Фон боковой панели навигации (AppSidebar) |
| **Sidebar Accent / Hover** | `--sidebar-accent` | `hsl(210, 40%, 94%)` | `#EAF0F6` | Фон пунктов сайдбара при наведении курсора |
| **Muted / Secondary Surface** | `--secondary` / `--muted` | `hsl(210, 40%, 96%)` | `#F1F5F9` | Подложка табов, бейджей, неактивных чипов, поиск |
| **Subtle Hover / Row Hover** | `bg-muted/50` | `hsla(210, 40%, 96%, 0.5)`| `#F1F5F980` | Подсветка строк таблиц (`TableRow`) при наведении |
| **Active Tint Background** | `bg-primary/8` / `bg-primary/10` | `hsla(221, 83%, 53%, 0.08)` | `#2463EB14` | Фоновая подсветка активного пункта навигации (`NavLink`) |

---

### 1.2. Text & Foregrounds (Типографические цвета)

| Токен / Роль | CSS Переменная | HSL | HEX | Контраст / Применение |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Text** | `--foreground` | `hsl(224, 71%, 4%)` | `#030711` | Основной текст, заголовки H1-H3, названия треков и релизов (WCAG AAA ~19:1) |
| **Card / Popover Text** | `--card-foreground` | `hsl(224, 71%, 4%)` | `#030711` | Текст внутри карточек и диалогов |
| **Secondary / Muted Text** | `--muted-foreground` | `hsl(215, 16%, 47%)` | `#65758B` | Подзаголовки, лейблы полей, дата, ISRC, плейсхолдеры, лейблы колонок (WCAG AA 4.8:1) |
| **Sidebar Foreground** | `--sidebar-foreground` | `hsl(224, 71%, 4%)` | `#030711` | Текст пунктов навигации боковой панели |
| **Disabled Text** | `disabled:opacity-50` | `hsla(224, 71%, 4%, 0.5)` | `#03071180` | Недоступные кнопки, заблокированные инпуты |
| **Inverse / On-Color Text**| `--primary-foreground` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Текст на кнопках Primary, деструктивных алертах, иконке логотипа |

---

### 1.3. Brand / Primary / Secondary / Accent

| Токен / Роль | CSS Переменная | HSL | HEX | Назначение & Состояния |
| :--- | :--- | :--- | :--- | :--- |
| **Primary / Brand** | `--primary` | `hsl(221, 83%, 53%)` | `#2463EB` | Фирменный синий (Electric/Royal Blue). Главные CTA-кнопки, ссылки, фокус-кольца |
| **Primary Hover** | `hover:bg-primary/90` | `hsla(221, 83%, 53%, 0.9)`| `#2463EBE6` | Состояние наведения Primary кнопок |
| **Secondary** | `--secondary` | `hsl(210, 40%, 96%)` | `#F1F5F9` | Второстепенные действия, чипы фильтров |
| **Secondary Hover** | `hover:bg-secondary/80`| `hsla(210, 40%, 96%, 0.8)`| `#F1F5F9CC` | Наведение на вторичные кнопки |
| **Accent** | `--accent` | `hsl(210, 40%, 96%)` | `#F1F5F9` | Интерактивные ховер-состояния в Ghost-кнопках, дропдаунах |
| **Destructive / Danger** | `--destructive` | `hsl(0, 84%, 60%)` | `#EF4343` | Красный сигнал опасности. Удаление, ошибки валидации, деструктивные действия |
| **Destructive Hover** | `hover:bg-destructive/90` | `hsla(0, 84%, 60%, 0.9)`| `#EF4343E6` | Наведение на опасную кнопку |

---

### 1.4. Borders & Dividers (Границы и Разделители)

| Токен / Роль | CSS Переменная | HSL | HEX | Назначение |
| :--- | :--- | :--- | :--- | :--- |
| **Default Border** | `--border` | `hsl(214, 32%, 91%)` | `#E1E7EF` | Базовые границы карточек, таблиц, разделителей (глобальный `@apply border-border`) |
| **Input Border** | `--input` | `hsl(214, 32%, 91%)` | `#E1E7EF` | Границы полей ввода, селектов, чекбоксов |
| **Sidebar Border** | `--sidebar-border` | `hsl(214, 32%, 91%)` | `#E1E7EF` | Границы разделителей бокового меню |
| **Subtle Divider (50%)**| `border-border/50` | `hsla(214, 32%, 91%, 0.5)`| `#E1E7EF80` | Внутренние линии шапок карточек (`border-b border-border/50`), хедер страницы |
| **Ultra-subtle Line (30%)**| `border-border/30` | `hsla(214, 32%, 91%, 0.3)`| `#E1E7EF4D` | Строчные разделители списков треков и задач |
| **Focus Ring** | `--ring` | `hsl(221, 83%, 53%)` | `#2463EB` | Контур доступности при фокусе с клавиатуры (`focus-visible:ring-2`) |

---

### 1.5. Domain Status Colors (Жизненный цикл музыкального релиза)

Специализированные токены статусов треков, альбомов и промо-кампаний:

| Статус | CSS Переменная | HSL | HEX | Фон бейджа (10% tint) | Семантика в Relizo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Draft** | `--status-draft` | `hsl(215, 16%, 47%)` | `#65758B` | `bg-status-draft/10` (`#65758B1A`) | Черновик, трек в работе / демо |
| **Scheduled** | `--status-scheduled` | `hsl(199, 89%, 48%)` | `#0DA2E7` | `bg-status-scheduled/10` (`#0DA2E71A`) | Запланирован в календарь релиза |
| **Submitted** | `--status-submitted` | `hsl(38, 92%, 50%)` | `#F59F0A` | `bg-status-submitted/10` (`#F59F0A1A`) | Отправлен дистрибьютору на модерацию |
| **Ready** | `--status-ready` | `hsl(142, 71%, 45%)` | `#21C45D` | `bg-status-ready/10` (`#21C45D1A`) | Одобрен, готов к выходу на витрины |
| **Released** | `--status-released` | `hsl(262, 83%, 58%)` | `#7C3BED` | `bg-status-released/10` (`#7C3BED1A`) | Опубликован, доступен в стримингах |

---

## 2. Typography (Типографика)

### 2.1. Font Families

1. **Основной шрифт (Body, UI, Headings)**:
   - Шрифт: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
   - Импорт: Google Fonts `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');`
   - Особенности: сбалансированная геометрия для плотных таблиц и профессиональных студийных интерфейсов.
2. **Моноширинный / Числовой шрифт (Tabular Numbers & Data)**:
   - CSS-класс: `.tabular-nums`
   - Свойство: `font-variant-numeric: tabular-nums;`
   - Системный стек fallback: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
   - Назначение: счетчики, таймкоды треков, даты (`YYYY-MM-DD`), коды ISRC/UPC.

---

### 2.2. Scale, Sizes & Line-Heights

| Уровень / Роль | Tailwind Классы | Font Size | Line Height | Tracking | Применение |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Page Title)** | `text-2xl font-semibold tracking-tighter` | `1.5rem` (24px) | `2rem` (32px) | `-0.02em` | Главные заголовки страниц (Dashboard, Tracks, Releases) |
| **H2 (Card Title)** | `text-2xl font-semibold leading-none tracking-tight` | `1.5rem` (24px) | `1` (24px) | `-0.015em` | Заголовки модальных окон, карточек с деталями |
| **H3 (Subheader)** | `text-lg font-semibold leading-snug` | `1.125rem` (18px) | `1.375` (24.75px) | Normal | Названия подразделов, секций альбомов |
| **Stat Metric** | `text-3xl font-semibold tabular-nums` | `1.875rem` (30px) | `2.25rem` (36px) | Normal | Крупные цифровые индикаторы на карточках метрик |
| **Eyebrow / Section** | `text-[10px] uppercase font-semibold tracking-[0.1em]` | `0.625rem` (10px) | `1.2` (12px) | `+0.1em` | Заголовки групп сайдбара, шапки виджетов и колонок таблиц |
| **Body Base** | `text-base` (desktop: `text-sm`) | `1rem` (16px) / `0.875rem` (14px) | `1.5` (24px/21px) | Normal | Текст в инпутах, формах, подробных описаниях |
| **Body Regular** | `text-sm font-normal` | `0.875rem` (14px) | `1.25rem` (20px) | Normal | Обычный текст ячеек таблиц, навигация, подписи |
| **Body Medium** | `text-sm font-medium` | `0.875rem` (14px) | `1.25rem` (20px) | Normal | Названия треков, лейблы кнопок, активные ссылки |
| **Small / Caption** | `text-xs text-muted-foreground` | `0.75rem` (12px) | `1rem` (16px) | Normal | Вторичные метаданные (имя артиста, формат файла, дата) |
| **Micro Badge** | `text-[10px] font-bold uppercase tracking-wider` | `0.625rem` (10px) | `1` (10px) | `+0.05em` | Текст статусных бейджей (Draft, Ready, Released) |

---

### 2.3. Font Weights

- `300 (Light)`: Вторичные акценты, тонкие подписи.
- `400 (Regular)`: Стандартный текст описаний, значений ячеек таблиц.
- `500 (Medium)`: Интерактивные ссылки, названия релизов, лейблы форм, текст кнопок.
- `600 (Semibold)`: Заголовки H1-H3, крупные цифры метрик, заголовки карточек.
- `700 (Bold)`: Статусные бейджи (`StatusBadge`), логотип Studio.

---

## 3. Spacing & Borders (Отступы и Границы)

### 3.1. Spacing Rules (Внутренние и внешние отступы)

1. **Page Outer Canvas**:
   - `p-6` (`1.5rem` / `24px`): стандартный паддинг контентной области страницы вокруг дашборда, каталога и календаря.
2. **Top Header**:
   - Фиксированная высота `h-12` (`3rem` / `48px`), горизонтальный отступ `px-4` (`1rem` / `16px`).
3. **Card Padding**:
   - Метрики и виджеты дашборда: `p-4` (`1rem` / `16px`).
   - Детальные формы и модалки: `p-6` (`1.5rem` / `24px`).
   - Разделители шапок карточек: `px-4 py-3 border-b border-border/50`.
   - Элементы списка в карточке: `px-4 py-2.5 border-b border-border/30`.
4. **Layout Grid Gaps**:
   - Разделитель между колонками дашборда: `gap-6` (`1.5rem` / `24px`).
   - Сетка метрик (4 колонки): `grid grid-cols-4 gap-4` (`1rem` / `16px`).
   - Двухколоночная сетка графиков: `grid grid-cols-2 gap-4` (`1rem` / `16px`).
   - Формы и диалоги: `space-y-4` (`1rem` / `16px`) или `gap-3` (`0.75rem` / `12px`).

---

### 3.2. Border Radius (Скругления)

Базовый радиус дизайн-системы задан через CSS-переменную: `--radius: 0.5rem;` (8px).

| Токен | Класс | Значение (px / rem) | Элементы интерфейса |
| :--- | :--- | :--- | :--- |
| **Small** | `rounded-sm` | `4px` / `0.25rem` (`calc(var(--radius) - 4px)`) | Кнопка закрытия модалки, чекбокс, мини-триггер табов |
| **Medium** | `rounded-md` | `6px` / `0.375rem` (`calc(var(--radius) - 2px)`) | Кнопки (`Button`), поля ввода (`Input`, `SelectTrigger`), статус-бейджи, пункты меню |
| **Large** | `rounded-lg` | `8px` / `0.5rem` (`var(--radius)`) | Базовые карточки Shadcn, модальные окна (`DialogContent`), иконка бренда |
| **Extra Large** | `rounded-xl` | `12px` / `0.75rem` | Студийные карточки дашборда, контейнеры таблиц (`rounded-xl bg-card shadow-studio`) |
| **Full** | `rounded-full` | `9999px` | Точки индикатора статуса, аватары пользователей, круглые бейджи |

---

### 3.3. Border Width & Style

- **Толщина границ**: Строго `1px` (`border`, `border-b`, `border-t`, `border-r`).
- **Стиль**: `solid`.
- **Фокус-рамка (Focus Ring)**: `ring-2` (2px) со смещением `ring-offset-2` (2px) цветом `ring-offset-background`.
- **Иерархия разделителей**:
  - Внешняя рамка контейнера: `border border-border` (`#E1E7EF`).
  - Заголовок карточки: `border-b border-border/50` (`rgba(225, 231, 239, 0.5)`).
  - Строки элементов: `border-b border-border/30` (`rgba(225, 231, 239, 0.3)`).

---

## 4. Shadows & Effects (Тени и Эффекты)

В проекте используется фирменная концепция **Studio Shadows** — многослойные тени с микро-обводкой (hairline stroke) и мягким рассеиванием, создающие ощущение премиального физического оборудования.

### 4.1. Box Shadows

```css
/* Studio Shadow (Базовая тень для карточек и виджетов) */
--shadow-studio: 0 0 0 1px rgba(0,0,0,.06), 0 1px 2px -1px rgba(0,0,0,.06), 0 2px 4px rgba(0,0,0,.04);

/* Studio Shadow Large (Глубокая тень для парящих панелей и фокуса) */
--shadow-studio-lg: 0 0 0 1px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04), 0 12px 24px -4px rgba(0,0,0,.08);
```

| Токен | Класс | Значение | Где применяется |
| :--- | :--- | :--- | :--- |
| **Studio Card** | `.shadow-studio` | `0 0 0 1px rgba(0,0,0,.06), 0 1px 2px -1px rgba(0,0,0,.06), 0 2px 4px rgba(0,0,0,.04)` | Виджеты дашборда, боковая панель, карточки релизов |
| **Studio Elevated** | `.shadow-studio-lg`| `0 0 0 1px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04), 0 12px 24px -4px rgba(0,0,0,.08)` | При перетаскивании в Gantt, всплывающие карточки |
| **Small Shadow** | `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Активный таб (`TabsTrigger`), стандартные карточки |
| **Large Shadow** | `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Модальные окна (`DialogContent`), меню дропдаунов |

---

### 4.2. Blur, Backdrop-filter & Opacity

- **Modal Backdrop**: `bg-black/80 backdrop-blur-sm` — плавное затемнение фона с размытием 4px.
- **Glass / Sticky Panels**: `backdrop-blur-md bg-background/80` для залипающих заголовков.
- **Opacity States**:
  - `disabled`: `opacity-50` + `pointer-events-none`.
  - `group-hover` появление кнопок редактирования: `opacity-0 group-hover:opacity-100 transition-opacity`.
  - Индикаторы статусов и теги тональности: прозрачность подложки `10%` (`/10`), `15%` (`/15`), `20%` (`/20`).

---

## 5. Component Styles (Стили ключевых компонентов)

### 5.1. Buttons (`Button` / `buttonVariants`)

- **Базовый класс**:
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`

- **Размеры кнопок**:
  - `default`: `h-10 px-4 py-2` (высота 40px, внутренний паддинг 16px / 8px).
  - `sm`: `h-9 rounded-md px-3` (высота 36px, паддинг 12px).
  - `micro / compact`: `h-6 text-[10px] px-2` или `h-7 text-xs px-2.5` (используется в строках таблиц для действий `Save/Cancel/Add`).
  - `lg`: `h-11 rounded-md px-8` (высота 44px, паддинг 32px).
  - `icon`: `h-10 w-10` (квадрат 40x40px).

- **Варианты (Variants)**:
  - **Primary (`default`)**:
    - Стили: `bg-primary text-primary-foreground hover:bg-primary/90`
    - Цвета: Фон `#2463EB`, Текст `#FFFFFF`, Hover `#2463EBE6`
  - **Secondary**:
    - Стили: `bg-secondary text-secondary-foreground hover:bg-secondary/80`
    - Цвета: Фон `#F1F5F9`, Текст `#030711`, Hover `#F1F5F9CC`
  - **Ghost**:
    - Стили: `hover:bg-accent hover:text-accent-foreground`
    - Цвета: Прозрачный фон, Hover `#F1F5F9`
  - **Outline**:
    - Стили: `border border-input bg-background hover:bg-accent hover:text-accent-foreground`
    - Цвета: Рамка `#E1E7EF`, Фон `#F9FAFB`
  - **Destructive**:
    - Стили: `bg-destructive text-destructive-foreground hover:bg-destructive/90`
    - Цвета: Фон `#EF4343`, Текст `#FFFFFF`, Hover `#EF4343E6`
  - **Link**:
    - Стили: `text-primary underline-offset-4 hover:underline`

---

### 5.2. Inputs & Form Fields (`Input`, `SelectTrigger`, `Textarea`)

- **Базовый класс Input**:
  `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`
- **Компактный инпут для таблиц (`Compact Input`)**:
  `h-7 text-xs px-2 rounded-md border-input bg-background`
- **Состояния**:
  - *Default*: Рамка `#E1E7EF`, фон `#F9FAFB` или `#FFFFFF`, плейсхолдер `#65758B`.
  - *Focus*: Рамка убирает стандартный outline, активируется `ring-2` цвета Primary `#2463EB` со смещением 2px.
  - *Disabled*: Непрозрачность `50%`, курсор `not-allowed`.

---

### 5.3. Cards & Containers

- **Фирменная студийная карточка (Studio Card)**:
  `rounded-xl bg-card shadow-studio overflow-hidden`
  - Скругление: `12px` (`rounded-xl`).
  - Фон: `#FFFFFF` (`bg-card`).
  - Тень: `--shadow-studio`.
  - Внутренний паддинг: `p-4` для метрик, `p-6` для сложных панелей.
  - Шапка: `px-4 py-3 border-b border-border/50` со шрифтом `text-[10px] uppercase tracking-[0.1em] font-semibold text-muted-foreground`.
- **Классическая Shadcn Card**:
  `rounded-lg border bg-card text-card-foreground shadow-sm`
  - Рамка: `1px solid #E1E7EF`.
  - Скругление: `8px` (`rounded-lg`).

---

### 5.4. Status Badges (`StatusBadge`)

Используется для визуализации статуса релиза или трека (Draft, Scheduled, Submitted, Ready, Released).

- **Класс контейнера**:
  `inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider`
- **Индикаторная точка (Dot)**:
  `w-1.5 h-1.5 rounded-full bg-current`
- **Спецификация состояний**:
  - `Draft`: `text-status-draft bg-status-draft/10` (Серый текст `#65758B`, серый фон 10%)
  - `Scheduled`: `text-status-scheduled bg-status-scheduled/10` (Голубой `#0DA2E7`, фон 10%)
  - `Submitted`: `text-status-submitted bg-status-submitted/10` (Янтарный `#F59F0A`, фон 10%)
  - `Ready`: `text-status-ready bg-status-ready/10` (Зеленый `#21C45D`, фон 10%)
  - `Released`: `text-status-released bg-status-released/10` (Фиолетовый `#7C3BED`, фон 10%)

---

### 5.5. Navigation Elements (`AppSidebar` & `NavLink`)

- **Элемент меню сайдбара**:
  - Базовый: `flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm transition-colors duration-150`
  - Ховер: `hover:bg-sidebar-accent hover:text-sidebar-accent-foreground`
  - Активный (`activeClassName`): `bg-primary/8 text-primary font-medium`
  - Лейбл группы: `text-[10px] uppercase tracking-[0.1em] text-muted-foreground font-semibold mb-1`
- **Иконка студии (Brand Logo Badge)**:
  `w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground`

---

## 6. Tailwind CSS Theme Config Snippet

Для быстрого переноса в `tailwind.config.ts` и `src/index.css`:

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
