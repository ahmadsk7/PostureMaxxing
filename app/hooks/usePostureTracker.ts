import { useEffect, useCallback } from 'react';
import { usePosture } from '../context/PostureContext';
import { PostureLevel } from '../types/posture';

const CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds

export function usePostureTracker() {
  const { state, updatePosture, resetStreak } = usePosture();

  // Simulate posture check
  const checkPosture = useCallback(() => {
    // For now, randomly assign posture levels
    // In a real app, this would use device sensors or camera
    const random = Math.random();
    let posture: PostureLevel;
    
    if (random < 0.6) {
      posture = 'good';
    } else if (random < 0.9) {
      posture = 'bad';
    } else {
      posture = 'terrible';
    }

    updatePosture(posture);
  }, [updatePosture]);

  // Set up periodic checks
  useEffect(() => {
    const interval = setInterval(checkPosture, CHECK_INTERVAL);
    
    // Initial check
    checkPosture();

    return () => clearInterval(interval);
  }, [checkPosture]);

  return {
    currentPosture: state.currentPosture,
    lastCheck: state.lastCheck,
    checkPosture,
  };
} 