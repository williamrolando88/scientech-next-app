import Iconify from "@/components/shared/Iconify";
import { useImportCalculatorContext } from "@/hooks/useCalculatorContext";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import CollapsibleAlert from "../../../shared/CollapsibleAlert";

const CalculatorSaveConfirmation: FC = () => {
  const { values, handleChange } = useImportCalculatorContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [alertText, setAlertText] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    setAlertText("");
  };

  return (
    <>
      <Button
        startIcon={<Iconify icon="pajamas:upload" />}
        variant="contained"
        color="secondary"
        sx={{ color: "white" }}
        onClick={() => setModalOpen(true)}
      >
        Guardar
      </Button>
      <Dialog open={modalOpen} onClose={closeModal} fullWidth>
        <DialogTitle>Guardar Cálculo</DialogTitle>

        <DialogContent dividers sx={{ pt: 2, border: "none" }}>
          <TextField
            fullWidth
            label="Descripción"
            value={values.metadata.description}
            name="metadata.description"
            onChange={handleChange}
            variant="outlined"
            required
          />

          <CollapsibleAlert
            alertText={alertText}
            onClose={() => setAlertText("")}
            open={!!alertText}
            severity="error"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={closeModal}>Cancelar</Button>

          <LoadingButton
            variant="contained"
            onClick={() => alert("Not implemented")}
            color="primary"
          >
            Guardar
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CalculatorSaveConfirmation;
