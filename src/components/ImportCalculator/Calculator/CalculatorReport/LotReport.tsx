"use client";
import { useImportCalculatorContext } from "@/hooks/useCalculatorContext";
import { Stack, Typography } from "@mui/material";
import { FC } from "react";

const LotReport: FC = () => {
  const { values, totalCost } = useImportCalculatorContext();

  const totalWeight = values.items.reduce((acc, item) => acc + item.unitWeight * item.quantity, 0);

  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography>
        Peso total:
        <span>
          <strong> {totalWeight} </strong>
        </span>
        libras
      </Typography>

      <Typography>
        Costo total: $
        <span>
          <strong> {totalCost} </strong>
        </span>
        USD
      </Typography>
    </Stack>
  );
};

export default LotReport;
