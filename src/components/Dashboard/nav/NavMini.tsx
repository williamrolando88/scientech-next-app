import { Box, Stack } from "@mui/material";
import NavToggleButton from "./NavToggleButton";
import { NAV } from "@/settings/theme/config-global";
import { hideScrollbarX } from "@/lib/helpers/cssStyles";
import { NavSectionMini } from "@/components/shared/nav-section";
import navConfig from "@/settings/routes/dashboardNavigation";
export default function NavMini() {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_DASHBOARD_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: "fixed",
          width: NAV.W_DASHBOARD_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        Logo
        <NavSectionMini data={navConfig} />
      </Stack>
    </Box>
  );
}
