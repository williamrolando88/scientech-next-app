import Iconify from "@/components/shared/Iconify";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { FC, useState } from "react";
import { OpenCalculationTable } from "./OpenCalculationTable";

export const CalculatorOpenRemote: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Button
        startIcon={<Iconify icon="pajamas:download" />}
        variant="contained"
        color="secondary"
        sx={{ color: "white" }}
        onClick={() => setOpenModal(true)}
      >
        Recuperar
      </Button>

      <Dialog fullWidth open={openModal} onClose={handleClose}>
        <DialogTitle>Abrir Cálculo</DialogTitle>

        <DialogContent sx={{ py: 2 }}>
          <OpenCalculationTable onClose={() => setOpenModal(false)} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
