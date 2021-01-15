import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import { FlatList, View } from 'react-native';
import React from 'react';
import SubmitButton from './SubmitButton';
import { useParams } from "react-router-native";
import * as Linking from 'expo-linking';
import { separators } from './../theme';
import useSingleRepository from "./../hooks/useSingleRepository";

const SingleRepository = () => {
    const { repository, fetchMore } = useSingleRepository({
        id: useParams().id,
        pageSize: 10
    });

    const onEndReach = () => {
        console.log("End reached!");
        fetchMore();
    };

    const onSubmit = () => {
        Linking.openURL(repository.url);
    };

    const itemSeparator = () => (
        <View style={separators.listItemSeparator} />
    );

    const reviews = repository && repository.reviews
        ? repository.reviews.edges.map(edge => edge.node)
        : [];

    return (
        <>
            <FlatList
                data={reviews}
                ItemSeparatorComponent={itemSeparator}
                renderItem={({ item }) => <ReviewItem id={item.id} review={item} />}
                keyExtractor={({ id }) => id}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
                ListHeaderComponent={() =>
                    <View>
                        <RepositoryItem item={repository} />
                    </View>
                }
            />
            <SubmitButton onSubmit={onSubmit} buttonText="Open in GitHub" />
        </>
    );
};

export default SingleRepository;