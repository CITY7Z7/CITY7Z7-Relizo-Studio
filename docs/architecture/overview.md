# Архитектура Relizo Studio

## Стек и среда
- **Фреймворк:** React 18/19 (SPA) + Vite
- **Язык:** TypeScript (строгая типизация)
- **Стилизация:** Tailwind CSS + Radix UI / shadcn-ui + Lucide Icons
- **Управление состоянием и данными:** `@tanstack/react-query`, хуки `src/hooks/useDatabase.ts`, локальный клиент `src/integrations/local/client.ts`
- **Маршрутизация:** `react-router` v7
- **Графика и чарты:** `recharts`
- **Тестирование и линтинг:** Vitest (`npm run test`), ESLint (`npm run lint`), `npm run build`
- **Среда выполнения:** Google AI Studio Sandbox (хост `0.0.0.0`, порт `3000`)

## Структура каталогов
```
/
├── docs/                   # Вся документация проекта
│   ├── CHANGELOG.md        # Единый журнал изменений версий
│   └── architecture/       # Архитектурные описания
│       └── overview.md     # Обзор архитектуры и стек
├── public/                 # Статические ассеты (иконки, манифесты)
├── src/
│   ├── components/         # Компоненты интерфейса (AppLayout, AppSidebar, SidebarSocials, QuickCommandPalette, GanttChart, ui/*)
│   ├── data/               # Мок-данные каталога (mockData.ts)
│   ├── hooks/              # Хуки взаимодействия с данными (useDatabase.ts, use-toast.ts)
│   ├── integrations/       # Клиенты хранения данных (local/client.ts)
│   ├── pages/              # Страницы приложения (Dashboard, Tracks, Albums, Releases, etc.)
│   ├── types/              # Типы TypeScript (database.ts, music.ts)
│   ├── App.tsx             # Главный компонент, роутинг, провайдеры
│   ├── index.css           # Базовые стили и переменные Tailwind
│   └── main.tsx            # Точка монтирования React
├── AGENTS.md               # Системные инструкции для AI-агентов
├── metadata.json           # Метаданные приложения AI Studio
├── package.json            # Скрипты и зависимости
├── tailwind.config.ts      # Конфигурация Tailwind CSS
└── vite.config.ts          # Конфигурация Vite dev/build
```
