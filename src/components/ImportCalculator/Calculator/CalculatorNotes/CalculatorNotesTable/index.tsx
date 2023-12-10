"use client";
import { useImportCalculatorContext } from "@/hooks/useCalculatorContext";
import { Stack } from "@mui/material";
import { FC } from "react";
import { EditableTextField } from "./EditableTextField";

const CalculatorNotesTable: FC = () => {
  const { values } = useImportCalculatorContext();
  return (
    <Stack gap={1}>
      {values.notes.map((_, index) => (
        <EditableTextField key={index} index={index} />
      ))}
    </Stack>
  );
};

export default CalculatorNotesTable;
