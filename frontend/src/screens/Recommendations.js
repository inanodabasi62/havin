import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getRecommendations } from '../services/recommendation';

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const userPreferences = [/* kullanıcının tercihleri */];
      const recs = await getRecommendations(userPreferences);
      setRecommendations(recs);
    };
    fetchRecommendations();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Recommendations</Text>
      {recommendations.map((rec, index) => (
        <Text key={index} style={styles.recommendation}>{rec}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendation: {
    marginVertical: 5,
    fontSize: 14,
  },
});
