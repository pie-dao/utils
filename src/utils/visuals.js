import BigNumber from 'bignumber.js';

import {
  validateIsAddress,
  validateIsBigNumber,
  validateIsTransactionHash,
  validateIsSupportedNetworkId,
} from './validations';

export const ETHERSCAN_PREFIXES = {
  1: '',
  3: 'ropsten.',
  4: 'rinkeby.',
  5: 'goerli.',
  42: 'kovan.',
};

export const amountFormatter = ({
  amount,
  approximatePrefix = '~',
  displayDecimals = 3,
  lessThanPrefix = '< ',
}) => {
  if (!amount) {
    return '';
  }

  const prefix = '@pie-dao/utils - amountFormatter';
  const value = BigNumber(amount);

  validateIsBigNumber(value, { prefix });

  if (value.isZero()) {
    return value.toFixed(displayDecimals);
  }

  const smallest = BigNumber(1).dividedBy(10 ** displayDecimals).toString();

  if (value.isLessThan(smallest)) {
    return `${lessThanPrefix}${smallest}`;
  }

  const base = value.toFixed(displayDecimals);

  if (value.isGreaterThan(base)) {
    return `${approximatePrefix}${base}`;
  }

  return base;
};

export const etherscanLink = ({ address, transactionHash, networkId }) => {
  const prefix = '@pie-dao/utils - etherscanLink';
  validateIsSupportedNetworkId(networkId, { prefix });

  const domain = `https://${ETHERSCAN_PREFIXES[networkId] || ETHERSCAN_PREFIXES[1]}etherscan.io`;

  if (address) {
    validateIsAddress(address, { prefix });
    return `${domain}/address/${address}`;
  }

  if (transactionHash) {
    validateIsTransactionHash(transactionHash, { prefix });
    return `${domain}/tx/${transactionHash}`;
  }

  throw new Error(`${prefix}: missing 'address' or 'transactionHash' argument`);
};

export const shortenAddress = (address, digits = 4) => {
  validateIsAddress(address, { prefix: '@pie-dao/utils - shortenAddress' });

  const a = address.substring(0, digits + 2);
  const b = address.substring(42 - digits);

  return `${a}...${b}`;
};
