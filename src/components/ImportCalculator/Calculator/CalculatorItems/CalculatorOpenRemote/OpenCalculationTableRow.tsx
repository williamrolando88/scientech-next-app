import { LoadingButton } from '@mui/lab';
import {
  Button,
  ButtonGroup,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
} from '@mui/material';
import copy from 'copy-to-clipboard';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Iconify from '../../../../components/RootComponents/Iconify';
import ConfirmDialog from '../../../../components/RootComponents/confirm-dialog/ConfirmDialog';
import {
  Calculation,
  useDeleteCalculationMutation,
} from '../../../../graphql/callers';
import { useNotifyServerResponse } from '../../../../hooks/useNotifyServerResponse';
import { ROUTES } from '../../../../router/AppRoutes';

interface Props {
  row: Partial<Calculation>;
  onClose: VoidFunction;
  onDelete: VoidFunction;
}
export const OpenCalculationTableRow: FC<Props> = ({
  row,
  onClose,
  onDelete,
}) => {
  const [deleteCalculationMutation] = useDeleteCalculationMutation();
  const { enqueueSnackbar, handleError } = useNotifyServerResponse();
  const navigate = useNavigate();
  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const closeDeleteConfirmation = () => setDeleteConfirmationModal(false);

  const handleClosePopover = () => setOpenPopover(null);

  const handleTogglePopover = (event: React.MouseEvent<HTMLElement>) => {
    if (openPopover) {
      setOpenPopover(null);
    } else {
      setOpenPopover(event.currentTarget);
    }
  };

  const handleOpenDeleteConfirmation = () => {
    setDeleteConfirmationModal(true);
    handleClosePopover();
  };

  const handleOpenCalculation = () => {
    if (!row.id) return;

    navigate(ROUTES.calculator.open(row.id));
    onClose();
  };

  const handleShareCalculation = () => {
    if (!row.id) return;

    copy(`${window.location.origin}${ROUTES.calculator.open(row.id)}`);
    enqueueSnackbar('Link copiado al portapapeles');
  };

  const handleDeleteCalculation = () => {
    if (!row.id) return;

    setDeleting(true);
    deleteCalculationMutation({ variables: { input: { id: row.id } } })
      .then(({ data, errors }) => {
        if (data?.calculation?.delete?.success) {
          enqueueSnackbar('Cálculo borrado exitosamente!');
          onDelete();
        }

        if (errors) {
          handleError('No se pudo borrar el cálculo seleccionado');
        }
      })
      .catch(() => handleError('No se pudo borrar el cálculo seleccionado'))
      .finally(() => {
        setDeleting(false);
        setDeleteConfirmationModal(false);
      });
  };

  return (
    <>
      <TableRow>
        <TableCell>{row.description}</TableCell>
        <TableCell>
          {row.createdAt && new Date(row.createdAt).toLocaleString('es-ES')}
        </TableCell>
        <TableCell>
          <ButtonGroup variant='outlined' color='secondary'>
            <Button size='small' onClick={handleOpenCalculation}>
              <Iconify icon='pajamas:folder-open' />
            </Button>
            <Button size='small' onClick={handleTogglePopover}>
              <Iconify icon='pajamas:chevron-lg-down' />
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>

      <Menu
        anchorEl={openPopover}
        open={!!openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        disablePortal
      >
        <MenuItem onClick={handleShareCalculation}>
          <ListItemIcon>
            <Iconify icon='pajamas:share' />
          </ListItemIcon>
          <ListItemText>Compartir</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={handleOpenDeleteConfirmation}
          sx={{ color: 'error.main' }}
        >
          <ListItemIcon>
            <Iconify icon='pajamas:remove' />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>

      <ConfirmDialog
        open={deleteConfirmationModal}
        onClose={closeDeleteConfirmation}
        title='Borrar cálculo?'
        content='Estás seguro de querer borrar el cálculo seleccionado? Esta acción no se puede deshacer'
        cancelButtonLabel='Cancelar'
        action={
          <LoadingButton
            variant='contained'
            onClick={handleDeleteCalculation}
            color='error'
            loading={deleting}
          >
            Borrar
          </LoadingButton>
        }
      />
    </>
  );
};
