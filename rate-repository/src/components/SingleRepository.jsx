import RepositoryItem from "./RepositoryItem";
import { Text, View } from 'react-native';
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

    console.log("DAATA", data.repository);
    return (
        <View>
            <RepositoryItem item={data.repository} />
            <Button onSubmit={onSubmit} buttonText="Open in GitHub" />
        </View>
    );
};

export default SingleRepository;