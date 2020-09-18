import { Styles, WhiteLabel } from './whitelabel';

const whitelabel: WhiteLabel<Styles> = {
  button: {
    base: {
      button: {
        cursor: 'pointer',
        minWidth: 120,
        height: 32,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 2,
        transition: 'all ease-in 0.2s',
      },
      text: {
        lineHeight: 20,
        fontSize: 14,
        transition: 'all ease-in 0.2s',
      },
    },
    type: {
      accent: {
        rest: {
          button: {
            backgroundColor: '#0078d4',
          },
          text: {
            color: '#FFFFFF',
          },
        },
        hover: {
          button: {
            backgroundColor: '#429CE3',
          },
        },
        focus: {
          button: {
            outline: 'none',
            boxShadow: '0 0 0 2px black',
          },
        },
      },
      default: {
        rest: {
          button: {
            backgroundColor: '#efefef',
          },
          text: {
            color: '#000000',
          },
        },
        hover: {
          button: {
            boxShadow: '0 0 0 2px red',
          },
        },
        focus: {
          button: {
            outline: 'none',
            boxShadow: '0 0 0 2px black',
          },
        },
      },
      text: {
        rest: {
          button: {
            backgroundColor: '#ffffff00',
          },
          text: {
            color: '#0078D4',
            textDecorationLine: 'underline',
          },
        },
        focus: {
          button: {
            outline: 'none',
          },
        },
      },
    },
    // color: {},
  },
};

export default whitelabel;
