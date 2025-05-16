import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Component20 from '../components/Component20';

interface MandelbrotPoint {
  x: number;
  y: number;
  iteration: number;
}

interface MandelbrotSet {
  id: number;
  points: MandelbrotPoint[];
  resolution: {
    width: number;
    height: number;
    iterations: number;
  };
}

const HeavyPage10 = () => {
  const expensiveData = useMemo(() => {
    const generateMandelbrot = (width: number, height: number, maxIterations: number): MandelbrotPoint[] => {
      const points = [];
      const scale = 2.5;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const x0 = (x / width) * scale - 2;
          const y0 = (y / height) * scale - scale / 2;

          let xi = x0;
          let yi = y0;
          let iteration = 0;

          while (xi * xi + yi * yi < 4 && iteration < maxIterations) {
            const xtemp = xi * xi - yi * yi + x0;
            yi = 2 * xi * yi + y0;
            xi = xtemp;
            iteration++;
          }

          points.push({
            x,
            y,
            iteration,
          });
        }
      }
      return points;
    };

    const data: MandelbrotSet[] = [];
    const resolutions = [
      { width: 50, height: 50, iterations: 50 },
      { width: 75, height: 75, iterations: 75 },
      { width: 100, height: 100, iterations: 100 },
    ];

    resolutions.forEach((res, index) => {
      const points = generateMandelbrot(res.width, res.height, res.iterations);
      data.push({
        id: index,
        points,
        resolution: res,
      });
    });

    return data;
  }, []);

  const getColor = (iteration: number, maxIterations: number) => {
    if (iteration === maxIterations) return '#000';
    const hue = (iteration / maxIterations) * 360;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 10</Text>
      <Component20 />
      {expensiveData.map((set) => (
        <View key={set.id} style={styles.item}>
          <Text style={styles.title}>
            Mandelbrot Set {set.resolution.width}x{set.resolution.height}
          </Text>
          <View style={styles.mandelbrotContainer}>
            <View
              style={[
                styles.mandelbrot,
                {
                  width: set.resolution.width * 3,
                  height: set.resolution.height * 3,
                },
              ]}
            >
              {set.points.map((point: { x: number; y: number; iteration: number }, index: number) => (
                <View
                  key={index}
                  style={[
                    styles.pixel,
                    {
                      left: point.x * 3,
                      top: point.y * 3,
                      backgroundColor: getColor(point.iteration, set.resolution.iterations),
                    },
                  ]}
                />
              ))}
            </View>
          </View>
          {/* Additional heavy rendering elements */}
          {Array(200)
            .fill(0)
            .map((_, idx) => (
              <View key={idx} style={styles.extraLoad}>
                <Text style={styles.extraLoadText}>Complex calculation result {idx}</Text>
                <View style={styles.loadBar}>
                  <View style={[styles.loadProgress, { width: `${(idx / 200) * 100}%` }]} />
                </View>
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
    backgroundColor: '#f3e5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#e1bee7',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ce93d8',
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  mandelbrotContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  mandelbrot: {
    position: 'relative',
    backgroundColor: '#000',
  },
  pixel: {
    position: 'absolute',
    width: 3,
    height: 3,
  },
  extraLoad: {
    padding: 8,
    marginVertical: 4,
  },
  extraLoadText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  loadBar: {
    height: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 2,
    overflow: 'hidden',
  },
  loadProgress: {
    height: '100%',
    backgroundColor: '#9c27b0',
  },
});

export default HeavyPage10;
