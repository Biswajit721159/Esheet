import { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginUsers } from '../apis/auth';
import { toast } from 'react-toastify';
import FullPageLoader from '../Loader/FullPageLoader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      let data = await loginUsers({ email, password });
      toast.success('Login successful');
    } catch (e) {
      toast.error(e?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
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
          Login
        </Typography>

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

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="rounded-md"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
          Login
        </Button>
        <FullPageLoader open={loading} />
      </Box>
    </div>
  );
};

export default Login;
