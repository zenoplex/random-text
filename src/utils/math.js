// @flow
import { generator } from '@gen/prng';

const rand = generator();

export const randomSign: () => number
= () => (Math.round(Math.random()) - 0.5) * 2;

export const generateRandomNumbers: number => number => number => number[]
= base => charOffset => length =>
  [...Array(length)].map(() => (base + rand.range(0, charOffset)) * randomSign());

export const minMaxLooped: (number, number) => number => number
= (min, max) => (value) => {
  if (value > max) return min + (value - max);
  if (value < min) return max + (value - min);
  return value;
};
