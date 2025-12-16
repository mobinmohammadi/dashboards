import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export default function LeftContent() {
  const theme = createTheme({
    direction: "rtl", // راست‌چین
    typography: {
      fontFamily: "Tahoma, Arial, sans-serif",
    },
  });
  return (
    <div className="border-gray-400 border rounded-2xl pt-8 pr-12 pl-12 w-[800px] h-[711px]">
       <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ margin: "20px", direction: "rtl" }}>
        <TextField
          label="نام و نام خانوادگی"
          variant="outlined"
          fullWidth
           InputProps={{
            style: { textAlign: "right" } // متن داخل فیلد راست‌چین شود
          }}
        />
      </div>
    </ThemeProvider>
    </div>
  );
}
