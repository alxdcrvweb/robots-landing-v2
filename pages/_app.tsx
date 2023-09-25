import "../styles/app.sass";
import style from '../components/layout/header.module.sass'
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { RootStore } from "../stores/RootStore";
import { Provider, useInjection } from "inversify-react";
import { ModalsContainer, ModalsEnum } from "../modals";
import Layout from "../components/layout/layout";
import React, { Suspense } from "react";
const rootStore = new RootStore();
const container = rootStore.container;
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet, optimism, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});
function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  const [loading, setLoading] = useState(false)
  // try reconnect to web3
  useEffect(() => {
    setLoading(true)
  }, []);

  return (
    <>
      {loading ?
        <Provider container={container}>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
              chains={chains}
              //   theme={darkTheme({
              //     accentColor: "black",
              //     accentColorForeground: "white",
              //     borderRadius: "medium",
              //   })}
            >
              <Suspense fallback={<h1>Loading posts...</h1>}>
                <Layout>
                  <AnyComponent {...pageProps} />
                </Layout>
                <ModalsContainer />
              </Suspense>
            </RainbowKitProvider>
          </WagmiConfig>
        </Provider>
      : <div className={style.loader}>Loading...</div>}
    </>
  );
}

export default MyApp;
