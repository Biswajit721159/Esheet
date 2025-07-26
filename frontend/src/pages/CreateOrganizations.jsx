import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';

const CreateOrganization = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      organizationName,
      userName,
      phoneNumber,
      email,
    });
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 p-4">
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md space-y-6"
        sx={{
          borderRadius: '12px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Typography variant="h5" component="h1" className="text-center text-gray-800 font-inter font-bold">
          Create Organization User
        </Typography>

        <TextField
          label="Organization Name"
          variant="outlined"
          fullWidth
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          required
          className="rounded-md"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
        />

        <TextField
          label="User Name"
          variant="outlined"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          className="rounded-md"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
        />

        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="rounded-md"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-md"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          sx={{
            borderRadius: '8px',
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Create User
        </Button>
      </Box>
    </div>
  );
};

export default CreateOrganization;
