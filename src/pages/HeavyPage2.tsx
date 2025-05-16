import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Component20 from '../components/Component20';

const HeavyPage2 = () => {
  const expensiveData = useMemo(() => {
    const data = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        id: i,
        value: Math.sin(i) * Math.cos(i) * 1000,
        text: `Complex Item ${i} with trigonometry`,
      });
    }
    return data;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 2</Text>
      <Component20 />
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#e0e0e0',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
  },
  value: {
    fontSize: 14,
    color: '#666',
  },
});

export default HeavyPage2;
