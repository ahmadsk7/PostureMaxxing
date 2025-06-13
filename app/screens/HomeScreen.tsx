import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { PostureCard } from '../components/PostureCard';
import { StretchTimer } from '../components/StretchTimer';
import { usePosture } from '../context/PostureContext';
import { usePostureTracker } from '../hooks/usePostureTracker';

export const HomeScreen = () => {
  const { state } = usePosture();
  const { currentPosture, checkPosture } = usePostureTracker();

  const handleStretchComplete = () => {
    // In a real app, this would update the user's stats
    console.log('Stretch session completed!');
  };

  return (
    <ScrollView style={styles.container}>
      <PostureCard
        posture={currentPosture}
        streak={state.streak}
        score={state.score}
      />
      <View style={styles.section}>
        <StretchTimer
          duration={300} // 5 minutes
          onComplete={handleStretchComplete}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
}); 