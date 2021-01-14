import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
mutation Authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
mutation CreateReview($review: CreateReviewInput!) {
  createReview(review: $review) {
    id,
    user {
      username
    },
    repository{
      id
    },
    userId,
    repositoryId,
    rating,
    createdAt,
    text
  }
}`;

export const CREATE_USER = gql`
mutation CreateUser($user: CreateUserInput!){
  createUser(user: $user) {
    id,
    username
  }
}`;