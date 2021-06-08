const mainColors = {
  //   green1: '#0BCAD4',
  //   green2: '#EDFCFD',
  //   dark1: '#112340',
  //   dark2: '#495A75',
  //   dark3: '#8092AF',
  grey1: '#8D92A3',
  //   grey2: '#E9E9E9',
  //   grey3: '#EDEEF0',
  //   grey4: '#B1B7C2',
  //   blue1: '#0066CB',
  black1: '#020202',
  //   black2: 'rgba(0,0,0,0.5)',
  //   red1: '#E06379',
  yellow1: '#FFC700',
};

export const colors = {
  primary: mainColors.yellow1,
  secondary: mainColors.grey1,
  //   tertiary: mainColors.blue1,
  white: 'white',
  black: mainColors.black1,
  //   disable: mainColors.grey3,
  text: {
    primary: mainColors.black1,
    secondary: mainColors.grey1,
    // menuInactive: mainColors.dark2,
    // menuActive: mainColors.green1,
    // subTitle: mainColors.dark3,
  },
  Button: {
    primary: {
      background: mainColors.yellow1,
      text: mainColors.black1,
    },
    secondary: {
      background: mainColors.grey1,
      text: 'white',
    },
    // disable: {
    //   background: mainColors.grey3,
    //   text: mainColors.grey4,
    // },
  },
  //   border: mainColors.grey2,
  //   cardLight: mainColors.green2,
  //   loadingBackground: mainColors.black2,
  //   error: mainColors.red1,
};
