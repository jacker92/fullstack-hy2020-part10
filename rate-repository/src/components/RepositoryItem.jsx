import { View } from 'react-native';
import React from 'react';

import RepositoryItemInfo from './RepositoryItemInfo';
import RepositoryItemStatistics from './RepositoryItemStatistics';

const RepositoryItem = ({ item }) => {
    console.log("Repo", item);
    return (
        <View>
            <RepositoryItemInfo item={item} />
            <RepositoryItemStatistics item={item} />
        </View>
    );
};

export default RepositoryItem;