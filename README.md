
# Mecenate Feed – тестовое задание

Мобильное приложение на React Native (Expo) для отображения ленты публикаций платформы Mecenate (аналог Patreon/Boosty).

## 📱 Стек

- **Язык**: TypeScript
- **Фреймворк**: React Native + Expo (SDK 54)
- **Управление состоянием**: MobX + TanStack Query (React Query)
- **HTTP-клиент**: Axios
- **Стилизация**: дизайн-токены (цвета, отступы, типографика)

## 🚀 Запуск

1. **Клонируйте репозиторий**  
   ```bash
   git clone <url-репозитория>
   cd mecenate-feed
Установите зависимости

bash
npm install
Настройте переменные окружения
Создайте в корне проекта файл .env и укажите базовый URL API (см. .env.example):

text
API_BASE_URL=https://k8s.mectest.ru/test-app
Запустите Metro-сервер

bash
npx expo start
Или с очисткой кеша:

bash
npx expo start -c
Откройте приложение

Установите Expo Go из App Store / Google Play.

Отсканируйте QR-код из терминала камерой (iOS) или сканером в Expo Go (Android).

Приложение автоматически загрузится.

Для работы на физическом устройстве компьютер и телефон должны находиться в одной Wi‑Fi сети. При проблемах с подключением используйте туннельный режим:

bash
npx expo start --tunnel





