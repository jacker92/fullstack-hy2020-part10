import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from './../graphql/queries';

const useRepositories = (filter) => {

    console.log("In use repositories", filter);
    switch (filter) {
        case "latest":
            return useQuery(GET_REPOSITORIES, {
                fetchPolicy: 'cache-and-network',
                variables: {
                    orderBy: "CREATED_AT",
                    orderDirection: "DESC"
                }
            }).data;
        case "highestRated":
            return useQuery(GET_REPOSITORIES, {
                fetchPolicy: 'cache-and-network',
                variables: {
                    orderBy: "RATING_AVERAGE",
                    orderDirection: "DESC"
                }
            }).data;
        case "lowestRated":
            return useQuery(GET_REPOSITORIES, {
                fetchPolicy: 'cache-and-network',
                variables: {
                    orderBy: "RATING_AVERAGE",
                    orderDirection: "ASC"
                }
            }).data;
    }
};

export default useRepositories;