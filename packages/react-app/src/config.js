import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x3aBF86a43D1E6Eb0EE93B89A90A95b7509213729"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/mo2LpkFVhcnMosSwAc3-XS54i_t6kImb",
  },
};
