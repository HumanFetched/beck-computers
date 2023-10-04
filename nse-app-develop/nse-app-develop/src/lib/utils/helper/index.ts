import copy from 'copy-to-clipboard';
import { has } from 'lodash';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { PasswordValidationType } from '../../types';
import {
  PASSWORD_MAX_LENGTH,
  TRAFFIC_DURATION,
  USER_REFRESH_KEY,
  USER_TOKEN_KEY,
} from '../constants';

export const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const setUserTokens = ({
  token,
  refreshToken,
}: {
  token?: string;
  refreshToken?: string;
}) => {
  if (typeof token === 'string') localStorage.setItem(USER_TOKEN_KEY, token);
  if (typeof refreshToken === 'string')
    localStorage.setItem(USER_REFRESH_KEY, refreshToken);
};

export const getUserToken = () => {
  return localStorage.getItem(USER_TOKEN_KEY);
};

export const roundTo = (
  value: number,
  precision = 2,
  defaultValue?: number,
) => {
  if (defaultValue !== undefined && Number.isNaN(Number(value))) {
    return defaultValue;
  }
  if (typeof value === 'number') {
    return (
      Math.round((value + Number.EPSILON) * 10 ** precision) / 10 ** precision
    );
  }
  return (
    Math.round((parseFloat(value) + Number.EPSILON) * 10 ** precision) /
    10 ** precision
  );
};

export const getPasswordValidations = (
  password: string,
  type: PasswordValidationType,
) => {
  switch (type) {
    case 'length':
      return password.length >= PASSWORD_MAX_LENGTH;
    case '1Lower':
      return /[a-z]/.test(password);
    case '1Upper':
      return /[A-Z]/.test(password);
    case '1Special':
      return password.match(/[@$!%*#?&]+/);
    default:
      return false;
  }
};

export const objToQueryParams = (
  obj: Record<string, string | number | boolean>,
) => {
  const str = [];
  // eslint-disable-next-line no-prototype-builtins
  for (const p in obj)
    if (has(obj, p) && obj[p]) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  return str.join('&');
};

export const copyToClipboard = (text: string) => {
  copy(text);
};

// eslint-disable-next-line no-useless-escape
export const domainRegex =
  // eslint-disable-next-line no-useless-escape
  /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
export const isValidDomain = (domain: string) => {
  const re = new RegExp(domainRegex);
  return domain.match(re);
};

const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export const emailListValidator = (emailList: string) => {
  const emails = emailList.split(',');

  let valid = true;
  for (let i = 0; i < emails.length; i++) {
    if (emails[i] === '' || !emailRegex.test(emails[i].replace(/\s/g, ''))) {
      valid = false;
    }
  }
  return valid;
};

export const getDate = (duration: string) => {
  const date = new Date();
  switch (duration) {
    case TRAFFIC_DURATION.twentyFourHour:
      return {
        fromDuration: new Date(
          date.getTime() - 24 * 60 * 60 * 1000,
        ).toISOString(),
        toDuration: new Date()?.toISOString(),
      };
    case TRAFFIC_DURATION.sevenDays:
      return {
        fromDuration: new Date(date.setDate(date.getDate() - 7)).toISOString(),
        toDuration: new Date()?.toISOString(),
      };
    case TRAFFIC_DURATION.oneMonth:
      return {
        fromDuration: new Date(
          date.setMonth(date.getMonth() - 1),
        )?.toISOString(),
        toDuration: new Date()?.toISOString(),
      };
    case TRAFFIC_DURATION.threeMonth:
      return {
        fromDuration: new Date(
          date.setMonth(date.getMonth() - 3),
        )?.toISOString(),
        toDuration: new Date()?.toISOString(),
      };

    default:
      return {
        fromDuration: new Date(
          date.setMonth(date.getMonth() - 1),
        )?.toISOString(),
        toDuration: date?.toISOString(),
      };
  }
};
