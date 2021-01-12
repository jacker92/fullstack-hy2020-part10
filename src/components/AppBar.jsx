import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
        paddingBottom: Constants.statusBarHeight / 2
    },
    appBarText: {
        fontSize: 20,
        color: "white"
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