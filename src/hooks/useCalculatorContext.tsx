"use client";
import { storeImportCalculation } from "@/lib/actions/importCalculator";
import {
  IMPORT_CALCULATOR_INITIAL_VALUE,
  IMPORT_CALCULATOR_NEW_ROW,
} from "@/lib/constants/importCalculator";
import { calculateImportation, getImportReport } from "@/lib/modules/calculator";
import { ImportCalculatorValidationSchema } from "@/lib/parsers/importCalculator";
import { ImportCalculator } from "@/types/importCalculator";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { useSnackbar } from "notistack";
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useFormState } from "react-dom";
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
  calculate: VoidFunction;
  reportValues: ApexAxisChartSeries;
  totalCost: number;
}

const CalculatorContext = createContext<Context>({} as Context);

interface Props {
  fetchedValues?: ImportCalculator;
  children: ReactNode;
}

export const ImportCalculatorProvider: FC<Props> = ({ children, fetchedValues }) => {
  const [message, storeData] = useFormState(storeImportCalculation, "");
  const { enqueueSnackbar } = useSnackbar();
  const [reportValues, setReportValues] = useState<ApexAxisChartSeries>([]);
  const [totalCost, setTotalCost] = useState(0);

  const { values, errors, touched, handleChange, resetForm, setValues, setFieldValue } =
    useFormik<ImportCalculator>({
      initialValues: IMPORT_CALCULATOR_INITIAL_VALUE,
      onSubmit: () => {},
      validationSchema: toFormikValidationSchema(ImportCalculatorValidationSchema),
    });

  const addRow = useCallback(() => {
    setValues((prevState) => ({
      ...prevState,
      items: [...prevState.items, IMPORT_CALCULATOR_NEW_ROW],
    }));
  }, [setValues]);

  const deleteRow = useCallback(
    (id: number) => {
      setValues((prevState) => ({
        ...prevState,
        items: prevState.items.filter((_, index) => index !== id),
      }));
    },
    [setValues]
  );

  const addNote = useCallback(
    (body: string) => {
      setValues((prevState) => ({
        ...prevState,
        notes: [...prevState.notes, body],
      }));
    },
    [setValues]
  );

  const deleteNote = useCallback(
    (id: number) => {
      setValues((prevState) => ({
        ...prevState,
        notes: prevState.notes.filter((_, index) => index !== id),
      }));
    },
    [setValues]
  );

  const calculate = useCallback(() => {
    const { pricesArray, articlesReport } = calculateImportation(values);

    setTotalCost(articlesReport.reduce((acc, item) => acc + item.FOB, 0));
    setReportValues(getImportReport(articlesReport));

    setValues((prevValue) => ({
      ...prevValue,
      items: prevValue.items.map((item, index) => ({ ...item, unitPrice: pricesArray[index] })),
    }));
  }, [setValues, values]);

  const resetCalculator = useCallback(() => {
    resetForm({ values: IMPORT_CALCULATOR_INITIAL_VALUE });
  }, [resetForm]);

  useEffect(() => {
    if (fetchedValues) {
      setValues(fetchedValues);
    }
  }, [fetchedValues, setValues]);

  useEffect(() => {
    if (message && message.includes("Error")) {
      enqueueSnackbar(message, { variant: "error" });
    } else {
      enqueueSnackbar(message);
    }
  }, [message, enqueueSnackbar]);

  const contextValue: Context = useMemo(
    () => ({
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
      calculate,
      reportValues,
      totalCost,
    }),
    [
      addNote,
      addRow,
      calculate,
      deleteNote,
      deleteRow,
      errors,
      handleChange,
      resetCalculator,
      setFieldValue,
      touched,
      values,
      reportValues,
      totalCost,
    ]
  );
  return (
    <CalculatorContext.Provider value={contextValue}>
      <form action={storeData}>{children}</form>
    </CalculatorContext.Provider>
  );
};

export const useImportCalculatorContext = () => useContext(CalculatorContext);
