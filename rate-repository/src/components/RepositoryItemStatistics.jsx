import React from 'react';
import theme from '../theme';
import { View, StyleSheet, Text } from 'react-native';
import { formatThousandsToK } from './../utils/thousandConverter';

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        padding: 5
    },
    flexItemStatistic: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const RepositoryItemStatistics = ({ item }) => {
    if (!item) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItemStatistic}>
                <Text testID="repoItemStargazersCount" style={theme.text.primary}>{formatThousandsToK(item.stargazersCount)}</Text>
                <Text>Stars</Text>
            </View>
            <View style={styles.flexItemStatistic}>
                <Text testID="repoItemForksCount" style={theme.text.primary}>{formatThousandsToK(item.forksCount)}</Text>
                <Text>Forks</Text>
            </View>
            <View style={styles.flexItemStatistic}>
                <Text testID="repoItemReviewCount" style={theme.text.primary}>{item.reviewCount}</Text>
                <Text>Reviews</Text>
            </View>
            <View style={styles.flexItemStatistic}>
                <Text testID="repoItemRatingAverage" style={theme.text.primary}>{item.ratingAverage}</Text>
                <Text>Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryItemStatistics;