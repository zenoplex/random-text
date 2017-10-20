// @flow

export const strToCharCodeArray: string => number[]
= str => str.split('').map(item => item.charCodeAt(0));
