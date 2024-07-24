import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';

export default function Search() {
  const [query, setQuery] = useState('');
  const [marketplace, setMarketplace] = useState('amazon');
  const [products, setProducts] = useState([]);

  const searchProducts = async () => {
    const response = await fetch(`http://localhost:5000/products?marketplace=${marketplace}&query=${query}`);
    const data = await response.json();
    setProducts(data);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Query" value={query} onChangeText={setQuery} />
      <TextInput style={styles.input} placeholder="Marketplace" value={marketplace} onChangeText={setMarketplace} />
      <Button title="Search" onPress={searchProducts} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />
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
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
});
