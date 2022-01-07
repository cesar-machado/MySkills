import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#121015' translucent />
      <Home />
    </>
  );
}
