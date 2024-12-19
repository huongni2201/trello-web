import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles'

// Create a theme instance
const theme = createTheme({
  trelloCustom: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      },
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`
});

export default theme
