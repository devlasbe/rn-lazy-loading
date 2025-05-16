import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Component20 from '../components/Component20';

interface Point {
  x: number;
  y: number;
}

const HeavyPage8 = () => {
  const expensiveData = useMemo(() => {
    const generateSierpinskiTriangle = (depth: number, size: number): Point[] => {
      const points: Point[] = [];

      const addTriangle = (posX: number, posY: number, triangleSize: number, triangleDepth: number) => {
        if (triangleDepth === 0) {
          points.push({ x: posX, y: posY });
          points.push({ x: posX + triangleSize, y: posY });
          points.push({ x: posX + triangleSize / 2, y: posY - triangleSize * Math.sin(Math.PI / 3) });
          return;
        }

        const newSize = triangleSize / 2;
        addTriangle(posX, posY, newSize, triangleDepth - 1);
        addTriangle(posX + newSize, posY, newSize, triangleDepth - 1);
        addTriangle(posX + newSize / 2, posY - newSize * Math.sin(Math.PI / 3), newSize, triangleDepth - 1);
      };

      addTriangle(0, size, size, depth);
      return points;
    };

    const data = [];
    for (let depth = 1; depth <= 6; depth++) {
      const points = generateSierpinskiTriangle(depth, 300);
      data.push({
        id: depth,
        points,
        depth,
      });
    }
    return data;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 8</Text>
      <Component20 />
      {expensiveData.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.title}>Sierpinski Triangle - Depth {item.depth}</Text>
          <View style={styles.fractalContainer}>
            {item.points.map((point, index) => (
              <View
                key={index}
                style={[
                  styles.point,
                  {
                    left: point.x,
                    top: point.y,
                  },
                ]}
              />
            ))}
          </View>
          {Array(100)
            .fill(0)
            .map((_, idx) => (
              <View key={idx} style={styles.extraLoad}>
                <Text style={styles.extraLoadText}>Extra rendering element {idx}</Text>
                {Array(5)
                  .fill(0)
                  .map((__, j) => (
                    <View key={j} style={styles.nestedLoad} />
                  ))}
              </View>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  fractalContainer: {
    height: 300,
    width: 300,
    position: 'relative',
    alignSelf: 'center',
    marginBottom: 16,
  },
  point: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: '#2e7d32',
  },
  extraLoad: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginVertical: 4,
  },
  extraLoadText: {
    fontSize: 12,
    color: '#666',
  },
  nestedLoad: {
    height: 2,
    backgroundColor: '#eee',
    marginVertical: 2,
  },
});

export default HeavyPage8;
