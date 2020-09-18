const whitelabel = {
  color: {
    main: {
      red: 'ruby',
    },
    red: [
      {
        name: 'red',
        origin: {
          hex: '#000000',
          brightness: 55,
        },
        brightness: {
          0: '#000000',
          100: '#000000',
        },
        use: {
          0: {
            component: ['Button', 'Tab'],
          },
        },
      },
      {
        name: 'ruby',
        origin: {
          hex: '#000000',
          brightness: 55,
        },
        brightness: {
          0: '#000000',
          100: '#000000',
        },
        used: [10, 34],
      },
    ],
    orange: {},
    yellow: {},
    green: {},
    teal: {},
    blue: {},
    violet: {},
    purple: {},
    pink: {},
  },
  component: {
    button: {
      base: {
        block: {
          height: 40,
          minWidth: 120,
          borderWidth: 1,
          borderRadius: 4,
          backgroundColor: 'blue',
          borderColor: 'black',
          borderStyle: 'solid',
        },
        text: {
          fontSize: 16,
          lineHeight: 20,
          fontColor: '#000000',
          fontFamily: 'Arial',
          fontWeight: 'bold',
          fontStyle: 'italic',
        },
      },
      types: {
        type1: {
          block: {
            interactivity: {
              rest: {},
              hover: {},
              focus: {},
              pressed: {},
              visited: {},
            },
            validation: {
              warning: {},
              danger: {},
              error: {},
              success: {},
              disabled: {},
            },
            waiting: {
              content: {},
              action: {},
            },
          },
          text: {
            interactivity: {
              rest: {},
              hover: {},
              focus: {},
              pressed: {},
              visited: {},
            },
            validation: {
              warning: {},
              danger: {},
              error: {},
              success: {},
              disabled: {},
            },
            waiting: {
              content: {},
              action: {},
            },
          },
        },
      },
    },
  },
};

export default whitelabel;
