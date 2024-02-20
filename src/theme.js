import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Palette
  palette: {
    primary: {
      main: "#FF6600", // Your primary brand color (e.g., orange)
    },
    secondary: {
      main: "#000000", // Secondary color (e.g., black)
    },
    background: {
      default: "#FFFFFF", // Background color (e.g., white)
    },
  },

  // Typography
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: 16, // Default font size
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },

  // Spacing
  spacing: 8, // Default spacing unit

  // Borders
  shape: {
    borderRadius: 4, // Default border radius
  },

  // Shadows
  shadows: ["none", "0px 2px 4px rgba(0, 0, 0, 0.1)"],

  // Button Styles
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Prevents button text from being uppercase
        },
      },
    },
  },

  // Input Styles
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          border: "1px solid #000000", // Input border color
          borderRadius: "4px", // Input border radius
          padding: "8px", // Input padding
        },
      },
    },
  },

  // App Bar Styles
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FF6600", // App bar background color
          color: "#FFFFFF", // Text color for app bar
        },
      },
    },
  },

  // Drawer Styles
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FF6600", // Drawer background color
          color: "#FFFFFF", // Text color for drawer
        },
      },
    },
  },

  // Table Styles
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #000000", // Border at the bottom of each cell
          padding: "12px", // Cell padding
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: "#F5F5F5", // Alternate row background color
          },
        },
      },
    },
  },

  // ... Add more component-specific styles as needed
});

export default theme;
