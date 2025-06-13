import React from 'react';
import { AppNavigator } from './navigation/AppNavigator';
import { PostureProvider } from './context/PostureContext';

export default function App() {
  return (
    <PostureProvider>
      <AppNavigator />
    </PostureProvider>
  );
}
