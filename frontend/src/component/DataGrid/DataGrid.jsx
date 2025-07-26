import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { rows } from './dummyData';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

export default function DataGridDemo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            display: isMobile ? 'none' : 'flex',
          },
          "& .MuiDataGrid-row": {
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            borderBottom: isMobile ? '1px solid #ccc' : 'none',
            padding: isMobile ? '10px' : '0',
          },
          "& .MuiDataGrid-cell": {
            borderBottom: isMobile ? 'none' : '1px solid #ccc',
            display: isMobile ? 'flex' : 'block',
            justifyContent: isMobile ? 'space-between' : 'unset',
            width: '100%',
            padding: isMobile ? '5px 0' : 'unset',
            "&:before": {
              content: `attr(data-field)`,
              fontWeight: 'bold',
              marginRight: '10px',
              display: isMobile ? 'block' : 'none',
            },
          },
        }}
      />
    </div>
  );
}
