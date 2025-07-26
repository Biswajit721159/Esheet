import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getOrgs } from '../../apis/organizations';

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
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
        width: 150,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 11, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Organizations() {
    const [loading, setLoading] = useState(false);
    const loadOrganizations = async () => {
        try {
            setLoading(true);
            let data = await getOrgs();
            console.log(data);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        loadOrganizations();
    }, []);
    return (
        <Box className="flex h-[90vh] items-center justify-center bg-gray-100 shadow-none">
            <DataGrid
                className='p-5 shadow-none'
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 50,
                        },
                    },
                }}
                pageSizeOptions={[50]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
