import { Button, Stack } from '@mui/material';
import { FC } from 'react';
import { useCalculatorContext } from '../../../../hooks/useCalculatorContext';
import { TableHeaderComponent } from './TableHeaderComponent';
import Iconify from '../../../../components/RootComponents/Iconify';

const CalculatorItemsTableHeader: FC = () => {
  const { addRow } = useCalculatorContext();
  return (
    <Stack direction='row' gap={1} alignItems='stretch'>
      <TableHeaderComponent>Cant</TableHeaderComponent>

      <TableHeaderComponent expand>Descripción</TableHeaderComponent>

      <TableHeaderComponent width='8rem'>Peso u.</TableHeaderComponent>

      <TableHeaderComponent width='8rem'>Costo u.</TableHeaderComponent>

      <TableHeaderComponent width='8rem'>Arancel</TableHeaderComponent>

      <TableHeaderComponent width='8rem'>Margen</TableHeaderComponent>

      <TableHeaderComponent width='8rem'>Precio u.</TableHeaderComponent>

      <Button
        sx={{ width: '4rem' }}
        color='success'
        variant='outlined'
        onClick={addRow}
      >
        <Iconify icon='pajamas:plus' />
      </Button>
    </Stack>
  );
};

export default CalculatorItemsTableHeader;
