"use server";

import { reassembleImportCalculatorData } from "../modules/calculator";

export const storeImportCalculation = (formData: FormData) => {
  const response = reassembleImportCalculatorData(formData);

  

  // eslint-disable-next-line no-console
  console.log(response);
};
