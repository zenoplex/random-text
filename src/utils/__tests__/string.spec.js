// @flow
import * as string from '../string';

describe('string', () => {
  describe('strToRandomArray', () => {
    it('should return array to charCode', () => {
      expect(string.strToCharCodeArray('Lorem')).toEqual([76, 111, 114, 101, 109]);
    });
  });
});

