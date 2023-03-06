import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { type AppProps } from "next/app";
import "antd/dist/antd.css";
import AplloSetting from "../src/component/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/component/commons/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AplloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </AplloSetting>
  );
}
