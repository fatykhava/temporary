import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      dark: '#39B288',
      main: '#3B4554',
      light: '#3B4554',
    },
    action: {
      disabledBackground: '#E6EEFA',
      disabled: '#879BB2',
    },
    text: {
      primary: '#3B4554',
      secondary: '#879BB2',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 24,
        padding: '16px 24px',
      },
      label: {
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '15px',
        lineHeight: '15px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
      },
    },
  },
  typography: {
    fontFamily: ['Boston', 'Arial', 'sans-serif'].join(','),
    //   allVariants: {
    //     color: '#2C3E50',
    //     mixBlendMode: 'normal',
    //   },
    //   h1: {
    //     fontSize: 24,
    //     lineHeight: '28px',
    //     letterSpacing: 0.18,
    //     color: '#4A647C',
    //   },
    //   h2: {
    //     fontWeight: 'bold',
    //     fontSize: 20,
    //     lineHeight: '24px',
    //     letterSpacing: 0.15,
    //   },
    //   h5: {
    //     fontWeight: 500,
    //     fontSize: 24,
    //     lineHeight: '24px',
    //     letterSpacing: 0.18,
    //   },
    //   h6: {
    //     fontWeight: 'bold',
    //     fontSize: 20,
    //     lineHeight: '24px',
    //     letterSpacing: 0.15,
    //   },
    //   subtitle1: {
    //     fontWeight: 'bold',
    //     fontSize: 16,
    //     letterSpacing: 0.15,
    //     lineHeight: '24px',
    //   },
    //   subtitle2: {
    //     fontWeight: 500,
    //     fontSize: 14,
    //     lineHeight: '20px',
    //     letterSpacing: 0.1,
    //   },
    //   body1: {
    //     fontSize: 16,
    //     lineHeight: '24px',
    //     color: '#47525E',
    //   },
    //   body2: {
    //     fontSize: 14,
    //     color: '#4A647C',
    //   },
    //   button: {
    //     fontWeight: 'bold',
    //     fontSize: 14,
    //     letterSpacing: 1,
    //     textTransform: 'uppercase',
    //   },
    //   caption: {
    //     fontSize: 12,
    //     letterSpacing: 0.4,
    //     lineHeight: '16px',
    //     color: '#929DA8',
    //   },
    //   overline: {
    //     fontWeight: 500,
    //     fontSize: 10,
    //     lineHeight: '16px',
    //     letterSpacing: 1.5,
    //     textTransform: 'uppercase',
    //   },
  },
});

export default theme;
