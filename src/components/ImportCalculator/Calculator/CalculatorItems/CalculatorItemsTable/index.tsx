import { Stack } from '@mui/material';
import { FC } from 'react';
import { useCalculatorContext } from '../../../../hooks/useCalculatorContext';
import CalculatorItemsRow from './CalculatorItemsRow';
import CalculatorItemsTableHeader from './CalculatorItemsTableHeader';
import Scrollbar from '../../../../components/RootComponents/scrollbar/Scrollbar';

const CalculatorItemsTable: FC = () => {
  const { values, deleteRow } = useCalculatorContext();

  return (
    <Stack gap={1}>
      <CalculatorItemsTableHeader />

      <Scrollbar sx={{ maxHeight: '200px' }}>
        <Stack gap={1}>
          {values.items.map((_, index) => (
            <CalculatorItemsRow
              key={index}
              onDelete={() => deleteRow(index)}
              index={index}
            />
          ))}
        </Stack>
      </Scrollbar>
    </Stack>
  );
};

export default CalculatorItemsTable;
