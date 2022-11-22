import {
  CYAN,
  GREEN,
  ORANGE,
  PINK,
  PURPLE,
  RED,
  TRANSPARENT,
  YELLOW,
} from '../constants';

export const LEFT = 'left' as const;
export const RIGHT = 'right' as const;

export type HighlightColors =
  | typeof CYAN
  | typeof GREEN
  | typeof ORANGE
  | typeof PINK
  | typeof PURPLE
  | typeof RED
  | typeof TRANSPARENT
  | typeof YELLOW;
