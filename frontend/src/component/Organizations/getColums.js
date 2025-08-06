
import { getFormattedDateTime4 } from '../../helper/dateFormatter';
import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
const getColumnsOrganizations = ({setIsModalOpen,setEditData}) => [
    {
        field: 'organizationName', headerName: 'Organization Name', width: 200,
        renderCell: (params) => (
            <Box>{params.row.organizationName}</Box>
        ),
     },
    {
        field: 'email', headerName: 'Email', width: 220,
        renderCell: (params) => (
            <Box>{params.row.email}</Box>
        ),
     },
    {
        field: 'userName', headerName: 'User Name', width: 180,
        renderCell: (params) => (
            <Box>{params.row.userName}</Box>
        ),
     },
    {
        field: 'phoneNumber', headerName: 'Phone Number', width: 160,
        renderCell: (params) => (
            <Box>{params.row.phoneNumber}</Box>
        ),
    },
    {
        field: 'isBlackListUser', headerName: 'Blacklisted', width: 130,
        renderCell: (params) => (
            <Box>{params.row.isBlackListUser?"Yes":"No"}</Box>
        ),
     },
    {
        field: 'created_at',
        headerName: 'Created At',
        width: 200,
        renderCell: (params) => (
            <Box>{getFormattedDateTime4(params.row.createdAt)}</Box>
        ),
    },
    {
        field: 'updated_at',
        headerName: 'Last Updated',
        width: 200,
        renderCell: (params) => (
            <Box>{getFormattedDateTime4(params.row.updatedAt)}</Box>
        ),
    },
    {
        field: 'totalUsers', headerName: 'Total Users', width: 160,
        renderCell: (params) => (
            <Box>{params.row.totalUsers}</Box>
        ),
     },
    {
        field: 'add',
        headerName: 'Add User',
        width: 100,
        renderCell: (params) => (
            <IconButton className='bg-gray-300' onClick={() => setIsModalOpen(true)}>
                <AddIcon fontSize='small' className='text-blue-500'/>
           </IconButton>
        ),
    },
    {
        field: 'edit',
        headerName: 'Edit Organization',
        width: 150,
        renderCell: (params) => (
            <IconButton className='bg-gray-300' onClick={() => {
                setIsModalOpen(true);
                setEditData(params.row)
            }}>
                <EditIcon fontSize='small' className='text-blue-500'/>
            </IconButton>
        ),
    },
];

export {
    getColumnsOrganizations
}