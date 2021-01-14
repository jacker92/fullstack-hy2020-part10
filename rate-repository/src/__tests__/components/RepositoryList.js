import { RepositoryListContainer } from './../../components/RepositoryList';
import React from 'react';
import { render } from '@testing-library/react-native';
import { formatThousandsToK } from '../../utils/thousandConverter';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                pageInfo: {
                    totalCount: 8,
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };
            const { getAllByTestId } = render(
                <RepositoryListContainer repositories={repositories} />
            );

            const names = getAllByTestId("repoItemFullName");
            const descriptions = getAllByTestId("repoItemDescription");
            const languages = getAllByTestId("repoItemLanguage");
            const stargazersCount = getAllByTestId("repoItemStargazersCount");
            const forksCount = getAllByTestId("repoItemForksCount");
            const reviewCount = getAllByTestId("repoItemReviewCount");
            const ratingAverage = getAllByTestId("repoItemRatingAverage");

            for (let index = 0; index < repositories.edges.length; index++) {
                const repo = repositories.edges[index].node;
                expect(names[index]).toHaveTextContent(repo.fullName);
                expect(descriptions[index]).toHaveTextContent(repo.description);
                expect(languages[index]).toHaveTextContent(repo.language);
                expect(stargazersCount[index]).toHaveTextContent(formatThousandsToK(repo.stargazersCount));
                expect(forksCount[index]).toHaveTextContent(formatThousandsToK(repo.forksCount));
                expect(reviewCount[index]).toHaveTextContent(repo.reviewCount);
                expect(ratingAverage[index]).toHaveTextContent(repo.ratingAverage);
            }
        });

        //expect(getAllByTestId(node.id)).toHaveTextContent("Helo");

    });
});