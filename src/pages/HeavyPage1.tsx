import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const HeavyPage1 = () => {
  console.log('HeavyPage1');
  // Expensive computation
  const expensiveData = useMemo(() => {
    const data = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        id: i,
        value: Math.pow(i, 2) * Math.random(),
        text: `Item ${i} with complex calculation`,
      });
    }
    return data;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 1</Text>
      {expensiveData.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.value}>{item.value.toFixed(2)}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 16,
  },
  value: {
    fontSize: 14,
    color: '#666',
  },
});

export default HeavyPage1;
