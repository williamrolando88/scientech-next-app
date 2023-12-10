"use client";
import Iconify from "@/components/shared/Iconify";
import { useCalculatorContext } from "@/hooks/useCalculatorContext";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { FC } from "react";
import CalculatorSaveConfirmation from "./CalculatorSaveRemote";

const CalculatorControllers: FC = () => {
  const { resetForm } = useCalculatorContext();

  return (
    <Stack
      component={Card}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      elevation={0}
      variant="outlined"
    >
      <Typography variant="h5" fontWeight={700} sx={{ textTransform: "uppercase" }}>
        Calculadora de Importaciones
      </Typography>

      <Box display="flex" gap={2}>
        <Button
          startIcon={<Iconify icon="pajamas:doc-new" />}
          variant="contained"
          color="secondary"
          sx={{ color: "white" }}
          onClick={resetForm}
        >
          Nuevo
        </Button>

        <CalculatorSaveConfirmation />
      </Box>
    </Stack>
  );
};

export default CalculatorControllers;
