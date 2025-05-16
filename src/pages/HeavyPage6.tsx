import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Component20 from '../components/Component20';

interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}

const HeavyPage6 = () => {
  const expensiveData = useMemo(() => {
    const generateTree = (depth: number): TreeNode | undefined => {
      if (depth === 0) return undefined;
      return {
        value: Math.floor(Math.random() * 100),
        left: generateTree(depth - 1),
        right: generateTree(depth - 1),
      };
    };

    const data = [];
    for (let i = 0; i < 5; i++) {
      const tree = generateTree(5);
      data.push({
        id: i,
        tree,
      });
    }
    return data;
  }, []);

  const renderNode = (node: TreeNode | undefined, level: number = 0) => {
    if (!node) return null;
    return (
      <View style={[styles.node, { marginLeft: level * 20 }]}>
        <Text style={styles.nodeValue}>{node.value}</Text>
        <View style={styles.children}>
          {renderNode(node.left, level + 1)}
          {renderNode(node.right, level + 1)}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Heavy Page 6</Text>
      <Component20 />
      {expensiveData.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.title}>Binary Tree {item.id + 1}</Text>
          <View style={styles.treeContainer}>{renderNode(item.tree)}</View>
          {Array(50)
            .fill(0)
            .map((_, idx) => (
              <Text key={idx} style={styles.dummy}>
                Extra rendering load {idx}
              </Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  treeContainer: {
    padding: 16,
  },
  node: {
    marginVertical: 4,
  },
  nodeValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a148c',
  },
  children: {
    marginLeft: 20,
  },
  dummy: {
    fontSize: 12,
    color: '#666',
    marginVertical: 2,
  },
});

export default HeavyPage6;
