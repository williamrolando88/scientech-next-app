"use client";
import { useCalculatorContext } from "@/hooks/useCalculatorContext";
import { Stack } from "@mui/material";
import { FC } from "react";
import { CalculatorEditableField } from "./CalculatorEditableField";

const CalculatorNotesTable: FC = () => {
  const { values } = useCalculatorContext();
  return (
    <Stack gap={1}>
      {values.notes.map((_, index) => (
        <CalculatorEditableField key={index} index={index} />
      ))}
    </Stack>
  );
};

export default CalculatorNotesTable;
