import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    alignItems: 'flex-start', // Alinha o texto à esquerda
  },
  title: {
    fontSize: 18,
  },
});

export default ListItem;
