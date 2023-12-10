import { z } from "zod";

export const ImportCalculatorMetadataValidationSchema = z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  updatedAt: z.coerce.date().optional(),
  description: z.string(),
});

export const ImportCalculatorSettingsValidationSchema = z.object({
  bankExpenses: z.number().min(0),
  fleetCostPerLibre: z.number().min(0),
  importProcedure: z.number().min(0),
  localFleet: z.number().min(0),
  originFleet: z.number().min(0),
  originTaxes: z.number().min(0),
});

export const ImportCalculatorItemsValidationSchema = z.object({
  margin: z.number().gte(0),
  name: z.string().optional(),
  quantity: z.number().gte(0),
  tariffRate: z.number().gte(0),
  unitCost: z.number().gte(0),
  unitPrice: z.number().optional(),
  unitWeight: z.number().gte(0),
});

export const ImportCalculatorValidationSchema = z.object({
  settings: ImportCalculatorSettingsValidationSchema,
  items: ImportCalculatorItemsValidationSchema.array(),
  notes: z.string().array(),
  metadata: ImportCalculatorMetadataValidationSchema,
});
