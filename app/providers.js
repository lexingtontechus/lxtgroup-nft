"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="business">
      {/*<ThemeProvider attribute="class">*/}
      {children}
    </ThemeProvider>
  );
}
