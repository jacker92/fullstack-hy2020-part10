import React from 'react';
import theme from '../theme';
import { View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        padding: 5
    },
    flexItemInfo: {
        flexDirection: 'column',
        alignItems: "flex-start",
        width: "87%"
    },
    infoItem: {
        paddingBottom: 5,
        flexWrap: 'wrap',
        flexShrink: 1,
        fontFamily: theme.fonts.main
    },
    avatar: {
        width: 66,
        height: 58,
        marginRight: 5
    },
    language: {
        backgroundColor: theme.colors.buttonPrimary,
        color: 'white',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 3,
        fontSize: 12,
        fontFamily: theme.fonts.main
    },
    header: {
        ...theme.text.primary,
        fontFamily: theme.fonts.main,
        paddingBottom: 5
    }
});

const RepositoryItemInfo = ({ item }) => {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexContainer}>
                <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
            </View>
            <View style={styles.flexItemInfo}>
                <Text testID="repoItemFullName" style={styles.header}>{item.fullName}</Text>
                <Text testID="repoItemDescription" style={styles.infoItem}>{item.description}</Text>
                <Text testID="repoItemLanguage" style={styles.language}>{item.language}</Text>
            </View>
        </View>
    );
};

export default RepositoryItemInfo;