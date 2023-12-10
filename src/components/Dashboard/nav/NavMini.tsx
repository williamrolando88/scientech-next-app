import ScientechIcon from "@/components/shared/ScientechIcon";
import { NavSectionMini } from "@/components/shared/nav-section";
import { hideScrollbarX } from "@/lib/helpers/cssStyles";
import navConfig from "@/settings/routes/dashboardNavigation";
import { NAV } from "@/settings/theme/config-global";
import { Box, Stack } from "@mui/material";
import NavToggleButton from "./NavToggleButton";
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
          pt: 3,
          px: 2.5,
          pb: 2,
          height: 1,
          position: "fixed",
          width: NAV.W_DASHBOARD_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        <ScientechIcon />

        <Box sx={{ height: 40 }} />
        <NavSectionMini data={navConfig} />
      </Stack>
    </Box>
  );
}
