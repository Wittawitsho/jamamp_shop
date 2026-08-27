import { Box, Container, Stack, Typography } from "@mui/material";
import { SectionTitle } from "../components/SectionTitle";
import { CounterCard } from "../features/counter/CounterCard";

// Single page ของแอป — ประกอบ components + features ต่างๆ เข้าด้วยกัน
export function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        bgcolor: "background.default",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "4rem" },
              color: "primary.main",
            }}
          >
            สวัสดี, โปรเจกต์ของคุณ! ✏️
          </Typography>
          <Typography variant="h6" color="text.secondary">
            React + TypeScript + MUI v6 พร้อมฟอนต์ลายมือ Patrick Hand
          </Typography>
        </Stack>

        <SectionTitle textAlign="center">ตัวอย่างฟีเจอร์</SectionTitle>
        <CounterCard />
      </Container>
    </Box>
  );
}
