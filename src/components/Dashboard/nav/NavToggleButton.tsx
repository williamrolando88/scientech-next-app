"use client";
import Iconify from "@/components/shared/Iconify";
import { bgBlur } from "@/lib/helpers/cssStyles";
import { NAV } from "@/settings/theme/config-global";
import { useSettingsContext } from "@/settings/theme/wrappers";
import { IconButton, IconButtonProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useResponsive from "../../../hooks/useResponsive";

export default function NavToggleButton({ sx, ...other }: IconButtonProps) {
  const theme = useTheme();
  const { themeLayout, onToggleLayout } = useSettingsContext();
  const isDesktop = useResponsive("up", "lg");

  if (!isDesktop) {
    return null;
  }

  return (
    <IconButton
      size="small"
      onClick={onToggleLayout}
      sx={{
        p: 0.5,
        top: 32,
        position: "fixed",
        left: NAV.W_DASHBOARD - 12,
        zIndex: theme.zIndex.appBar + 1,
        border: `dashed 1px ${theme.palette.divider}`,
        ...bgBlur({ opacity: 0.48, color: theme.palette.background.default }),
        "&:hover": {
          bgcolor: "background.default",
        },
        ...sx,
      }}
      {...other}
    >
      <Iconify
        size={16}
        icon={themeLayout === "vertical" ? "eva:arrow-ios-back-fill" : "eva:arrow-ios-forward-fill"}
      />
    </IconButton>
  );
}
