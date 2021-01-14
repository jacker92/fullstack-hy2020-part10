import React from 'react';
import { textStyles } from '../theme';
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
    avatar: {
        width: 66,
        height: 58,
        marginRight: 5
    }
});

const RepositoryItemInfo = ({ item }) => {
    if (!item) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexContainer}>
                <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
            </View>
            <View style={styles.flexItemInfo}>
                <Text testID="repoItemFullName" style={textStyles.header}>{item.fullName}</Text>
                <Text testID="repoItemDescription" style={textStyles.infoItem}>{item.description}</Text>
                <Text testID="repoItemLanguage" style={textStyles.language}>{item.language}</Text>
            </View>
        </View>
    );
};

export default RepositoryItemInfo;