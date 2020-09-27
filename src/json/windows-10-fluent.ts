// import json from './windows-10-fluent.json';
import { ButtonType } from '../components/Button/buttonType';

const windows10Fluent: ButtonType = {
  button: {
    accent: {
      block: {
        base: {
          borderRadius: 2,
        },
        interactivity: {
          rest: { backgroundColor: '#0078d4' },
          hover: { backgroundColor: '#429CE3' },
          focus: {},
          pressed: {},
          visited: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {
            height: 32,
            minWidth: 120,
          },
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: { backgroundColor: '#C6C6C6' },
        },
      },
      text: {
        base: {
          fontFamily: '"Segoe UI", serif',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 20,
          paddingLeft: 10,
          paddingRight: 10,
        },
        interactivity: {
          rest: { fontColor: '#FFFFFF' },
          hover: {},
          focus: {},
          pressed: {},
          visited: {},
        },
        validation: {
          disabled: { fontColor: '#00000066' },
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {},
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
      },
    },
    default: {
      block: {
        base: {
          borderRadius: 2,
        },
        interactivity: {
          rest: { backgroundColor: '#efefef' },
          hover: { backgroundColor: '#429CE3' },
          focus: {},
          pressed: {},
          visited: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {
            height: 32,
            minWidth: 120,
          },
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: {},
        },
      },
      text: {
        base: { lineHeight: 20, fontSize: 14 },
        interactivity: {
          rest: { fontColor: '#000000' },
          hover: {},
          focus: {},
          pressed: {},
          visited: {},
        },
        validation: {
          disabled: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {},
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
      },
    },
    text: {
      block: {
        base: { borderRadius: 2 },
        interactivity: {
          rest: { backgroundColor: '#ffffff00' },
          hover: { backgroundColor: '#429CE3' },
          focus: {},
          pressed: {},
          visited: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {
            height: 32,
            minWidth: 120,
          },
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: {},
        },
      },
      text: {
        base: { lineHeight: 20, fontSize: 14, textDecorationLine: 'underline' },
        interactivity: {
          rest: { fontColor: '#0078D4' },
          hover: {},
          focus: {},
          pressed: {},
          visited: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {},
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: {},
        },
      },
    },
  },
};

export default windows10Fluent;
