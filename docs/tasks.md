# 🧠 PostureMax — Full React Native Architecture + Paid MVP Features (w/ Camera-Based Scoring)

This updated plan adds **more features (1.0 → 2.0)**, including a **camera-based posture scoring flow**, and clearly separates **paid features**, while keeping each task granular and testable. The architecture remains the same.

---

## MVP 1.0 — Core App (Free)

### ✅ 1. Environment Setup
(Same as previous list: initialize Expo + TypeScript + navigation + folder setup)

---

### ✅ 2. Navigation & Screens

- Build all screens: Home, Stats, Stretch, Settings
- Create navigation with React Navigation

---

### ✅ 3. Global State (PostureContext)

- Create context & reducer
- Tracks posture level, streak, and preferences
- Trigger posture updates via mock input

---

### ✅ 4. Local Storage

- `postureStorage.ts` with AsyncStorage
- Save posture logs, preferences, and streaks

---

### ✅ 5. Posture Logging Flow

- `usePostureTracker` mocks data (random posture every X seconds)
- Log results in context & storage
- `PostureCard` reflects posture visually
- Display today's data summary

---

### ✅ 6. Reminders (Free Version)

- `reminderService` with Expo Notifications
- Manually trigger 1-time reminder via Settings toggle
- Only 1 active reminder in free plan

---

### ✅ 7. Stats + Streaks

- Track streak if >3 good posture logs/day
- Display streaks & bar graph (static)
- Allow user to reset streak

---

### ✅ 8. Stretch Sessions

- Stretch screen with countdown timer
- Completion tracked & saved to storage
- Count shown on Stats screen

---

### ✅ 9. Basic Settings

- Toggle dark mode (via context)
- Toggle posture reminder (1/day max)
- All settings persisted

---

## MVP 1.5 — Posture Scoring via Camera (Free or Premium)

> Optional feature built after core flow and before paid features. Scalable from mock to real pose detection.

---

### ✅ 10. Camera Flow Entry Point

- Add a button to `HomeScreen`: “Check My Posture (Photo)”
- Navigates to new `CameraScreen.tsx`

---

### ✅ 11. Implement CameraScreen

- Use `expo-image-picker` or `expo-camera`
- Allow take photo or upload
- Display image preview

---

### ✅ 12. Create `postureVisionService.ts` (Mock)

- Analyze image locally (mock logic)
- Return posture score, verdict, and tip

---

### ✅ 13. Display Score UI

- Show score and advice after image submission
- Format: "72/100 — Keep your chin level"

---

### ✅ 14. Save Score to Storage (Optional)

- Save `imageUri`, `score`, `timestamp` to `AsyncStorage`
- Display in Stats if persisted

---

### ✅ 15. Premium-Ready Pose Detection Hook (Optional)

- Scaffold `analyzePoseFromImage()` in `postureVisionService.ts`
- Returns mock data for now (pose angle, shoulder tilt)
- Prepares for future MediaPipe/TensorFlow upgrade

---

## MVP 2.0 — Premium Features (Paid Tier)

> Monetize via RevenueCat (or placeholder "Unlock Premium" modal)

---

### 💎 16. Multiple Custom Reminders (Premium)

- Create multiple reminders with custom times + days
- Store each reminder’s metadata
- UI to toggle or delete reminders

---

### 💎 17. Smart Insights (Premium)

- Weekly report generation (e.g., % improvement, worst time of day)
- Use helper like `calculateScore.ts` to assess user trends
- Include camera-based posture scores in analytics

---

### 💎 18. Guided Stretch Packs (Premium)

- Unlock extra stretch types (neck, back, hips)
- Show lock icon for free users
- Use local video or GIF + timer

---

### 💎 19. Posture Trends Calendar (Premium)

- Build a calendar heatmap view
- Each day shows posture score (green = good)
- Tap to view posture photo + score

---

### 💎 20. Pose Detection Mode (Premium)

- Toggle to activate full pose analysis from images
- Use MediaPipe or TensorFlow integration
- Real shoulder/head alignment scoring

---

### 💎 21. Premium Lock & Modal Flow

- `isPremiumUser` boolean in context
- Locked feature triggers upsell modal (with mock pricing)
- Later connect to RevenueCat

---

### 💎 22. Premium Badge + Profile

- Show badge on Home: “🌟 Premium Active”
- Add profile screen with name, streak, and subscription info

---

## 🔒 Monetization (Optional Add-on)

- Integrate RevenueCat SDK
- Free tier = 1 reminder, basic stretches, mock scoring only
- Premium = multiple reminders, guided packs, smart insights, real pose analysis

---

## 🧪 Test Plan per Feature

Each feature should:
- Be testable via manual tap or visual confirmation
- Persist in local storage if needed
- Log clearly in console or screen
- Have rollback capability (e.g., delete reminder, reset score)

---

Let me know if you want:
- GitHub Issues per step  
- Camera flow starter code  
- RevenueCat-free mock premium wall UI
