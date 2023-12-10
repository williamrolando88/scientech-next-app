import { Icon, IconifyIcon } from "@iconify-icon/react";
import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

export type IconifyProps = IconifyIcon | string;

interface Props
  extends Omit<BoxProps, "width" | "height" | "display" | "alignItems" | "justifyContent"> {
  icon: IconifyProps;
  size?: number;
}

const Iconify: FC<Props> = ({ icon, size = 20, sx, ...other }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    sx={{ width: "fit-content", height: "fit-content", ...sx }}
    {...other}
  >
    <Icon icon={icon} width={size} height={size} />
  </Box>
);

export default Iconify;
