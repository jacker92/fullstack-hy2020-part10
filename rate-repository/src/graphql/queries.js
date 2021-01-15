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
query GetRepository($id: ID!, $pageSize: Int!, $after: String) {
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
      reviews (first: $pageSize, after: $after){
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
`;

export const USER_IS_AUTHORIZED = gql`
query getAuthorizedUser($includeReviews: Boolean = false){
  authorizedUser {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id
          repository {
            fullName
            url
          }
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
}
`;