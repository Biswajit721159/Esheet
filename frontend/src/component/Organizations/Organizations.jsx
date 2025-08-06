import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getOrgs } from '../../apis/organizations';
import { getColumnsOrganizations } from './getColums';
import AddUserModal from './AddUser';

export default function Organizations() {
    const [orgs, setOrgs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    const loadOrganizations = async () => {
        try {
            setLoading(true);
            const data = await getOrgs();
            setOrgs(data);
        } catch (error) {
            console.error('Failed to fetch organizations:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadOrganizations();
    }, []);

    const columns = getColumnsOrganizations({
        setIsModalOpen,
        setEditData,
    });

    return (
        <Box className="flex h-[95vh] items-center justify-center bg-gray-100 shadow-none">
           <DataGrid
                className="p-5 shadow-none bg-white"
                rows={orgs}
                columns={columns}
                getRowId={(row) => row._id}
                loading={loading}
                pageSizeOptions={[50]}
                checkboxSelection
                disableRowSelectionOnClick
            />
            {
                isModalOpen &&<AddUserModal open={isModalOpen} handleClose={() => setIsModalOpen(false)} editData={editData} onSubmit={()=>null}/>
            }
        </Box>
    );
}
