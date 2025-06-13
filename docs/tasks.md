# 🧠 PostureMax — Full React Native Architecture + Paid MVP Features

This updated plan adds **more features (1.0 → 2.0)** and **clearly separates paid features**, keeping each task granular and testable. The architecture remains the same.

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

## MVP 2.0 — Premium Features (Paid Tier)

> Monetize via RevenueCat (or placeholder "Unlock Premium" modal)

---

### 💎 10. Multiple Custom Reminders (Premium)

- Create multiple reminders with custom times + days
- Store each reminder’s metadata
- UI to toggle or delete reminders

---

### 💎 11. Smart Insights (Premium)

- Weekly report generation (e.g., % improvement, worst time of day)
- Use helper like `calculateScore.ts` to assess user trends
- Display in `StatsScreen` with breakdown: “You slouch most at 3–5 PM”

---

### 💎 12. Guided Stretch Packs (Premium)

- Unlock extra stretch types (neck, back, hips)
- Show lock icon for free users
- Use local video or GIF + timer

---

### 💎 13. Posture Trends Calendar (Premium)

- Build a calendar heatmap view
- Each day shows posture score (green = good)
- Click day to see breakdown

---

### 💎 14. Pose Detection Mode (Premium)

- Optional toggle to activate pose tracking (mock for now)
- Prepares app for future MediaPipe/TensorFlow integration

---

### 💎 15. Premium Lock & Modal Flow

- `isPremiumUser` boolean in context
- When premium features are tapped by free user:
  - Show upsell modal (text + mock pricing + CTA)
- Later, integrate RevenueCat or Stripe

---

### 💎 16. Premium Badge + Profile

- Show badge on Home: “🌟 Premium Active”
- Add profile screen with name, streak, and premium plan info

---

## 🔒 Monetization (Optional Add-on)

- Integrate RevenueCat SDK
- Free tier = limited reminders, 1 stretch routine, no insights
- Premium = all above features + future add-ons

---

## 🧪 Test Plan per Feature

Every single step should:
- Be testable via manual tap or context log
- Persist in storage or be visually confirmed
- Have clear rollback capability (e.g., toggle off notifications)

---

Let me know if you want:
- GitHub Issues per step
- Boilerplate code for Step 1
- A staging “mock premium flow” UI before RevenueCat
