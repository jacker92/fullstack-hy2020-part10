import React from 'react';
import Main from './src/components/Main';
import { ApolloProvider } from '@apollo/react-hooks';
import { NativeRouter } from 'react-router-native';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;