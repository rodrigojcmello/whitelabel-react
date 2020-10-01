// import json from './windows-10-fluent.json';
import { ButtonType } from '../components/Button/buttonType';
import { TextInputBoxType } from '../components/TextInputBox/textInputType';

type Components = ButtonType & TextInputBoxType;

const androidMaterialDesign: Components = {
  button: {
    accent: {
      block: {
        base: {
          borderRadius: 16,
        },
        interactivity: {
          rest: { backgroundColor: '#6200ee' },
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
          xLarge: {
            height: 56,
            minWidth: 300,
          },
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: { backgroundColor: '#C6C6C6' },
        },
      },
      text: {
        base: {
          fontFamily: '"Roboto-Medium", serif',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 20,
          paddingLeft: 16,
          paddingRight: 16,
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
          borderRadius: 16,
          borderWidth: 1,
          borderColor: '#6200ee',
          borderStyle: 'solid',
        },
        interactivity: {
          rest: { backgroundColor: '#ffffff' },
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
        base: { lineHeight: 20, fontSize: 14 },
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
          borderRadius: 3.5,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.6)',
          fontSize: 14,
          fontFamily: 'Segoe UI',
          lineHeight: 20,
          paddingLeft: 15,
          paddingRight: 15,
        },
        interactivity: {
          focus: {
            borderWidth: 1,
            borderColor: '#0078D4',
          },
        },
        sizing: {
          medium: {
            height: 54,
            minWidth: 240,
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
    labelPlaceholder: {
      input: {
        base: {
          backgroundColor: '#FFFFFF',
          borderRadius: 3.5,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.6)',
          fontSize: 14,
          fontFamily: 'Segoe UI',
          lineHeight: 20,
          paddingLeft: 15,
          paddingRight: 15,
        },
        interactivity: {
          focus: {
            borderWidth: 1,
            borderColor: '#0078D4',
          },
        },
        sizing: {
          medium: {
            height: 54,
            minWidth: 240,
          },
        },
      },
      label: {
        base: {
          fontSize: 14,
          fontFamily: 'Segoe UI',
          lineHeight: 20,
        },
        interactivity: {
          focus: {
            fontColor: '#0078D4',
          },
        },
      },
    },
  },
};

export default androidMaterialDesign;
