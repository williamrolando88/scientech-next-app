import { Timestamp } from "firebase/firestore";
import { z } from "zod";
import {
  ImportCalculatorItemsValidationSchema,
  ImportCalculatorMetadataValidationSchema,
  ImportCalculatorSettingsValidationSchema,
  ImportCalculatorValidationSchema,
} from "../lib/parsers/importCalculator";

export type ImportCalculatorMetadata = z.infer<typeof ImportCalculatorMetadataValidationSchema>;
export type ImportCalculatorSettings = z.infer<typeof ImportCalculatorSettingsValidationSchema>;
export type ImportCalculatorItems = z.infer<typeof ImportCalculatorItemsValidationSchema>;
export type ImportCalculator = z.infer<typeof ImportCalculatorValidationSchema>;

export type FirestoreImportCalculator = ImportCalculator & {
  metadata: {
    createdAt: Timestamp;
    updatedAt: Timestamp;
  };
};

export type ArticlesHeader = {
  name: keyof ImportCalculatorItems;
  type: string;
  title: string;
  field: "input" | "span";
  startSymbol?: string;
  endSymbol?: string;
};

export type LotSchema = {
  title: string;
  values: {
    name: string;
    value: string;
    label?: string;
    endSymbol?: string;
    startSymbol?: string;
  }[];
};

export interface ItemCalculationValues extends ImportCalculatorItems {
  rowWeight: number;
  EXW: number;
  weightFraction: number;
  FOB: number;
  ISD: number;
  CIF: number;
  FODINFA: number;
  tariff: number;
  unitOriginCosts: number;
  unitTaxesFee: number;
  unitImportCost: number;
  unitLocalFleetCost: number;
  unitItemProfit: number;
}
