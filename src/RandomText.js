// @flow
import { generateRandomCharCodeArray, charCodeArrayToString } from './core';
import { noop } from './utils/noop';

type Options = {
  str: string,
  speed?: number,
  placeholderChar?: string,
  frameOffset?: number,
  charOffset?: number,
  charStep?: number,
  minCharCode?: number,
  maxCharCode?: number,
  onProgress?: string => void,
  onComplete?: string => void,
};

class RandomText {
  static defaults: Options = {
    str: '',
    speed: 2,
    placeholderChar: '_',
    frameOffset: 30,
    charOffset: 20,
    charStep: 10,
    minCharCode: 32,
    maxCharCode: 122,
    onProgress: noop,
    onComplete: noop,
  };

  str: string;
  speed: number;
  placeholderChar: string;
  frameOffset: number;
  charOffset: number;
  charStep: number;
  minCharCode: number;
  maxCharCode: number;
  onProgress: Function;
  onComplete: Function;
  rafId: number; // TODO: should be #rafId for private

  constructor(options: Options) {
    Object.assign(this, { ...RandomText.defaults, ...options });
  }

  start = () => {
    const {
      frameOffset, charOffset, str, speed,
    } = this;
    const randoms = generateRandomCharCodeArray(frameOffset, charOffset)(str);

    this.stop();
    this.rafId = requestAnimationFrame(() => {
      this.step(randoms, speed, speed);
    });
  };

  stop() {
    cancelAnimationFrame(this.rafId);
  }

  step(randoms: number[], stepCount: number, speed: number) {
    const {
      str, charStep, minCharCode, maxCharCode, placeholderChar, onProgress, onComplete,
    } = this;

    const stepArray = randoms.slice(0, stepCount);
    const steppedArray = stepArray.map((item) => {
      if (item > 0) return item - 1;
      if (item < 0) return item + 1;
      return 0;
    });
    const output = charCodeArrayToString({
      str, minCharCode, maxCharCode, placeholderChar, charStep,
    })(steppedArray);
    const updatedRandoms = [...steppedArray, ...randoms.slice(stepCount)];

    onProgress(output);
    if (output !== str) {
      this.rafId = requestAnimationFrame(() => {
        this.step(updatedRandoms, stepCount + speed, speed);
      });
    } else {
      onComplete(output);
    }
  }
}

export default RandomText;
