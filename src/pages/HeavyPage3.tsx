import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Component20 from '../components/Component20';

const HeavyPage3 = () => {
  const expensiveData = useMemo(() => {
    const fibonacci = (n: number): number => {
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    };

    const data = [];
    for (let i = 0; i < 25; i++) {
      data.push({
        id: i,
        value: fibonacci(i),
        text: `Fibonacci sequence at position ${i}`,
      });
    }
    return data;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 3</Text>
      <Component20 />
      {expensiveData.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.value}>{item.value}</Text>
          {Array(20)
            .fill(0)
            .map((_, idx) => (
              <Text key={idx} style={styles.dummy}>
                Dummy Text {idx}
              </Text>
            ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#c8e6c9',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#a5d6a7',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
  },
  value: {
    fontSize: 18,
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  dummy: {
    fontSize: 12,
    color: '#666',
  },
});

export default HeavyPage3;
