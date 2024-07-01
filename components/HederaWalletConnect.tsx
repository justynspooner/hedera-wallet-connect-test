"use client";

import { HederaChainId } from "@hashgraph/hedera-wallet-connect";

export default function HederaWalletConnect() {
  return (
    <>
      <h2>Hedera Wallet Connect</h2>
      <p>{HederaChainId.Mainnet}</p>
    </>
  );
}
