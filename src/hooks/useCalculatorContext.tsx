"use client";
import {
  IMPORT_CALCULATOR_INITIAL_VALUE,
  IMPORT_CALCULATOR_NEW_ROW,
} from "@/lib/constants/importCalculator";
import { calculateImportation } from "@/lib/modules/calculator";
import { ImportCalculatorValidationSchema } from "@/lib/parsers/importCalculator";
import { ImportCalculator } from "@/types/importCalculator";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { FC, ReactNode, createContext, useContext, useEffect } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface Context {
  values: ImportCalculator;
  errors: FormikErrors<ImportCalculator>;
  touched: FormikTouched<ImportCalculator>;
  handleChange: (e: React.ChangeEvent<unknown>) => void;
  resetForm: VoidFunction;
  addRow: VoidFunction;
  deleteRow: (id: number) => void;
  addNote: (body: string) => void;
  deleteNote: (id: number) => void;
  setFieldValue: (
    field: string,
    value: string | number
  ) => Promise<void> | Promise<FormikErrors<ImportCalculator>>;
}

const CalculatorContext = createContext<Context>({} as Context);

interface Props {
  fetchedValues?: ImportCalculator;
  children: ReactNode;
}

export const CalculatorProvider: FC<Props> = ({ children, fetchedValues }) => {
  const handleFormSubmit = (formValues: ImportCalculator) => {
    const { pricesArray } = calculateImportation(formValues);
    setValues((prevValue) => ({
      ...prevValue,
      items: prevValue.items.map((item, index) => ({ ...item, price: pricesArray[index] })),
    }));
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    resetForm,
    setValues,
    handleReset,
    handleSubmit,
    setFieldValue,
  } = useFormik<ImportCalculator>({
    initialValues: IMPORT_CALCULATOR_INITIAL_VALUE,
    onSubmit: handleFormSubmit,
    validationSchema: toFormikValidationSchema(ImportCalculatorValidationSchema),
  });

  const addRow = () => {
    setValues((prevState) => ({
      ...prevState,
      items: [...prevState.items, IMPORT_CALCULATOR_NEW_ROW],
    }));
  };

  const deleteRow = (id: number) => {
    setValues((prevState) => ({
      ...prevState,
      items: prevState.items.filter((_, index) => index !== id),
    }));
  };

  const addNote = (body: string) => {
    setValues((prevState) => ({
      ...prevState,
      notes: [...prevState.notes, body],
    }));
  };

  const deleteNote = (id: number) => {
    setValues((prevState) => ({
      ...prevState,
      notes: prevState.notes.filter((_, index) => index !== id),
    }));
  };

  const resetCalculator = () => {
    resetForm({ values: IMPORT_CALCULATOR_INITIAL_VALUE });
  };

  useEffect(() => {
    if (fetchedValues) {
      setValues(fetchedValues);
    }
  }, [fetchedValues, setValues]);

  const contextValue = {
    values,
    errors,
    touched,
    handleChange,
    resetForm: resetCalculator,
    addRow,
    deleteRow,
    addNote,
    deleteNote,
    setFieldValue,
  };
  return (
    <CalculatorContext.Provider value={contextValue}>
      <form onReset={handleReset} onSubmit={handleSubmit}>
        {children}
      </form>
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => useContext(CalculatorContext);
