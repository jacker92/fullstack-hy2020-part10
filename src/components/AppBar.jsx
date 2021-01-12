import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.tabBackground,
        paddingBottom: Constants.statusBarHeight / 2
    },
    contentContainerStyle: {
        flex: 1,
        flexWrap: "wrap",
        margin: 10
    },
    appBarText: {
        fontSize: 20,
        color: theme.colors.primary,
        fontFamily: theme.fonts.main,
        padding: 10
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainerStyle} horizontal>
                <Link to="/">
                    <Text style={styles.appBarText}>Repositories</Text>
                </Link>
                <Link to="/signin">
                    <Text style={styles.appBarText} >Sign in</Text>
                </Link>
            </ScrollView>
        </View >
    );
};

export default AppBar;