import { Box } from "@mantine/core";

const outer = "flex flex-col items-center";
const inner = `w-full min-h-screen max-w-3xl`;

type AppProps = { children: React.ReactNode };

export function App({ children }: AppProps) {
  return (
    <Box className={outer}>
      <Box className={inner}>{children}</Box>
    </Box>
  );
}
