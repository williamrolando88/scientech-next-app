import numeral from "numeral";

export const parseSafeNumber = (value?: unknown): number => {
  const parsedValue = parseFloat(value as string);

  // Check if the parsed value is NaN or if the input is null/undefined
  if (isNaN(parsedValue) || value === null || value === undefined) {
    return 0;
  }

  return parsedValue;
};

type InputValue = string | number | null;

export function fNumber(number: InputValue) {
  return numeral(number).format();
}

export function fCurrency(number: InputValue) {
  const format = number ? numeral(number).format("$0,0.00") : "";

  return result(format, ".00");
}

export function fPercent(number: InputValue) {
  const format = number ? numeral(Number(number) / 100).format("0.0%") : "";

  return result(format, ".0");
}

export function fShortenNumber(number: InputValue) {
  const format = number ? numeral(number).format("0.00a") : "";

  return result(format, ".00");
}

export function fData(number: InputValue) {
  const format = number ? numeral(number).format("0.0 b") : "";

  return result(format, ".0");
}

function result(format: string, key = ".00") {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, "") : format;
}
