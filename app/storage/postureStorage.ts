import AsyncStorage from '@react-native-async-storage/async-storage';
import { PostureEntry } from '../types/posture';

const POSTURE_LOGS_KEY = '@posture_logs';

export const postureStorage = {
  async savePostureLog(entry: PostureEntry): Promise<void> {
    try {
      const existingLogs = await this.getPostureLogs();
      const updatedLogs = [...existingLogs, entry];
      await AsyncStorage.setItem(POSTURE_LOGS_KEY, JSON.stringify(updatedLogs));
    } catch (error) {
      console.error('Error saving posture log:', error);
    }
  },

  async getPostureLogs(): Promise<PostureEntry[]> {
    try {
      const logs = await AsyncStorage.getItem(POSTURE_LOGS_KEY);
      return logs ? JSON.parse(logs) : [];
    } catch (error) {
      console.error('Error getting posture logs:', error);
      return [];
    }
  },

  async getTodayLogs(): Promise<PostureEntry[]> {
    const logs = await this.getPostureLogs();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return logs.filter(log => {
      const logDate = new Date(log.timestamp);
      return logDate >= today;
    });
  },

  async clearLogs(): Promise<void> {
    try {
      await AsyncStorage.removeItem(POSTURE_LOGS_KEY);
    } catch (error) {
      console.error('Error clearing posture logs:', error);
    }
  }
}; 