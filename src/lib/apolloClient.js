const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});