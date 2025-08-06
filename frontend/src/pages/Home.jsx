import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { Add, Edit } from '@mui/icons-material';

const UserHomePage = () => {
  const [packs, setPacks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPack, setCurrentPack] = useState({ name: '', description: '', id: null });

  const handleOpenModal = (pack = null) => {
    if (pack) {
      setCurrentPack(pack);
      setIsEditing(true);
    } else {
      setCurrentPack({ name: '', description: '', id: null });
      setIsEditing(false);
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    setCurrentPack({ ...currentPack, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isEditing) {
      setPacks(packs.map((p) => (p.id === currentPack.id ? currentPack : p)));
    } else {
      const newPack = { ...currentPack, id: Date.now() };
      setPacks([...packs, newPack]);
    }
    handleCloseModal();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Card className="mb-6">
        <CardContent className="flex justify-between items-center">
          <Typography variant="h5">Welcome User 👋</Typography>
          <Typography variant="h6">Total Packs: {packs.length}</Typography>
        </CardContent>
      </Card>

      <div className="flex justify-end mb-4">
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpenModal()}
        >
          Add Pack
        </Button>
      </div>

      <Paper className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packs.map((pack) => (
              <TableRow key={pack.id}>
                <TableCell>{pack.name}</TableCell>
                <TableCell>{pack.description}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenModal(pack)}>
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {packs.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4">
                  No packs available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className="bg-white p-6 rounded-xl w-full max-w-md mx-auto mt-40 shadow-lg space-y-4">
          <Typography variant="h6">{isEditing ? 'Edit Pack' : 'Add Pack'}</Typography>
          <TextField
            label="Pack Name"
            name="name"
            fullWidth
            value={currentPack.name}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            multiline
            rows={3}
            value={currentPack.description}
            onChange={handleChange}
          />
          <div className="flex justify-end gap-2">
            <Button variant="outlined" onClick={handleCloseModal}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit}>
              {isEditing ? 'Update' : 'Add'}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UserHomePage;
