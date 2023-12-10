export const parseSafeNumber = (value?: number | string | null): number => {
  if (!value) return 0;
  if (typeof value === "number") {
    if (isNaN(value)) {
      return 0;
    } else {
      return value;
    }
  }

  return parseFloat(value);
};
