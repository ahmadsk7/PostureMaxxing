import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { PostureState, PostureLevel, PostureEntry } from '../types/posture';
import { postureStorage } from '../storage/postureStorage';
import { calculateStreak } from '../utils/calculateStreak';

// Initial state
const initialState: PostureState = {
  currentPosture: 'good',
  streak: 0,
  score: 0,
  lastCheck: null,
};

// Action types
type PostureAction =
  | { type: 'UPDATE_POSTURE'; payload: PostureLevel }
  | { type: 'RESET_STREAK' }
  | { type: 'UPDATE_SCORE'; payload: number }
  | { type: 'SET_STREAK'; payload: number };

// Reducer
function postureReducer(state: PostureState, action: PostureAction): PostureState {
  switch (action.type) {
    case 'UPDATE_POSTURE':
      return {
        ...state,
        currentPosture: action.payload,
        lastCheck: Date.now(),
      };
    case 'RESET_STREAK':
      return {
        ...state,
        streak: 0,
      };
    case 'UPDATE_SCORE':
      return {
        ...state,
        score: action.payload,
      };
    case 'SET_STREAK':
      return {
        ...state,
        streak: action.payload,
      };
    default:
      return state;
  }
}

// Context
interface PostureContextType {
  state: PostureState;
  updatePosture: (posture: PostureLevel) => Promise<void>;
  resetStreak: () => void;
  updateScore: (score: number) => void;
}

const PostureContext = createContext<PostureContextType | undefined>(undefined);

// Provider
export function PostureProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(postureReducer, initialState);

  // Load initial streak
  useEffect(() => {
    const loadStreak = async () => {
      const logs = await postureStorage.getPostureLogs();
      const streak = calculateStreak(logs);
      dispatch({ type: 'SET_STREAK', payload: streak });
    };
    loadStreak();
  }, []);

  const updatePosture = async (posture: PostureLevel) => {
    const entry: PostureEntry = {
      timestamp: Date.now(),
      posture,
    };

    // Save to storage
    await postureStorage.savePostureLog(entry);

    // Update state
    dispatch({ type: 'UPDATE_POSTURE', payload: posture });

    // Recalculate streak
    const logs = await postureStorage.getPostureLogs();
    const streak = calculateStreak(logs);
    dispatch({ type: 'SET_STREAK', payload: streak });
  };

  const resetStreak = () => {
    dispatch({ type: 'RESET_STREAK' });
  };

  const updateScore = (score: number) => {
    dispatch({ type: 'UPDATE_SCORE', payload: score });
  };

  return (
    <PostureContext.Provider value={{ state, updatePosture, resetStreak, updateScore }}>
      {children}
    </PostureContext.Provider>
  );
}

// Hook
export function usePosture() {
  const context = useContext(PostureContext);
  if (context === undefined) {
    throw new Error('usePosture must be used within a PostureProvider');
  }
  return context;
} 