import React from 'react';
import { WalletActionButton } from '@tronweb3/tronwallet-adapter-react-ui';
import './TronConnect.css';

function ConnectWallet(): JSX.Element {
  return (
    <div>
      <WalletActionButton />
    </div>
  );
}

export default ConnectWallet;