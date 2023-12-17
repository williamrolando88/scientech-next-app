"use server";

import ImportCalculatorStorage from "@/services/server/importCalculator";
import { reassembleImportCalculatorData } from "../modules/calculator";

export const storeImportCalculation = async (_: string, formData: FormData) => {
  const response = reassembleImportCalculatorData(formData);

  if (response) {
    try {
      if (response.metadata.id) {
        const writeTime = await ImportCalculatorStorage.update(response.metadata.id, response);
        return `Calculation updated successfully at ${writeTime}`;
      } else {
        const id = await ImportCalculatorStorage.create(response);
        return `Calculation created successfully with id ${id}`;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return "Error creating calculation";
};
