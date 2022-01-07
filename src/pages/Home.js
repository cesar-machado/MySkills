import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, César</Text>

      <TextInput
        style={styles.input}
        placeholder='New Skills'
        placeholderTextColor={'#fff'}
      />

      <Button />

      <TouchableOpacity>
        <Text>skill</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  buttonSkill: {},
  textSkill: {},
});
