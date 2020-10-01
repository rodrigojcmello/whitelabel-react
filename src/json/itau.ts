// import json from './windows-10-fluent.json';
import { ButtonType } from '../components/Button/buttonType';
import { TextInputBoxType } from '../components/TextInputBox/textInputType';

type Components = ButtonType & TextInputBoxType;

const itau: Components = {
  button: {
    accent: {
      block: {
        base: {
          borderRadius: 4,
        },
        interactivity: {
          rest: { backgroundColor: '#EC7000' },
          hover: { backgroundColor: '#DD6100' },
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
          xLarge: {
            height: 56,
            minWidth: 300,
          },
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: { backgroundColor: '#D6D0CC' },
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
          disabled: { fontColor: '#89837F' },
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {},
          large: {},
          xLarge: {
            fontSize: 20,
            lineHeight: 24,
          },
          xxLarge: {},
          xxxLarge: {},
        },
      },
    },
    default: {
      block: {
        base: {
          borderRadius: 4,
          borderStyle: 'solid',
          borderWidth: 1,
        },
        interactivity: {
          rest: {
            backgroundColor: '#fff',
            borderColor: '#106EB0',
          },
          hover: {
            backgroundColor: '#FAF7F5',
            borderColor: '#106EB0',
          },
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
          disabled: { backgroundColor: '#FAF7F5' },
        },
      },
      text: {
        base: { lineHeight: 20, fontSize: 14, fontWeight: 700 },
        interactivity: {
          rest: { fontColor: '#106EB0' },
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
  textInputBox: {
    labelOnTop: {
      input: {
        base: {
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.6)',
          fontSize: 14,
          fontFamily: 'Segoe UI',
          lineHeight: 20,
          paddingRight: 11,
          borderBottomStyle: 'solid',
          borderBottomColor: '#89837F',
        },
        interactivity: {
          focus: {
            borderBottomWidth: 2,
            borderColor: '#EC7000',
          },
        },
        sizing: {
          medium: {
            height: 32,
            minWidth: 120,
          },
        },
      },
      label: {
        base: {
          fontSize: 14,
          fontFamily: 'Segoe UI',
          lineHeight: 20,
        },
      },
    },
  },
};

export default itau;
