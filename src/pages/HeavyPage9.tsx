import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Component20 from '../components/Component20';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const HeavyPage9 = () => {
  const expensiveData = useMemo(() => {
    const generateParticles = (count: number) => {
      const particles: Particle[] = [];
      const colors = ['#f44336', '#2196f3', '#4caf50', '#ff9800', '#9c27b0'];

      for (let i = 0; i < count; i++) {
        particles.push({
          id: i,
          x: Math.random() * 300,
          y: Math.random() * 300,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      return particles;
    };

    const simulateParticles = (particles: Particle[], steps: number) => {
      const frames = [];
      let currentParticles = [...particles];

      for (let step = 0; step < steps; step++) {
        currentParticles = currentParticles.map((particle) => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vx: particle.x + particle.vx > 300 || particle.x + particle.vx < 0 ? -particle.vx : particle.vx,
          vy: particle.y + particle.vy > 300 || particle.y + particle.vy < 0 ? -particle.vy : particle.vy,
        }));
        frames.push([...currentParticles]);
      }
      return frames;
    };

    const data = [];
    for (let i = 0; i < 3; i++) {
      const initialParticles = generateParticles(50);
      const frames = simulateParticles(initialParticles, 60);
      data.push({
        id: i,
        frames,
      });
    }
    return data;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 9</Text>
      <Component20 />
      {expensiveData.map((simulation) => (
        <View key={simulation.id} style={styles.item}>
          <Text style={styles.title}>Particle System {simulation.id + 1}</Text>
          <View style={styles.simulationContainer}>
            {simulation.frames.map((frame, frameIndex) => (
              <View key={frameIndex} style={styles.frame}>
                <Text style={styles.frameText}>Frame {frameIndex + 1}</Text>
                <View style={styles.particleContainer}>
                  {frame.map((particle) => (
                    <View
                      key={particle.id}
                      style={[
                        styles.particle,
                        {
                          left: particle.x,
                          top: particle.y,
                          width: particle.radius * 2,
                          height: particle.radius * 2,
                          borderRadius: particle.radius,
                          backgroundColor: particle.color,
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
    backgroundColor: '#eceff1',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#cfd8dc',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  simulationContainer: {
    marginBottom: 16,
  },
  frame: {
    marginBottom: 24,
  },
  frameText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  particleContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#f5f5f5',
    position: 'relative',
    alignSelf: 'center',
  },
  particle: {
    position: 'absolute',
  },
});

export default HeavyPage9;
