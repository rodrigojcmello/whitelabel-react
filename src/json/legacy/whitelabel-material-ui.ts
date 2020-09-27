import { Styles, WhiteLabel } from './whitelabel';

const whitelabel: WhiteLabel<Styles> = {
  button: {
    base: {
      button: {
        borderRadius: 4,
        cursor: 'pointer',
        transition: 'all ease-in 0.25s',
      },
      text: {
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        letterSpacing: 1.25,
        lineHeight: 16,
        transition: 'all ease-in 0.25s',
      },
    },
    type: {
      accent: {
        rest: {
          button: {
            backgroundColor: '#6200ee',
          },
          text: {
            color: '#FFFFFF',
          },
        },
        hover: {
          button: {
            backgroundColor: '#5E00E4',
          },
        },
        focus: {
          button: {
            backgroundColor: '#5600D1',
            outline: 'none',
          },
        },
        pressed: {},
        disabled: {
          button: { backgroundColor: '#F8F8F8' },
          text: {
            color: '#9A9A9A',
          },
        },
      },
      default: {
        rest: {
          button: {
            backgroundColor: '#FFFFFF',
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
            backgroundColor: '#f9f5fe',
          },
        },
        focus: {
          button: {
            backgroundColor: '#E3D7F4',
            borderColor: '#6200EE',
            outline: 'none',
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
        focus: {
          button: {
            backgroundColor: '#f9f5fe',
            outline: 'none',
          },
        },
      },
    },
    size: {
      medium: {
        rest: {
          button: {
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
    },
    // color: {},
  },
};

export default whitelabel;
