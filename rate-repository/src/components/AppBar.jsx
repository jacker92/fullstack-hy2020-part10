import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';
import { useQuery } from '@apollo/react-hooks';
import { USER_IS_AUTHORIZED } from '../graphql/queries';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import createApolloClient from './../utils/apolloClient';

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
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = createApolloClient(authStorage);
    const { loading, data, refetch } = useQuery(USER_IS_AUTHORIZED);

    const onLogout = async () => {
        await authStorage.setAccessToken(null);
        await apolloClient.resetStore();
        refetch();
    };

    if (loading) {
        return (<Text>loading</Text>);
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainerStyle} horizontal>
                <Link to="/">
                    <Text style={styles.appBarText}>Repositories</Text>
                </Link>
                {!data.authorizedUser
                    ?
                    <Link to="/signin">
                        <Text style={styles.appBarText} >Sign in</Text>
                    </Link>
                    :
                    <Link to="/" onClick={() => onLogout()}>
                        <Text style={styles.appBarText}>Log Out</Text>
                    </Link>
                }
            </ScrollView>
        </View >
    );
};

export default AppBar;