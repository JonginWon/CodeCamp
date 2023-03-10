import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { type AppProps } from "next/app";
import "antd/dist/antd.css";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
