"use client";
import Iconify from "@/components/shared/Iconify";
import { useImportCalculatorContext } from "@/hooks/useCalculatorContext";
import { Button, Stack, TextField } from "@mui/material";
import { FC, useRef, useState } from "react";

interface CalculatorEditableFieldProps {
  index: number;
}

export const CalculatorEditableField: FC<CalculatorEditableFieldProps> = ({ index }) => {
  const { values, setFieldValue, deleteNote } = useImportCalculatorContext();
  const storedValue = values.notes[index];
  const [disabled, setDisabled] = useState(true);
  const [currentValue, setCurrentValue] = useState(storedValue);
  const inputRef = useRef<HTMLInputElement>();

  const handleDoubleClick = () => {
    if (!inputRef.current) return;

    setDisabled(false);
    inputRef.current.focus();
    inputRef.current.select();
  };

  const cancelEdit = () => {
    if (!inputRef.current) return;

    setCurrentValue(storedValue);
    setDisabled(true);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!inputRef.current) return;

    if (e.key === "Enter") {
      e.preventDefault();
      if (currentValue) {
        await setFieldValue(`notes[${index}]`, currentValue);
        inputRef.current.blur();
        setDisabled(true);
      } else {
        deleteNote(index);
      }
    }

    if (e.key === "Escape") {
      cancelEdit();
    }
  };

  const handleBlur = () => {
    cancelEdit();
  };

  const isLink =
    storedValue && typeof storedValue === "string" && storedValue.startsWith("https://");

  return (
    <Stack gap={1} direction="row" alignItems="stretch">
      {isLink && (
        <a href={storedValue} target="_blank" rel="noreferrer">
          <Button variant="outlined" sx={{ height: "100%" }} color="secondary">
            <Iconify icon="pajamas:external-link" />
          </Button>
        </a>
      )}

      <TextField
        fullWidth
        size="small"
        inputRef={inputRef}
        key={index}
        disabled={disabled}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />

      <Button variant="outlined" color="error" onClick={() => deleteNote(index)}>
        <Iconify icon="pajamas:remove" />
      </Button>
    </Stack>
  );
};
