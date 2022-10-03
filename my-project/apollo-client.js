import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://reddit-lac.vercel.app/api/unrealistic-camel",
    headers:{
        Authorization: `airmont::stepzen.net+1000::11b95a2c574833389e4eac4c8b020d02b08ca959b698e142d0e93152dbfaaf49`
    },
    cache: new InMemoryCache(),
});

export default client;
