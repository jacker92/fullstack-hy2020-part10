import { View } from 'react-native';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from './../graphql/queries';

const useRepositories = () => {
    const { loading, data } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });

    console.log(data);

    if (loading) {
        return <View>Loading...</View>;
    }
    return data;
};

export default useRepositories;