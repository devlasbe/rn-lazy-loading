import { PerformanceMeasureView } from '@shopify/react-native-performance';
import React from 'react';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <PerformanceMeasureView screenName="Home" interactive={true}>
      <View>
        <Text>Home</Text>
      </View>
    </PerformanceMeasureView>
  );
}
