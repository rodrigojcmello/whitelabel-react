import { Styles, WhiteLabel } from './whitelabel';

const whitelabel: WhiteLabel<Styles> = {
  button: {
    base: {
      button: {
        minWidth: 120,
        height: 32,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 2,
      },
      text: {
        lineHeight: 20,
        fontSize: 14,
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
      },
    },
    // color: {},
  },
};

export default whitelabel;
