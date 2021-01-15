import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { separators } from '../theme';
import RepositoryItem from './RepositoryItem';
import useRepositories from './../hooks/useRepositories';
import { useHistory } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

const ItemSeparator = () => <View style={separators.listItemSeparator} />;

export const RepositoryListContainer = ({ repositories, filter, setFilter, searchQuery, setSearchQuery }) => {

  const history = useHistory();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const onItemPressed = (id) => {
    history.push(`/${id}`);
  };

  const onPickerChange = (value) => {
    setFilter(value);
  };

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onItemPressed(item.id)}>
            <RepositoryItem item={item} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={() =>
          <>
            <Searchbar
              placeholder="Search"
              onChangeText={(value) => setSearchQuery(value)}
              value={searchQuery}
            />
            <Picker
              style={{ height: 50, fontSize: 16 }}
              onValueChange={(value) => onPickerChange(value)}
              mode='dropdown'
              value={filter}
            >
              <Picker.Item label='Latest repositories' value='latest' />
              <Picker.Item label='Highest rated repositories' value='highestRated' />
              <Picker.Item label='Lowest rated repositories' value='lowestRated' />
            </Picker>
          </>
        }
      />
    </View>
  );
};

const RepositoryList = () => {
  const [filter, setFilter] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const data = useRepositories(filter);

  if (!data) {
    return (
      <Text>Loading....</Text>
    );
  }
  return <RepositoryListContainer repositories={data.repositories} filter={filter} setFilter={setFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />;
};


export default RepositoryList;