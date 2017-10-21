# RandomText

[![Build Status](https://travis-ci.org/zenoplex/random-text.svg?branch=master)](https://travis-ci.org/zenoplex/random-text)

Yugop.com(by Yugo Nakamura) style text animation effect re-created in javascript.
Ported from my old Actionscript 3 file.

![sample.gif](https://github.com/zenoplex/random-text/raw/master/sample.gif)

## Quick start

```
npm i @gen/random-text -S
```

```
import RandomText from '@gen/random-text';

const randomText = new RandomText({
  str: 'string to animate',
  onProgress: str => { // callback for progress },
  onComplete: str => { // callback for completion }
});
```
See example folder for detailed usage

## RandomText(options)

### options

#### str: string

Target string to animate.

### speed?: number

Number of characters per iteration (Defaults to `2`). 
Note: Currently animation is not time-based so longer the `str`, longer the animation will take to complete.  This might change in future to time-based animation. 

### placeholderChar?: string

String to represent for placeholder before the shuffling animation begins (Defaults to `'_'`).

### frameOffset?: number

Represents the base offset value for generated randoms (Defaults to `30`).  Bigger they are, longer the placeholder will be shown before shuffle.

### charOffset?: number

Represents max offset amount for character to shuffle (Defaults to `20`).

### charStep?: number

Represents wait amount before character shuffling to start (Defaults to `10`).  Use with `frameOffset` to adjust effect.

### minCharCode?: number

Represents minimum character to display while shuffling (Defaults to `22`).

### maxCharCode?: number

Represents maximum character to display while shuffling (Defaults to `122`)

### onProgress?: string => void

Callback function during animation.  Animated string will be returned as first argument.

### onComplete?: string => void

Callback function on animation complete.  String will be returned as first argument which is likely to be the original target string(unless its a bug).

