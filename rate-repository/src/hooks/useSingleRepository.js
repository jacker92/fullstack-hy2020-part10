import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from './../graphql/queries';

const useSingleRepository = (variables) => {
    const { loading, data, fetchMore, ...others } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: variables
    });

    const handleFetchMore = () => {
        const canFetchMore =
            !loading && data && data.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            query: GET_REPOSITORY,
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    repository: {
                        ...fetchMoreResult.repository,
                        reviews: {
                            ...fetchMoreResult.repository.reviews,
                            edges: [
                                ...previousResult.repository.reviews.edges,
                                ...fetchMoreResult.repository.reviews.edges,
                            ]
                        }
                    }
                };
                return nextResult;
            },
        });
    };
    return {
        repository: data ? data.repository : undefined,
        fetchMore: handleFetchMore,
        loading,
        ...others,
    };

};

export default useSingleRepository;