"use client";
import localStorageAvailable from "@/lib/helpers/localStorageAvailable";
import { createContext, useCallback, useContext, useEffect, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { defaultSettings } from "./config-setting";
import { getPresets, presetsOption } from "./presets";
import { SettingsContextProps, SettingsValueProps } from "./types";

export const SettingsContext = createContext<SettingsContextProps>({} as SettingsContextProps);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) throw new Error("useSettingsContext must be use inside SettingsProvider");

  return context;
};

type SettingsProviderProps = {
  children: React.ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage<SettingsValueProps>("settings", defaultSettings);

  const storageAvailable = localStorageAvailable();

  const langStorage = storageAvailable ? localStorage.getItem("i18nextLng") : "";

  const isArabic = langStorage === "ar";

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang("ar");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic]);

  const onToggleMode = useCallback(() => {
    const themeMode = settings?.themeMode === "light" ? "dark" : "light";
    setSettings({ ...settings, themeMode });
  }, [setSettings, settings]);

  const onChangeMode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeMode = event.target.value;
      // @ts-expect-error - It is not critical
      setSettings({ ...settings, themeMode });
    },
    [setSettings, settings],
  );

  // Direction
  const onToggleDirection = useCallback(() => {
    const themeDirection = settings?.themeDirection === "rtl" ? "ltr" : "rtl";
    setSettings({ ...settings, themeDirection });
  }, [setSettings, settings]);

  const onChangeDirection = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeDirection = event.target.value;
      // @ts-expect-error - It is not critical
      setSettings({ ...settings, themeDirection });
    },
    [setSettings, settings],
  );

  const onChangeDirectionByLang = useCallback(
    (lang: string) => {
      const themeDirection = lang === "ar" ? "rtl" : "ltr";
      setSettings({ ...settings, themeDirection });
    },
    [setSettings, settings],
  );

  // Layout
  const onToggleLayout = useCallback(() => {
    const themeLayout = settings?.themeLayout === "vertical" ? "mini" : "vertical";
    setSettings({ ...settings, themeLayout });
  }, [setSettings, settings]);

  const onChangeLayout = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeLayout = event.target.value;
      // @ts-expect-error - It is not critical
      setSettings({ ...settings, themeLayout });
    },
    [setSettings, settings],
  );

  // Contrast
  const onToggleContrast = useCallback(() => {
    const themeContrast = settings?.themeContrast === "default" ? "bold" : "default";
    setSettings({ ...settings, themeContrast });
  }, [setSettings, settings]);

  const onChangeContrast = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeContrast = event.target.value;
      // @ts-expect-error - It is not critical
      setSettings({ ...settings, themeContrast });
    },
    [setSettings, settings],
  );

  // Color
  const onChangeColorPresets = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeColorPresets = event.target.value;
      // @ts-expect-error - It is not critical
      setSettings({ ...settings, themeColorPresets });
    },
    [setSettings, settings],
  );

  // Stretch
  const onToggleStretch = useCallback(() => {
    const themeStretch = !settings?.themeStretch;
    setSettings({ ...settings, themeStretch });
  }, [setSettings, settings]);

  // Reset
  const onResetSetting = useCallback(() => {
    setSettings(defaultSettings);
  }, [setSettings]);

  const exportedSettings = settings ? settings : defaultSettings;

  const memoizedValue = useMemo(
    () => ({
      ...exportedSettings,
      onToggleMode,
      onChangeMode,
      onToggleDirection,
      onChangeDirection,
      onChangeDirectionByLang,
      onToggleLayout,
      onChangeLayout,
      onChangeContrast,
      onToggleContrast,
      onToggleStretch,
      onChangeColorPresets,
      presetsOption,
      presetsColor: getPresets(exportedSettings?.themeColorPresets),
      onResetSetting,
    }),
    [
      exportedSettings,
      onToggleMode,
      onChangeMode,
      onToggleDirection,
      onChangeDirection,
      onChangeDirectionByLang,
      onToggleLayout,
      onChangeLayout,
      onChangeContrast,
      onToggleContrast,
      onToggleStretch,
      onChangeColorPresets,
      onResetSetting,
    ],
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
