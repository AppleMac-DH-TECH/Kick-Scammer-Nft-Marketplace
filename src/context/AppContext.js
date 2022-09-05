/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Web3Modal from "web3modal";
import siteConfig from '../config/site.config';
import Torus from "@toruslabs/torus-embed";

export const AppContext = createContext();

const providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: "538f6602a3474dfab48d5e4728f98d13"
    }
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "ScammersNFT", // Required
      infuraId: "IN538f6602a3474dfab48d5e4728f98d13FURA_ID", // Required
      chainId: 1, // Optional. It defaults to 1 if not provided
      darkMode: true // Optional. Use dark theme, defaults to false
    }
  },
  torus: {
    package: Torus, // required
    options: {
      networkParams: {
        chainId: 1337, // optional
        networkId: 1337 // optional
      },
      config: {
      }
    }
  }
};



export const AppcontextProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [network, setNetwork] = useState();

  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions, // required
    theme: "dark"
  });
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);
      setNetwork(network);
      setNetworkId(network.chainId)
      if (network.chainId === siteConfig.NETWORK.ID) {
        if (accounts.length !== 0)
          setAccount(accounts[0]);
        return Promise.resolve({
          message: 'success',
          account: accounts[0]
        })
      }
      else {
        setAccount();
        return Promise.reject({ message: `Change network to ${siteConfig.NETWORK.NAME}.` })
      }
    } catch (error) {
      return Promise.reject({ message: "Something went wrong." })
    }
  };

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        setAccount(accounts[0]);
      };

      const handleChainChanged = (chainId) => {
        setNetworkId(chainId);
      };

      const handleDisconnect = () => {
        disconnectWallet();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [])

  const refreshState = () => {
    setAccount();
    setNetworkId();
    setNetwork();
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  }

  const getAccBalance = async () => {
    if (library) {
      if (account) {
        let balance = await library.getBalance(account);
        return Number(ethers.utils.formatEther(balance.toString()));
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        connectWallet,
        disconnectWallet,
        getAccBalance,
        account,
        library,
        provider,
        networkId,
        network,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
