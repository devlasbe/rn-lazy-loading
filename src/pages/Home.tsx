import { PerformanceMeasureView } from '@shopify/react-native-performance';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { usePerformance } from '../contexts/PerformanceContext';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../App';

export default function Home() {
  const { reports } = usePerformance();
  const jsBootTime = reports?.timeToBootJsMillis;
  const renderTime = reports?.timeToRenderMillis;
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <PerformanceMeasureView screenName="Home" interactive={true}>
      <View>
        <Text>Lazy Home</Text>
        <Text>JS Boot Time: {jsBootTime}</Text>
        <Text>Render Time: {renderTime}</Text>
        <Button title="Heavy Page 1" onPress={() => navigation.navigate('HeavyPage1')} />
      </View>
    </PerformanceMeasureView>
  );
}
