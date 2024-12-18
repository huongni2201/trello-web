import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2', // Custom primary color
        },
        secondary: {
          main: '#9c27b0', // Custom secondary color
        },
        background: {
          default: '#fff', // Light background color
          paper: '#ffffff', // Card or paper color
        },
      },
      typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        fontSize: 14, // Base font size
        h1: {
          fontSize: '2.5rem',
          fontWeight: 700,
        },
        body1: {
          fontSize: '1rem',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9', // Light blue for dark mode
        },
        secondary: {
          main: '#ce93d8', // Light purple for dark mode
        },
        background: {
          default: '#121212', // Dark background color
          paper: '#1e1e1e', // Card or paper color
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class', // Use 'class' for manual mode toggling
  },
  spacing: 8, // Default spacing unit (8px)
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme
