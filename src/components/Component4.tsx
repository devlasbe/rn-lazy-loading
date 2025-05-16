import { Text, View } from 'react-native';
import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
export default function Component4() {
  return (
    <View>
      <Text>Component 4</Text>
      <Component1 />
      <Component2 />
      <Component3 />
    </View>
  );
}
