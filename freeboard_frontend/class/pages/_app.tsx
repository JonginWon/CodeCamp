import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { type AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  // @ts-ignore
  return (
    <ApolloProvider client={client}>
      <Componente {...pageProps} />
    </ApolloProvider>
  );
}
