import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { separators } from '../theme';
import RepositoryItem from './RepositoryItem';
import useRepositories from './../hooks/useRepositories';
import { useHistory } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const ItemSeparator = () => <View style={separators.listItemSeparator} />;

export class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    return (
      <>
        <Searchbar
          placeholder="Search"
          onChangeText={(value) => this.props.setSearchQuery(value)}
          value={this.props.searchQuery}
        />
        <Picker
          style={{ height: 50, fontSize: 16 }}
          onValueChange={(value) => this.props.setFilter(value)}
          mode='dropdown'
          value={this.props.filter}
        >
          <Picker.Item label='Latest repositories' value='latest' />
          <Picker.Item label='Highest rated repositories' value='highestRated' />
          <Picker.Item label='Lowest rated repositories' value='lowestRated' />
        </Picker>
      </>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.repositories
            ? this.props.repositories.edges.map(edge => edge.node)
            : []}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.onItemPressed(item.id)}>
              <RepositoryItem item={item} />
            </TouchableOpacity>
          )}
          ListHeaderComponent={this.renderHeader}
        />
      </View >
    );
  }
}

const RepositoryList = () => {
  const [filter, setFilter] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchValue] = useDebounce(searchQuery, 500);
  const data = useRepositories(filter, searchValue);
  const history = useHistory();

  const onItemPressed = (id) => {
    history.push(`/${id}`);
  };

  if (!data) {
    return (
      <Text>Loading....</Text>
    );
  }
  return <RepositoryListContainer
    repositories={data.repositories}
    filter={filter} setFilter={setFilter}
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}
    onItemPressed={onItemPressed} />;
};

export default RepositoryList;