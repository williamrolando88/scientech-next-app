import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@mui/material';
import { FC } from 'react';

export interface ConfirmDialogProps
  extends Omit<DialogProps, 'title' | 'content'> {
  title: React.ReactNode;
  content?: React.ReactNode;
  action: React.ReactNode;
  open: boolean;
  onClose: VoidFunction;
  cancelButtonLabel?: string;
}

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  title,
  content,
  action,
  open,
  onClose,
  cancelButtonLabel = 'Cancel',
  ...other
}) => {
  return (
    <Dialog fullWidth maxWidth='xs' open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>

      {content && (
        <DialogContent sx={{ typography: 'body2' }}> {content} </DialogContent>
      )}

      <DialogActions>
        <Button color='primary' onClick={onClose}>
          {cancelButtonLabel}
        </Button>

        {action}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
