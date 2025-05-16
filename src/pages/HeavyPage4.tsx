import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Component20 from '../components/Component20';

const HeavyPage4 = () => {
  const expensiveData = useMemo(() => {
    const isPrime = (num: number): boolean => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };

    const data = [];
    let count = 0;
    let num = 2;
    while (count < 100) {
      if (isPrime(num)) {
        data.push({
          id: count,
          value: num,
          text: `Prime number #${count + 1}`,
        });
        count++;
      }
      num++;
    }
    return data;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 4</Text>
      <Component20 />
      {expensiveData.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.value}>{item.value}</Text>
          <View style={styles.grid}>
            {Array(16)
              .fill(0)
              .map((_, idx) => (
                <View key={idx} style={styles.gridItem}>
                  <Text style={styles.gridText}>Grid {idx + 1}</Text>
                </View>
              ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#bbdefb',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#90caf9',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
  },
  value: {
    fontSize: 18,
    color: '#1565c0',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  gridItem: {
    width: '25%',
    padding: 4,
  },
  gridText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
});

export default HeavyPage4;
