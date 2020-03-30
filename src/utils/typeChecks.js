import BigNumber from 'bignumber.js';
import isPlainObject from 'is-plain-object';
import { ethers } from 'ethers';

// https://github.com/ethereum/grid/issues/201
const networkIds = [
  1,
  2,
  3,
  4,
  5,
  6,
  8,
  42,
  60,
  77,
  99,
  100,
  31337,
  401697,
  7762959,
  61717561,
];

// https://docs.blocknative.com/webhook-api#supported-ethereum-networks
const supportedNetworkIds = [
  1,
  3,
  4,
  5,
  42,
];

// Core

export const isArray = (thing) => Array.isArray(thing);

export const isDate = (thing) => (thing && typeof thing === 'object' && thing instanceof Date);

export const isFunction = (thing) => (thing && {}.toString.call(thing) === '[object Function]');

export const isNumber = (thing) => !Number.isNaN(thing);

export const isPOJO = isPlainObject;

export const isSet = (thing) => (thing && typeof thing === 'object' && thing instanceof Set);

export const isString = (thing) => (typeof thing === 'string' || thing instanceof String);

// Blockchain

export const isAddress = (thing) => (
  thing
  && isString(thing)
  && ethers.utils.isHexString(thing)
  && thing.length === 42
);

export const isBigNumber = (thing) => (thing && BigNumber.isBigNumber(thing) && !thing.isNaN());

export const isNetworkId = (thing) => (isNumber(thing) && networkIds.includes(thing));

export const isSupportedNetworkId = (thing) => (
  isNumber(thing) && supportedNetworkIds.includes(thing)
);

export const isTransactionHash = (thing) => (
  thing
  && isString(thing)
  && ethers.utils.isHexString(thing)
  && thing.length === 66
);
