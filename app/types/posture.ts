export type PostureLevel = 'good' | 'bad' | 'terrible';

export interface PostureEntry {
  timestamp: number;
  posture: PostureLevel;
}

export interface PostureState {
  currentPosture: PostureLevel;
  streak: number;
  score: number;
  lastCheck: number | null;
} 