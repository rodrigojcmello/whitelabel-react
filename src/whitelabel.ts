import { CSSObject } from 'styled-components';

export type Styles = CSSObject;

// Elements --------------------------------------------------------------------

export type ButtonElementsAttributes = 'block' | 'container' | 'text';

type ButtonElements<T> = {
  [attribute in ButtonElementsAttributes]: T;
};

// Status ----------------------------------------------------------------------

export type ButtonStatusAttribute =
  | 'rest'
  | 'hover'
  | 'focus'
  | 'pressed'
  | 'disabled';

type ButtonStatusStyle<T> = {
  [attribute in ButtonStatusAttribute]: Partial<ButtonElements<T>>;
};

// Modifier Type ---------------------------------------------------------------

export type ButtonTypeAttribute = 'accent' | 'default' | 'text';

// Modifier Size ---------------------------------------------------------------

export type ButtonSizeAttribute =
  | 'xxxSmall'
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge';

// Modifiers -------------------------------------------------------------------

type ButtonTypeStyle<T> = {
  [attribute in ButtonTypeAttribute]: Partial<ButtonStatusStyle<T>>;
};

type ButtonSizeStyle<T> = {
  [attribute in ButtonSizeAttribute]: Partial<ButtonStatusStyle<T>>;
};

export interface WhiteLabel<T> {
  button?: {
    base?: Partial<ButtonElements<T>>;
    type?: Partial<ButtonTypeStyle<T>>;
    size?: Partial<ButtonSizeStyle<T>>;
  };
}
