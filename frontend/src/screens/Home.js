import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Search Products" onPress={() => navigation.navigate('Search')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Recommendations" onPress={() => navigation.navigate('Recommendations')} />
      <Button title="Give Feedback" onPress={() => navigation.navigate('Feedback')} />
      <Button title="Try On Clothes" onPress={() => navigation.navigate('TryOn')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
