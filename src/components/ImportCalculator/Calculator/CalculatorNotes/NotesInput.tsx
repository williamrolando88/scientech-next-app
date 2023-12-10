"use client";
import { useCalculatorContext } from "@/hooks/useCalculatorContext";
import { TextField } from "@mui/material";
import { useRef } from "react";

export const NotesInput = () => {
  const { addNote } = useCalculatorContext();
  const inputRef = useRef<HTMLInputElement>();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!inputRef.current) return;

    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      if (inputRef.current.value) {
        addNote(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.blur();
      }
    }

    if (e.key === "Escape") {
      inputRef.current.value = "";
      inputRef.current.blur();
    }
  };

  return (
    <TextField
      inputRef={inputRef}
      onKeyDown={handleKeyDown}
      helperText="Presiona ENTER para agregar, DOBLE CLICK para editar, presiona ESC para cancelar"
    />
  );
};
