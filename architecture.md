# 🧠 PostureMax — Full React Native Architecture

---

## 📁 File & Folder Structure

```
posturemax/
├── assets/                    # Images, icons, animations
├── components/               # Reusable UI components
│   └── PostureCard.tsx
│   └── StretchTimer.tsx
├── constants/                # App-wide constants (colors, enums, etc.)
│   └── colors.ts
│   └── postureLevels.ts
├── context/                  # Global state with Context API
│   └── PostureContext.tsx
├── hooks/                    # Custom logic and posture tracking
│   └── usePostureTracker.ts
│   └── useReminder.ts
├── navigation/               # Navigation stacks and tabs
│   └── AppNavigator.tsx
├── screens/                  # App screens
│   └── HomeScreen.tsx
│   └── StatsScreen.tsx
│   └── StretchScreen.tsx
│   └── SettingsScreen.tsx
├── services/                 # Notifications, analytics, etc.
│   └── postureService.ts
│   └── reminderService.ts
│   └── analyticsService.ts
├── storage/                  # Local data (AsyncStorage/MMKV)
│   └── postureStorage.ts
├── types/                    # Global types/interfaces
│   └── posture.ts
├── utils/                    # Helper functions
│   └── formatTime.ts
│   └── calculateScore.ts
├── theme/                    # Light/dark theme provider
│   └── ThemeProvider.tsx
├── App.tsx                   # Root of the application
```

---

## ⚙️ Purpose of Each Folder

### `App.tsx`
- App entry point
- Wraps the app in:
  - `NavigationContainer`
  - `ThemeProvider`
  - `PostureContextProvider`

### `components/`
- Dumb, reusable UI parts:
  - `PostureCard.tsx`: shows current posture rating
  - `StretchTimer.tsx`: countdown UI for stretch sessions

### `constants/`
- Global constants:
  - `colors.ts`: theme colors
  - `postureLevels.ts`: enum values for posture scoring

### `context/`
- Manages global state via Context API:

```ts
type State = {
  postureLevel: 'good' | 'bad' | 'terrible';
  streak: number;
  score: number;
};
```

- Dispatches posture updates, tracks streaks and preferences

### `hooks/`
- `usePostureTracker`: simulates or receives posture inputs
- `useReminder`: sets up push/local notifications for posture checks

### `navigation/`
- Manages app navigation using `react-navigation`
- `AppNavigator.tsx`: stack/tab config for:
  - Home
  - Stats
  - Stretches
  - Settings

### `screens/`
- Top-level screens:
  - `HomeScreen.tsx`: summary of today’s posture, streaks
  - `StatsScreen.tsx`: progress and history
  - `StretchScreen.tsx`: guided sessions
  - `SettingsScreen.tsx`: toggles and premium access

### `services/`
- Abstracted modules for side effects:
  - `postureService.ts`: logs and retrieves posture data
  - `reminderService.ts`: handles push notifications
  - `analyticsService.ts`: logs user behavior and sessions

### `storage/`
- Interfaces with `AsyncStorage` or `MMKV`
- Persists posture logs, user preferences, streaks

### `types/`
- Shared global TypeScript interfaces:

```ts
export interface PostureEntry {
  timestamp: number;
  posture: 'good' | 'bad' | 'terrible';
}
```

### `utils/`
- Utility functions:
  - `formatTime.ts`: formats timestamps for UI
  - `calculateScore.ts`: converts posture data into performance score

### `theme/`
- Central theme config
- Provides light/dark themes to styled components or `react-native-paper`

---

## 🧠 State Management

| Layer        | Tool/Location              | What it Manages                        |
|--------------|----------------------------|----------------------------------------|
| App-wide     | React Context + Reducer    | Posture state, streak, settings        |
| Local storage| AsyncStorage / MMKV        | Persistence between sessions           |
| Backend (opt)| Supabase or Firebase       | User auth, cloud sync, premium features|

---

## 🔗 Connected Services

| Service      | Purpose                      | Tech                                  |
|--------------|------------------------------|---------------------------------------|
| Notifications| Posture reminders            | Expo Push Notifications / Notifee     |
| Storage      | Save local data              | AsyncStorage / MMKV                   |
| Analytics    | Track usage, engagement      | Firebase Analytics / PostHog          |
| Backend (opt)| Auth, sync posture logs      | Supabase / Firebase                   |
| Payments     | Subscriptions for premium    | RevenueCat                            |

---

## 🧪 Premium Feature Ideas

- Posture streak analytics & visualization  
- Personalized stretch routines  
- Historical insights & exportable reports  
- AI Pose Detection (MediaPipe or TensorFlow Lite)  
- iCloud/Google sync  
- Gamification: earn badges for upright streaks  
- RevenueCat for subscription management  

---

## 🧱 Suggested Tech Stack

| Layer        | Tech                                |
|--------------|-------------------------------------|
| Frontend     | React Native (Expo or bare)         |
| State        | React Context + useReducer          |
| Local DB     | AsyncStorage or MMKV                |
| Notifications| Expo Notifications or Notifee       |
| Backend (opt)| Supabase / Firebase                 |
| Analytics    | Firebase Analytics / PostHog        |
| Payments     | RevenueCat                          |
| Styling      | Tailwind (via NativeWind) / Styled Components |

---

## ✅ Example Flow: Daily Posture Check

1. `useReminder` triggers a posture notification  
2. User opens app → `HomeScreen.tsx`  
3. `usePostureTracker` simulates check or integrates pose detection  
4. Result is dispatched to `PostureContext`  
5. `postureService` saves log via `postureStorage`  
6. Updated streak + score shown on screen  
7. If subscribed, analytics + cloud sync occurs
