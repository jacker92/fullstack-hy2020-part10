import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.tabBackground,
        paddingBottom: Constants.statusBarHeight / 2
    },
    appBarText: {
        fontSize: 20,
        color: theme.colors.textPrimary,
        paddingTop: 10,
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Link to="/">
                <Text style={styles.appBarText}>Repositories</Text>
            </Link>
            <Link to="/signin">
                <Text style={styles.appBarText}>Sign In</Text>
            </Link>
        </View >
    );
};

export default AppBar;