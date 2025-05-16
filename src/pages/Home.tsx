import React from 'react';
import { Text, View } from 'react-native';
import { usePerformance } from '../contexts/PerformanceContext';
import { useStartProfiler } from '@shopify/react-native-performance';

export default function Home() {
  const { reports } = usePerformance();
  useStartProfiler();

  const jsBootTime = reports?.timeToBootJsMillis;
  const renderTime = reports?.timeToRenderMillis;
  return (
    <View>
      <Text>Lazy Home</Text>
      <Text>JS Boot Time: {jsBootTime}</Text>
      <Text>Render Time: {renderTime}</Text>
    </View>
  );
}
