import { Box, Link as MUILink } from "@mui/material";
import Link from "next/link";
import { BreadcrumbsLinkProps } from "./types";

type Props = {
  link: BreadcrumbsLinkProps;
  activeLast?: boolean;
  disabled: boolean;
};

export default function BreadcrumbsLink({ link, activeLast, disabled }: Props) {
  const { name, href, icon } = link;

  const styles = {
    typography: "body2",
    alignItems: "center",
    color: "text.primary",
    display: "inline-flex",
    ...(disabled &&
      !activeLast && {
        cursor: "default",
        pointerEvents: "none",
        color: "text.disabled",
      }),
  };

  const renderContent = (
    <>
      {icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            display: "inherit",
            "& svg": { width: 20, height: 20 },
          }}
        >
          {icon}
        </Box>
      )}

      {name}
    </>
  );

  if (href) {
    return (
      <MUILink component={Link} href={href} sx={styles}>
        {renderContent}
      </MUILink>
    );
  }

  return <Box sx={styles}> {renderContent} </Box>;
}
