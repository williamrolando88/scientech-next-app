import { FC } from 'react';
import { TableHeadCustom } from '../../../../components/RootComponents/table';

export const OpenCalculationTableHeader: FC = () => {
  const TABLE_HEAD = [
    { id: 'description', label: 'Descripción', align: 'left', width: 280 },
    { id: 'createdAt', label: 'Fecha de Creación', align: 'left' },
    { id: '', width: 80 },
  ];

  return <TableHeadCustom headLabel={TABLE_HEAD} />;
};
