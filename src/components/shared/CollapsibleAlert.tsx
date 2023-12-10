import { Alert, AlertProps, AlertTitle, Collapse, IconButton } from "@mui/material";
import { FC } from "react";
import Iconify from "./Iconify";

interface Props extends Pick<AlertProps, "severity" | "title"> {
  onClose: VoidFunction;
  alertText: string;
  open: boolean;
}
const CollapsibleAlert: FC<Props> = ({ alertText, onClose, open, severity, title }) => {
  return (
    <Collapse sx={{ mt: 2 }} in={open}>
      <Alert
        severity={severity}
        action={
          <IconButton onClick={onClose}>
            <Iconify icon="pajamas:close" />
          </IconButton>
        }
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {alertText}
      </Alert>
    </Collapse>
  );
};

export default CollapsibleAlert;
