import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Component20 from '../components/Component20';

const HeavyPage7 = () => {
  const expensiveData = useMemo(() => {
    const generateRandomArray = (size: number) => {
      return Array(size)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100));
    };

    const bubbleSort = (arr: number[]) => {
      const steps = [];
      const n = arr.length;
      const array = [...arr];

      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            steps.push([...array]);
          }
        }
      }
      return steps;
    };

    const data = [];
    for (let i = 0; i < 5; i++) {
      const originalArray = generateRandomArray(20);
      const sortingSteps = bubbleSort(originalArray);
      data.push({
        id: i,
        original: originalArray,
        steps: sortingSteps,
      });
    }
    return data;
  }, []);

  const maxValue = 100;
  const barWidth = (Dimensions.get('window').width - 64) / 20;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 7</Text>
      <Component20 />
      {expensiveData.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.title}>Sorting Visualization {item.id + 1}</Text>
          <View style={styles.visualizationContainer}>
            {item.steps.map((step, stepIndex) => (
              <View key={stepIndex} style={styles.step}>
                <Text style={styles.stepText}>Step {stepIndex + 1}</Text>
                <View style={styles.bars}>
                  {step.map((value, valueIndex) => (
                    <View
                      key={valueIndex}
                      style={[
                        styles.bar,
                        {
                          height: (value / maxValue) * 150,
                          width: barWidth - 2,
                        },
                      ]}
                    />
                  ))}
                </View>
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
    backgroundColor: '#fff3e0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#ffe0b2',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffcc80',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  visualizationContainer: {
    marginTop: 16,
  },
  step: {
    marginBottom: 16,
  },
  stepText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#666',
  },
  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 150,
    backgroundColor: '#f5f5f5',
    padding: 4,
  },
  bar: {
    backgroundColor: '#ff9800',
    marginHorizontal: 1,
  },
});

export default HeavyPage7;
