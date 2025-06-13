import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PostureLevel } from '../types/posture';

interface PostureCardProps {
  posture: PostureLevel;
  streak: number;
  score: number;
}

const getPostureColor = (posture: PostureLevel) => {
  switch (posture) {
    case 'good':
      return '#4CAF50';
    case 'bad':
      return '#FFC107';
    case 'terrible':
      return '#F44336';
  }
};

export const PostureCard = ({ posture, streak, score }: PostureCardProps) => {
  const backgroundColor = getPostureColor(posture);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Current Posture</Text>
      <Text style={styles.posture}>{posture.toUpperCase()}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{streak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{score}</Text>
          <Text style={styles.statLabel}>Score</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
    margin: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginBottom: 8,
  },
  posture: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    color: 'white',
    opacity: 0.8,
  },
}); 