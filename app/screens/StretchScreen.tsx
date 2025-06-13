import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const StretchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stretch Time</Text>
      <Text style={styles.subtitle}>Take a break and stretch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
}); 