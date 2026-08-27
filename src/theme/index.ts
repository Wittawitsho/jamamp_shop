import { createTheme } from "@mui/material/styles";

// ปรับสี/ฟอนต์ที่นี่ที่เดียว ส่วนอื่นของแอปเรียกใช้ theme ผ่าน MUI ThemeProvider
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2F6F4E", // เขียวใบไม้ ให้ความรู้สึกอบอุ่นเข้ากับลายมือ
    },
    secondary: {
      main: "#E4572E", // ส้มอิฐ ใช้เป็นจุดเน้น
    },
    background: {
      default: "#FBF7EF", // ครีมอ่อน คล้ายกระดาษ
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2B2B2B",
    },
  },
  typography: {
    fontFamily: '"Patrick Hand", "Sarabun", sans-serif',
    h1: { fontWeight: 400 },
    h2: { fontWeight: 400 },
    h3: { fontWeight: 400 },
    h4: { fontWeight: 400 },
    h5: { fontWeight: 400 },
    h6: { fontWeight: 400 },
    button: { textTransform: "none", fontSize: "1.1rem" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Patrick Hand", sans-serif',
        },
      },
    },
  },
});
