"use client";
import { MotionLazyContainer } from "@/components/shared/animate";
import SnackbarProvider from "@/components/shared/snackbar/SnackbarProvider";
import ThemeProvider from "@/settings/theme";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { SettingsProvider } from "./SettingsContext";
import ThemeSettings from "./ThemeSettings";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <MotionLazyContainer>
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
          <ThemeProvider>
            <CssBaseline />
            <ThemeSettings>
              <SnackbarProvider>{children}</SnackbarProvider>
            </ThemeSettings>
          </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </MotionLazyContainer>
    </SettingsProvider>
  );
}
