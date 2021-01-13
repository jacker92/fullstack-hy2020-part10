import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import { useQuery } from '@apollo/react-hooks';
import { USER_IS_AUTHORIZED } from '../graphql/queries';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    }
});

const Main = () => {
    const { loading, data, refetch } = useQuery(USER_IS_AUTHORIZED,);
    return (
        <View style={styles.container}>
            <AppBar loading={loading} data={data} refetch={refetch} />
            <Switch>
                <Route path="/signin" exact>
                    <SignIn />
                </Route>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;