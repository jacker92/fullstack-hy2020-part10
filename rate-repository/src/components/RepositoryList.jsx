import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';
import useRepositories from './../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.mainBackGround
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem item={item} />
      )}
    />
  );
};

export default RepositoryList;