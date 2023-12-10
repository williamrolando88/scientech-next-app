import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { FC } from "react";
import Iconify from "../../../../components/RootComponents/Iconify";
import { QuotedItem } from "../../../../graphql/callers";
import { useCalculatorContext } from "../../../../hooks/useCalculatorContext";
import { AutoCalculateInput } from "../../../../shared/AutoCalculateInput";

interface Props extends Partial<QuotedItem> {
  index: number;
  onDelete: VoidFunction;
}

const CalculatorItemsRow: FC<Props> = ({ index, onDelete }) => {
  const { values, errors, touched, handleChange, setFieldValue } = useCalculatorContext();

  const getError = (fieldName: keyof Partial<QuotedItem>) => {
    if (
      !errors.items?.length ||
      !touched.items?.length ||
      !touched.items[index] ||
      !errors.items[index]
    )
      return false;

    // @ts-expect-error - QuotedItem is a superset of the errors keys
    return touched.items[index][fieldName] && !!errors.items[index][fieldName];
  };

  return (
    <Stack gap={1} direction="row">
      <AutoCalculateInput
        sx={{ width: "4rem" }}
        variant="outlined"
        size="small"
        onChange={setFieldValue}
        onFocus={(e) => e.target.select()}
        inputProps={{ min: 0, step: 0.01 }}
        value={values.items[index].quantity}
        name={`items[${index}].quantity`}
        error={getError("quantity")}
      />

      <TextField
        sx={{ flexGrow: 1 }}
        variant="outlined"
        size="small"
        type="text"
        onChange={handleChange}
        onFocus={(e) => e.target.select()}
        value={values.items[index].name}
        name={`items[${index}].name`}
        error={getError("name")}
      />

      <AutoCalculateInput
        sx={{ width: "8rem" }}
        variant="outlined"
        size="small"
        onChange={setFieldValue}
        onFocus={(e) => e.target.select()}
        value={values.items[index].unitWeight}
        name={`items[${index}].unitWeight`}
        error={getError("unitWeight")}
        InputProps={{
          endAdornment: <InputAdornment position="end">lb</InputAdornment>,
        }}
      />

      <AutoCalculateInput
        sx={{ width: "8rem" }}
        variant="outlined"
        size="small"
        onChange={setFieldValue}
        onFocus={(e) => e.target.select()}
        inputProps={{ min: 0, step: 0.01 }}
        value={values.items[index].unitCost}
        name={`items[${index}].unitCost`}
        error={getError("unitCost")}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />

      <AutoCalculateInput
        sx={{ width: "8rem" }}
        variant="outlined"
        size="small"
        onChange={setFieldValue}
        onFocus={(e) => e.target.select()}
        inputProps={{ min: 0, step: 0.01 }}
        value={values.items[index].tariff}
        name={`items[${index}].tariff`}
        error={getError("tariff")}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />

      <AutoCalculateInput
        sx={{ width: "8rem" }}
        variant="outlined"
        size="small"
        onChange={setFieldValue}
        onFocus={(e) => e.target.select()}
        inputProps={{ min: 0, step: 0.01 }}
        value={values.items[index].margin}
        name={`items[${index}].margin`}
        error={getError("margin")}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />

      <TextField
        sx={{ width: "8rem" }}
        variant="outlined"
        size="small"
        type="number"
        value={values.items[index].unitPrice}
        name={`items[${index}].unitPrice`}
        disabled
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />

      <Button sx={{ width: "4rem" }} color="error" variant="outlined" onClick={onDelete}>
        <Iconify icon="pajamas:remove" />
      </Button>
    </Stack>
  );
};

export default CalculatorItemsRow;
