import { Text, View } from 'react-native';
import React from 'react';
import Component1 from './Component1';
export default function Component2() {
  return (
    <View>
      <Text>Component 2</Text>
      <Component1 />
    </View>
  );
}
