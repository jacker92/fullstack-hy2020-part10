/* eslint-disable no-case-declarations */
import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { GET_REPOSITORIES } from './../graphql/queries';

const useRepositories = (filter, newSearchTerm) => {
    const [searchTerm, setSearchTerm] = useState('');

    if (newSearchTerm !== searchTerm) {
        setSearchTerm(newSearchTerm);
    }

    switch (filter) {
        case "latest":
            return getLatest(searchTerm);
        case "highestRated":
            return getHighestRated(searchTerm);
        case "lowestRated":
            return getLowestRated(searchTerm);
    }
};

const getLowestRated = (searchTerm) => {
    const options = {
        fetchPolicy: 'cache-and-network',
        variables: {
            orderBy: "RATING_AVERAGE",
            orderDirection: "ASC"
        }
    };

    if (searchTerm && searchTerm.length > 0) {
        options.variables.searchKeyword = searchTerm;
    }
    return useQuery(GET_REPOSITORIES, options).data;
};

const getHighestRated = (searchTerm) => {
    const options = {
        fetchPolicy: 'cache-and-network',
        variables: {
            orderBy: "RATING_AVERAGE",
            orderDirection: "DESC"
        }
    };

    if (searchTerm && searchTerm.length > 0) {
        options.variables.searchKeyword = searchTerm;
    }

    return useQuery(GET_REPOSITORIES, options).data;
};

const getLatest = (searchTerm) => {
    const options = {
        fetchPolicy: 'cache-and-network',
        variables: {
            orderBy: "CREATED_AT",
            orderDirection: "DESC"
        }
    };

    if (searchTerm && searchTerm.length > 0) {
        options.variables.searchKeyword = searchTerm;
    }
    return useQuery(GET_REPOSITORIES, options).data;
};

export default useRepositories;