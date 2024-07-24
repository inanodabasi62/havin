import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const submitFeedback = async () => {
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, feedback }),
    });
    if (response.ok) {
      console.log('Feedback submitted');
    } else {
      console.error('Feedback submission failed');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        placeholder="Share your feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <Button title="Submit Feedback" onPress={submitFeedback} />
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
