"use client";
import { IconButtonAnimate } from "@/components/shared/animate";
import { CustomAvatar } from "@/components/shared/custom-avatar";
import MenuPopover from "@/components/shared/menu-popover";
import { logOut } from "@/lib/actions/auth";
import { Box, Divider, MenuItem, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OPTIONS = [
  {
    label: "Home",
    linkTo: "/",
  },
  {
    label: "Profile",
    linkTo: "/",
  },
  {
    label: "Settings",
    linkTo: "/",
  },
];

export default function AccountPopover() {
  const { push } = useRouter();
  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleClickItem = (path: string) => {
    handleClosePopover();
    push(path);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpenPopover}
        sx={{
          p: 0,
          ...(openPopover && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <CustomAvatar alt="Test user" name="Test user" />
      </IconButtonAnimate>

      <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{ width: 200, p: 0 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {"user?.displayName"}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {"user?.email"}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <form action={logOut}>
          <button
            type="submit"
            style={{
              background: "none",
              color: "inherit",
              border: "none",
              padding: 0,
              font: "inherit",
              outline: "inherit",
              width: "100%",
            }}
          >
            <MenuItem sx={{ m: 1 }}>Logout</MenuItem>
          </button>
        </form>
      </MenuPopover>
    </>
  );
}
