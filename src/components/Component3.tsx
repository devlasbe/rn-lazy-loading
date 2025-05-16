import { Text, View } from 'react-native';
import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
export default function Component3() {
  return (
    <View>
      <Text>Component 3</Text>
      <Component1 />
      <Component2 />
    </View>
  );
}
