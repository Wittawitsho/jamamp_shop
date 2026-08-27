import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useCounter } from "../../hook/useCounter";

// ตัวอย่าง feature — รวม logic + UI เฉพาะฟีเจอร์ไว้ในโฟลเดอร์เดียวกัน
export function CounterCard() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 4,
        textAlign: "center",
        border: "3px dashed",
        borderColor: "secondary.main",
        maxWidth: 360,
        mx: "auto",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, color: "text.secondary" }}>
        ลองกดดูสิ นับเลขเล่นๆ
      </Typography>
      <Typography variant="h1" sx={{ fontSize: "4rem", color: "secondary.main" }}>
        {count}
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Button variant="outlined" color="secondary" onClick={decrement}>
          − ลด
        </Button>
        <Button variant="contained" color="primary" onClick={increment}>
          + เพิ่ม
        </Button>
      </Stack>
      <Box sx={{ mt: 2 }}>
        <Button size="small" onClick={reset}>
          รีเซ็ต
        </Button>
      </Box>
    </Paper>
  );
}
