import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}

const AplloSetting = ({ children }: IApolloSettingProps) => {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}> {children} </ApolloProvider>;
};

export default AplloSetting;
