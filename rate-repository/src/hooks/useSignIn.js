import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from './../graphql/mutations';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import createApolloClient from './../utils/apolloClient';

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const [mutate, result] = useMutation(SIGN_IN);
    const apolloClient = createApolloClient(authStorage);

    const signIn = async ({ username, password }) => {
        const res = await mutate({ variables: { credentials: { username, password } } });
        await authStorage.setAccessToken(res);
        apolloClient.resetStore();
        return res;
    };

    return [signIn, result];
};

export default useSignIn;