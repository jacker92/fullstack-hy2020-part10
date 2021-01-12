import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.tabBackground,
        paddingBottom: Constants.statusBarHeight / 2
    },
    appBarText: {
        fontSize: 20,
        color: theme.colors.textPrimary
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.appBarText}> Repositories</Text>
        </View >
    );
};

export default AppBar;