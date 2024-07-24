import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Avatar from '../components/Avatar';

export default function TryOn() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Try On Clothes</Text>
      <Avatar />
      <Button title="Try on this outfit" onPress={() => console.log('Trying on outfit')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
