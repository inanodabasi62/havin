import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Verify({ route, navigation }) {
  const { userId } = route.params;
  const [verificationCode, setVerificationCode] = useState('');

  const verify = async () => {
    const response = await fetch('http://localhost:5000/users/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, verificationCode }),
    });
    if (response.ok) {
      navigation.navigate('Home');
    } else {
      console.error('Verification failed');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Verification Code" value={verificationCode} onChangeText={setVerificationCode} />
      <Button title="Verify" onPress={verify} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
