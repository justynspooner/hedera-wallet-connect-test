"use client";

import type { HederaChainId } from "@hashgraph/hedera-wallet-connect";
import { useEffect, useState } from "react";

export default function HederaWalletConnect() {
  const [chainId, setChainId] = useState<HederaChainId>();

  useEffect(() => {
    const init = async () => {
      const { HederaChainId } = await import(
        "@hashgraph/hedera-wallet-connect"
      );

      setChainId(HederaChainId.Mainnet);
    };
    init();
  }, []);

  return (
    <>
      <h2>Hedera Wallet Connect</h2>
      <p>{chainId}</p>
    </>
  );
}
