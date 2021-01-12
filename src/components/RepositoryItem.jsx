import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import theme from '../theme';

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        padding: 5
    },
    flexItemInfo: {
        flexGrow: 0,
        flexDirection: 'column',
        alignItems: "flex-start"
    },
    infoItem: {
        paddingBottom: 5
    },
    flexItemStatistic: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        width: 66,
        height: 58,
        marginRight: 5
    },
    language: {
        backgroundColor: '#0041C2',
        color: 'white',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 3,
        fontSize: 12
    },
    header: {
        ...theme.text.primary,
        paddingBottom: 5
    }
});

const RepositoryItem = ({ item }) => {
    return (
        <View>
            <RepositoryItemInfo item={item} />
            <RepositoryItemStatistics item={item} />
        </View>
    );
};

const RepositoryItemInfo = ({ item }) => {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexContainer}>
                <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
            </View>
            <View style={styles.flexItemInfo}>
                <Text style={styles.header}>{item.fullName}</Text>
                <Text style={styles.infoItem}>{item.description}</Text>
                <Text style={styles.language}>{item.language}</Text>
            </View>
        </View>
    );
};

const RepositoryItemStatistics = ({ item }) => {
    const formatThousandsToK = (value) => `${(value / 1000).toFixed(1)}k`;
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItemStatistic}>
                <Text style={theme.text.primary}>{formatThousandsToK(item.stargazersCount)}</Text>
                <Text>Stars</Text>
            </View>
            <View style={styles.flexItemStatistic}>
                <Text style={theme.text.primary}>{formatThousandsToK(item.forksCount)}</Text>
                <Text>Forks</Text>
            </View>
            <View style={styles.flexItemStatistic}>
                <Text style={theme.text.primary}>{item.reviewCount}</Text>
                <Text>Reviews</Text>
            </View>
            <View style={styles.flexItemStatistic}>
                <Text style={theme.text.primary}>{item.ratingAverage}</Text>
                <Text>Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryItem;