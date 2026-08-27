import { Typography, type TypographyProps } from "@mui/material";

interface SectionTitleProps extends Omit<TypographyProps, "variant"> {
  children: React.ReactNode;
}

// ตัวอย่าง shared component — วางไว้ในโฟลเดอร์ components
export function SectionTitle({ children, sx, ...rest }: SectionTitleProps) {
  return (
    <Typography
      variant="h3"
      component="h2"
      sx={{ mb: 3, color: "primary.main", ...sx }}
      {...rest}
    >
      {children}
    </Typography>
  );
}
