import { Card, Table, TableBody, TableContainer } from '@mui/material';
import useDidMount from 'beautiful-react-hooks/useDidMount';
import { FC } from 'react';
import {
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
  columnSorter,
  emptyRows,
  getComparator,
  useTable,
} from '../../../../components/RootComponents/table';
import { OpenCalculationTableHead } from '../../../../formik/calculator';
import {
  CalculationTypeEnum,
  useCalculationIndexQuery,
} from '../../../../graphql/callers';
import { OpenCalculationTableRow } from './OpenCalculationTableRow';

interface Props {
  onClose: VoidFunction;
}

export const OpenCalculationTable: FC<Props> = ({ onClose }) => {
  const { data, refetch } = useCalculationIndexQuery({
    variables: { typeOf: CalculationTypeEnum.International },
    pollInterval: 2000,
  });

  useDidMount(() => {
    refetch();
  });

  const tableData = data?.calculation?.index ?? [];
  const {
    page,
    dense,
    order,
    orderBy,
    rowsPerPage,
    onSort,
    onChangePage,
    onChangeDense,
  } = useTable({ defaultDense: true });

  const dataFiltered = columnSorter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
  });

  const denseHeight = dense ? 43 : 63;

  return (
    <Card>
      <TableContainer>
        <Table size={dense ? 'small' : 'medium'}>
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            headLabel={OpenCalculationTableHead}
            onSort={onSort}
          />

          <TableBody>
            {dataFiltered
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <OpenCalculationTableRow
                  key={row.id}
                  row={row}
                  onClose={onClose}
                  onDelete={refetch}
                />
              ))}

            <TableEmptyRows
              height={denseHeight}
              emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
            />
            <TableNoData isNotFound={!dataFiltered.length} />
          </TableBody>
        </Table>
      </TableContainer>

      <TablePaginationCustom
        page={page}
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        onPageChange={onChangePage}
        dense={dense}
        onChangeDense={onChangeDense}
      />
    </Card>
  );
};
