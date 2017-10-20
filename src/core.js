// @flow
import { generator } from '@gen/prng';
import { strToCharCodeArray } from './utils/string';
import { randomSign, minMaxLooped } from './utils/math';

const rand = generator();

const random: (number, number) => () => number
= (base, offset) => () => (base + rand.range(0, offset)) * randomSign();

export const generateRandomCharCodeArray: (number, number) => string => number[]
= (base, offset) => str => strToCharCodeArray(str).map(random(base, offset));

type Options = {
  str: string,
  minCharCode: number,
  maxCharCode: number,
  placeholderChar: string,
  charStep: number,
};

export const charCodeArrayToString: Options => (number[]) => string = ({
  str,
  minCharCode,
  maxCharCode,
  placeholderChar,
  charStep,
}) => charCodes =>
  charCodes.reduce((acc, item, index) => {
    if (item !== 0) {
      if (Math.abs(item) > charStep) {
        return acc + placeholderChar;
      }
      return (
        acc +
        String.fromCharCode(minMaxLooped(minCharCode, maxCharCode)(str.charCodeAt(index) + item))
      );
    }
    return acc + str.charAt(index);
  }, '');
