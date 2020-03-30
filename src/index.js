import 'regenerator-runtime/runtime';

import push from './utils/chains';

import {
  amountFormatter as amountFormatterVisual,
  etherscanLink as etherscanLinkVisual,
  shortenAddress as shortenAddressVisual,
} from './utils/visuals';
import {
  isAddress as typeIsAddress,
  isArray as typeIsArray,
  isBigNumber as typeIsBigNumber,
  isDate as typeIsDate,
  isFunction as typeIsFunction,
  isNetworkId as typeIsNetworkId,
  isNumber as typeIsNumber,
  isPOJO as typeIsPOJO,
  isSet as typeIsSet,
  isString as typeIsString,
  isSupportedNetworkId as typeIsSupportedNetworkId,
  isTransactionHash as typeIsTransactionHash,
} from './utils/typeChecks';
import {
  validateIsAddress as isAddressValidation,
  validateIsArray as isArrayValidation,
  validateIsBigNumber as isBigNumberValidation,
  validateIsDate as isDateValidation,
  validateIsFunction as isFunctionValidation,
  validateIsNetworkId as isNetworkIdValidation,
  validateIsNumber as isNumberValidation,
  validateIsPOJO as isPOJOValidation,
  validateIsSet as isSetValidation,
  validateIsString as isStringValidation,
  validateIsSupportedNetworkId as isSupportedNetworkIdValidation,
  validateIsTransactionHash as isTransactionHashValidation,
} from './utils/validations';

export const amountFormatter = amountFormatterVisual;
export const chain = push;
export const etherscanLink = etherscanLinkVisual;
export const isAddress = typeIsAddress;
export const isArray = typeIsArray;
export const isBigNumber = typeIsBigNumber;
export const isDate = typeIsDate;
export const isFunction = typeIsFunction;
export const isNetworkId = typeIsNetworkId;
export const isNumber = typeIsNumber;
export const isPOJO = typeIsPOJO;
export const isSet = typeIsSet;
export const isString = typeIsString;
export const isSupportedNetworkId = typeIsSupportedNetworkId;
export const isTransactionHash = typeIsTransactionHash;
export const shortenAddress = shortenAddressVisual;
export const validateIsAddress = isAddressValidation;
export const validateIsArray = isArrayValidation;
export const validateIsBigNumber = isBigNumberValidation;
export const validateIsDate = isDateValidation;
export const validateIsFunction = isFunctionValidation;
export const validateIsNetworkId = isNetworkIdValidation;
export const validateIsNumber = isNumberValidation;
export const validateIsPOJO = isPOJOValidation;
export const validateIsSet = isSetValidation;
export const validateIsString = isStringValidation;
export const validateIsSupportedNetworkId = isSupportedNetworkIdValidation;
export const validateIsTransactionHash = isTransactionHashValidation;
