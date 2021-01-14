import React from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { separators } from '../theme';
import RepositoryItem from './RepositoryItem';
import useRepositories from './../hooks/useRepositories';
import { useHistory } from 'react-router-native';

const ItemSeparator = () => <View style={separators.listItemSeparator} />;

export const RepositoryListContainer = ({ repositories }) => {

  const history = useHistory();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const onItemPressed = (id) => {
    history.push(`/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onItemPressed(item.id)}>
          <RepositoryItem item={item} />
        </TouchableOpacity>
      )}
    />
  );
};

const RepositoryList = () => {
  const data = useRepositories();

  if (!data) {
    return (
      <Text>Loading....</Text>
    );
  }
  return <RepositoryListContainer repositories={data.repositories} />;
};


export default RepositoryList;