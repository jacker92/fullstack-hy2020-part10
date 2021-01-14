import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import { FlatList, Text, View } from 'react-native';
import React from 'react';
import Button from './Button';
import { useParams } from "react-router-native";
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from './../graphql/queries';
import * as Linking from 'expo-linking';
import { separators } from './../theme';

const SingleRepository = () => {
    const id = useParams().id;

    let { loading, data } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'no-cache',
        variables: { id }
    });

    const onSubmit = () => {
        Linking.openURL(data.repository.url);
    };

    if (loading) {
        return <Text>Loading</Text>;
    }

    const repository = data.repository;
    const reviews = repository?.reviews?.edges;
    return (
        <View>
            <FlatList
                ItemSeparatorComponent={
                    () => (
                        <View
                            style={separators.listItemSeparator}
                        />
                    )
                }
                data={reviews}
                renderItem={({ item, separators }) => (
                    <ReviewItem
                        key={item.id}
                        review={item.node}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight} />
                )}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => <RepositoryItem
                    item={repository} />}
            />
            <Button onSubmit={onSubmit} buttonText="Open in GitHub" />
        </View>
    );
};

export default SingleRepository;