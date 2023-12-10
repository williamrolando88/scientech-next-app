import { ImportCalculatorProvider } from "@/hooks/useCalculatorContext";
import { Container, Stack } from "@mui/material";
import { FC } from "react";
import CalculatorControllers from "./CalculatorControllers";
import CalculatorItems from "./CalculatorItems";
import CalculatorNotes from "./CalculatorNotes";
import CalculatorSettings from "./CalculatorSettings";

const ImportCalculator: FC = () => {
  return (
    <Container maxWidth="xl">
      <ImportCalculatorProvider>
        <Stack gap={3} py={4}>
          <CalculatorControllers />
          <CalculatorItems />
          <CalculatorSettings />
          <CalculatorNotes />
        </Stack>
      </ImportCalculatorProvider>
    </Container>
  );
};

export default ImportCalculator;
