// @flow
import * as math from '../math';

describe('maths', () => {
  describe('randomSign', () => {
    it('should return 1 or -1', () => {
      expect(math.randomSign()).toEqual(expect.any(Number));
    });
  });

  describe('minMaxLooped', () => {
    it('should return value looped within min max', () => {
      expect(math.minMaxLooped(0, 100)(50)).toEqual(50);
      expect(math.minMaxLooped(0, 100)(110)).toEqual(10);
      expect(math.minMaxLooped(0, 100)(-10)).toEqual(90);
    });
  });
});

