import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Email, Lock, Person, AssignmentInd } from "@mui/icons-material";

const roles = [
  { value: 1, label: "User" },
  { value: 2, label: "Admin" },
];

const AddUserModal = ({ open, handleClose, editData, onSubmit }) => {
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    password: "",
    role: 1,
  });

  useEffect(() => {
    if (editData) {
      setForm({
        email: editData.email || "",
        fullName: editData.fullName || "",
        password: "",
        role: editData.role || 1,
      });
    } else {
      setForm({
        email: "",
        fullName: "",
        password: "",
        role: 1,
      });
    }
  }, [editData, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    }
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="absolute top-1/2 left-1/2 w-full max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md">
        <Typography variant="h6" className="text-center font-semibold mb-6">
          {editData ? "Edit User" : "Add User"}
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4 mt-5">
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required={!editData}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            select
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AssignmentInd />
                </InputAdornment>
              ),
            }}
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <div className="flex justify-end gap-3 pt-4">
            <Button onClick={handleClose} color="secondary" variant="outlined" className="shadow-none">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary"  className="shadow-none">
              {editData ? "Update" : "Add"}
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
