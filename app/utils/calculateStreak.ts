import { PostureEntry } from '../types/posture';

export function calculateStreak(logs: PostureEntry[]): number {
  if (logs.length === 0) return 0;

  // Sort logs by timestamp in descending order
  const sortedLogs = [...logs].sort((a, b) => b.timestamp - a.timestamp);
  
  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  // Check if we have any logs for today
  const hasTodayLogs = sortedLogs.some(log => {
    const logDate = new Date(log.timestamp);
    logDate.setHours(0, 0, 0, 0);
    return logDate.getTime() === currentDate.getTime();
  });

  if (!hasTodayLogs) return 0;

  // Count consecutive days with logs
  for (let i = 0; i < sortedLogs.length; i++) {
    const logDate = new Date(sortedLogs[i].timestamp);
    logDate.setHours(0, 0, 0, 0);

    if (i === 0) {
      // First log should be from today
      if (logDate.getTime() !== currentDate.getTime()) {
        break;
      }
      streak = 1;
    } else {
      // Check if this log is from the previous day
      const previousDate = new Date(currentDate);
      previousDate.setDate(previousDate.getDate() - 1);

      if (logDate.getTime() === previousDate.getTime()) {
        streak++;
        currentDate = previousDate;
      } else {
        break;
      }
    }
  }

  return streak;
} 