import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import { FlatList, Text, View } from 'react-native';
import React from 'react';
import Button from './Button';
import { useParams } from "react-router-native";
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from './../graphql/queries';
import * as Linking from 'expo-linking';

const SingleRepository = () => {
    const id = useParams().id;
    const { loading, data } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: { id }
    });

    const onSubmit = () => {
        Linking.openURL(data.repository.url);
    };

    if (loading) {
        return <Text>Loading</Text>;
    }

    const repository = data.repository;
    const reviews = repository.reviews.edges;
    console.log("DAATA", repository);
    return (
        <View>
            <FlatList
                data={reviews}
                renderItem={({ item }) => <ReviewItem review={item.node} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => <RepositoryItem item={repository} />}
            />
            <Button onSubmit={onSubmit} buttonText="Open in GitHub" />
        </View>
    );
};

export default SingleRepository;