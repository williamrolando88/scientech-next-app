import { Link, ListItemText, Tooltip } from "@mui/material";
import NextLink from "next/link";
import { forwardRef } from "react";
import Iconify from "../../Iconify";
import { NavItemProps } from "../types";
import { StyledIcon, StyledItem } from "./styles";

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ item, depth, open, active, isExternalLink, ...other }, ref) => {
    const { title, path, icon, children, disabled, caption } = item;

    const subItem = depth !== 1;

    const renderContent = (
      <StyledItem
        ref={ref}
        open={open}
        depth={depth}
        active={active}
        disabled={disabled}
        {...other}
      >
        {icon && <StyledIcon>{icon}</StyledIcon>}

        <ListItemText
          primary={title}
          primaryTypographyProps={{
            noWrap: true,
            sx: {
              width: 72,
              fontSize: 10,
              lineHeight: "16px",
              textAlign: "center",
              ...(active && {
                fontWeight: "fontWeightMedium",
              }),
              ...(subItem && {
                fontSize: 14,
                width: "auto",
                textAlign: "left",
              }),
            },
          }}
        />

        {caption && (
          <Tooltip title={caption} arrow placement="right">
            <Iconify
              icon="eva:info-outline"
              size={16}
              sx={{
                top: 11,
                left: 6,
                position: "absolute",
              }}
            />
          </Tooltip>
        )}

        {!!children && (
          <Iconify
            size={16}
            icon="eva:chevron-right-fill"
            sx={{
              top: 11,
              right: 6,
              position: "absolute",
            }}
          />
        )}
      </StyledItem>
    );

    return isExternalLink ? (
      <Link href={path} target="_blank" rel="noopener" underline="none">
        {renderContent}
      </Link>
    ) : (
      <Link component={NextLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  }
);

export default NavItem;
