import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ListItem title={item.title} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end', // Alinha os itens na base
  },
});

export default List;
