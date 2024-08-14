"use client";

import * as React from "react";
import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import {
  RainbowKitProvider,
  getDefaultWallets,
  getDefaultConfig,
  darkTheme,
} from "@rainbow-me/rainbowkit";

import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";

//importing the chains we need (here, just Sepolia)
import {
  sepolia,
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from "wagmi/chains";

import { WagmiProvider } from "wagmi";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  phantomWallet,
  walletConnect,
} from "@thirdweb-dev/react";
const activeChain = [
  "ethereum",
  "goerli",
  "polygon",
  "arbitrum",
  "arbitrum-goerli",
  "optimism",
  "optimism-goerli",
  "binance",
  "binance-testnet",
  "fantom",
  "fantom-testnet",
  "avalanche-fuji",
  "avalanche-fuji-testnet",
  "localhost",
];

const { wallets } = getDefaultWallets();

const queryClient = new QueryClient();





export const config = getDefaultConfig({
  appName: "ENS dapp",
  projectId: "YOUR_PROJECT_ID",
  // the above value needs to be replaced
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],

  ssr: true,
});

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThirdwebProvider
      clientId="731fa65e66171b989b1015bc0db1d5b7"
      activeChain={activeChain[9]}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        phantomWallet(),
      ]}
    >


    </ThirdwebProvider>
  );
}
