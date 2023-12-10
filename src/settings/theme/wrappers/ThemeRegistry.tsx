"use client";
import ThemeProvider from "@/settings/theme";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { SettingsProvider } from "./SettingsContext";
import ThemeSettings from "./ThemeSettings";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SettingsProvider>
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider>
          <CssBaseline />
          <ThemeSettings>{children}</ThemeSettings>
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </SettingsProvider>
  );
}
