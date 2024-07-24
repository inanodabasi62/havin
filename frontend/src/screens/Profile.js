import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Profile({ route, navigation }) {
  const { userId } = route.params;
  const [user, setUser] = useState({});
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:5000/users/${userId}`);
      const data = await response.json();
      setUser(data);
      setHeight(data.measurements.height);
      setWeight(data.measurements.weight);
      setChest(data.measurements.chest);
      setWaist(data.measurements.waist);
      setHips(data.measurements.hips);
    };
    fetchUser();
  }, []);

  const saveProfile = async () => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ height, weight, chest, waist, hips }),
    });
    if (response.ok) {
      console.log('Profile updated');
    } else {
      console.error('Profile update failed');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Height" value={height} onChangeText={setHeight} />
      <TextInput style={styles.input} placeholder="Weight" value={weight} onChangeText={setWeight} />
      <TextInput style={styles.input} placeholder="Chest" value={chest} onChangeText={setChest} />
      <TextInput style={styles.input} placeholder="Waist" value={waist} onChangeText={setWaist} />
      <TextInput style={styles.input} placeholder="Hips" value={hips} onChangeText={setHips} />
      <Button title="Save Profile" onPress={saveProfile} />
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
