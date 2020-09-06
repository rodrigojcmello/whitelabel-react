import { CSSObject } from 'styled-components';

export type Styles = CSSObject;

// Elements --------------------------------------------------------------------

export type ButtonElementsAttributes = 'button' | 'text';

type ButtonElements<T> = {
  [attr in ButtonElementsAttributes]: T;
};

// Status ----------------------------------------------------------------------

export type ButtonStatusAttribute =
  | 'rest'
  | 'hover'
  | 'focus'
  | 'pressed'
  | 'disabled';

type ButtonStatusStyle<T> = {
  [attr in ButtonStatusAttribute]: Partial<ButtonElements<T>>;
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
  [attr in ButtonTypeAttribute]: Partial<ButtonStatusStyle<T>>;
};

type ButtonSizeStyle<T> = {
  [attr in ButtonSizeAttribute]: Partial<ButtonStatusStyle<T>>;
};

interface WhiteLabel<T> {
  button?: {
    type?: Partial<ButtonTypeStyle<T>>;
    size?: Partial<ButtonSizeStyle<T>>;
  };
}

const whitelabel: WhiteLabel<Styles> = {
  button: {
    type: {
      accent: {
        rest: {
          button: {
            backgroundColor: '#6200ee',
            borderRadius: 4,
          },
          text: {
            color: '#FFFFFF',
            textTransform: 'uppercase',
          },
        },
        hover: {
          button: {
            backgroundColor: '#5E00E4',
          },
        },
        focus: {},
        pressed: {},
        disabled: {},
      },
      default: {
        rest: {
          button: {
            backgroundColor: '#FFFFFF',
            borderRadius: 4,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#0000001f',
          },
          text: {
            color: '#6200ee',
            textTransform: 'uppercase',
          },
        },
        hover: {
          button: {
            backgroundColor: '#6200ee0a',
          },
        },
      },
      text: {
        rest: {
          button: {
            backgroundColor: '#ffffff00',
          },
          text: {
            color: '#6200ee',
            textTransform: 'uppercase',
          },
        },
      },
    },
    size: {
      small: {
        rest: {
          button: {
            minWidth: 80,
            height: 24,
            paddingRight: 16,
            paddingLeft: 16,
          },
          text: {
            lineHeight: 20,
            fontSize: 12,
          },
        },
      },
      medium: {
        rest: {
          button: {
            minWidth: 120,
            height: 36,
            paddingRight: 16,
            paddingLeft: 16,
          },
          text: {
            lineHeight: 20,
            fontSize: 14,
          },
        },
      },
      large: {
        rest: {
          button: {
            minWidth: 200,
            height: 42,
          },
          text: {
            lineHeight: 20,
            fontSize: 16,
          },
        },
      },
    },
    // color: {},
  },
};

export default whitelabel;
