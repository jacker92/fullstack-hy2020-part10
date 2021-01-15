import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { USER_IS_AUTHORIZED } from '../graphql/queries';
import ReviewItem from './ReviewItem';
import { FlatList, View } from 'react-native';
import { separators } from '../theme';

const MyReviews = () => {
    const { loading, data, refetch } = useQuery(USER_IS_AUTHORIZED, { variables: { includeReviews: true } });
    const ItemSeparator = () => <View style={separators.listItemSeparator} />;

    const reviews = !loading && data.authorizedUser.reviews ?
        data.authorizedUser.reviews.edges.map(edge => edge.node) :
        [];

    return (
        <FlatList
            data={reviews}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                < ReviewItem title={item.repository.fullName} review={item} refetch={refetch} inPersonalView={true} />
            )}
        />
    );
};

export default MyReviews;