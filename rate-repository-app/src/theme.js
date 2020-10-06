import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#e1e4e8',
    textSecondary: '#24292e',
    primary: '#0366d6',
    secondary: 'white',
    error: '#d73a4a',
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
};

export default theme;
