// @flow
import * as core from '../core';

describe('core', () => {
  describe('charCodeArrayToString', () => {
    it('should output placeholder if numbers are greater than charStep', () => {
      const options = {
        str: 'lorem',
        minCharCode: 32,
        maxCharCode: 122,
        placeholderChar: '_',
        charStep: 0,
      };
      const numbers = [-10, 10, -5, 5, 9999];
      expect(core.charCodeArrayToString(options)(numbers)).toEqual('_____');
    });
    it('should output randomized char if numbers are less than equal charStep', () => {
      const options = {
        str: 'lorem',
        minCharCode: 32,
        maxCharCode: 122,
        placeholderChar: '_',
        charStep: 10,
      };
      const numbers = [-10, 10, -5, 5, 9999];
      expect(core.charCodeArrayToString(options)(numbers)).toEqual('bymj_');
    });
    it('should output original char if numbers are 0', () => {
      const options = {
        str: 'lorem',
        minCharCode: 32,
        maxCharCode: 122,
        placeholderChar: '_',
        charStep: 10,
      };
      const numbers = [0, 0, 0, 0, 0];
      expect(core.charCodeArrayToString(options)(numbers)).toEqual('lorem');
    });
  });
});
