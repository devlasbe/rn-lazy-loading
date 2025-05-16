import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Component20 from '../components/Component20';

const HeavyPage5 = () => {
  const expensiveData = useMemo(() => {
    const createMatrix = (size: number) => {
      return Array(size)
        .fill(0)
        .map(() =>
          Array(size)
            .fill(0)
            .map(() => Math.floor(Math.random() * 100)),
        );
    };

    const multiplyMatrices = (a: number[][], b: number[][]) => {
      const result = Array(a.length)
        .fill(0)
        .map(() => Array(b[0].length).fill(0));
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
          for (let k = 0; k < b.length; k++) {
            result[i][j] += a[i][k] * b[k][j];
          }
        }
      }
      return result;
    };

    const data = [];
    for (let i = 0; i < 10; i++) {
      const matrix1 = createMatrix(5);
      const matrix2 = createMatrix(5);
      const result = multiplyMatrices(matrix1, matrix2);

      data.push({
        id: i,
        matrix1,
        matrix2,
        result,
      });
    }
    return data;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 5</Text>
      <Component20 />
      {expensiveData.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.title}>Matrix Calculation {item.id + 1}</Text>
          <View style={styles.matrixContainer}>
            <View style={styles.matrix}>
              {item.result.map((row, i) => (
                <View key={i} style={styles.row}>
                  {row.map((cell, j) => (
                    <Text key={j} style={styles.cell}>
                      {cell}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#f8bbd0',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f48fb1',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  matrixContainer: {
    alignItems: 'center',
  },
  matrix: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    textAlign: 'center',
    padding: 4,
  },
});

export default HeavyPage5;
