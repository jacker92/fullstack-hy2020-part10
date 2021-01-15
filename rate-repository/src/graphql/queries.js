import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query GetRepositories($orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!, $searchKeyword: String) {
  repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
    edges {
    node {
    id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl
      }
    }
  }
}
`;

export const GET_REPOSITORY = gql`
query GetRepository($id: ID!) {
    repository(id: $id) {
      id,
      fullName,
      url,
      description,
      language,
      forksCount,
      stargazersCount,
      ratingAverage,
      reviewCount,
      ownerAvatarUrl,
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const USER_IS_AUTHORIZED = gql`
{
  authorizedUser {
    id
    username
  }
}
`;