// src/pages/Login.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  CssBaseline,
  Avatar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from '../api/axios'; // Import Axios instance

// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be at least 8 characters long')
    .required('Password is required'),
});

const Login = () => {
  const handleLogin = async (values, { resetForm }) => {
    try {
      const response = await axios.post('/login', {
        email: values.email,
        password: values.password,
      });

      const { jwtToken, name } = response.data;

      // Save JWT token to localStorage or cookies (if needed for later use)
      localStorage.setItem('token', jwtToken);
      localStorage.setItem('name', name);

      alert('Login Successful!');
      console.log('User logged in:', response.data);

      // Redirect user to the home page or another protected route
      window.location.href = '/home';

      resetForm(); // Reset form fields
    } catch (error) {
      console.error('Login failed:', error.response?.data?.error || error.message);
      alert('Error: ' + (error.response?.data?.error || 'Login failed'));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleLogin} // Submit handler
        >
          {({ errors, touched, handleChange }) => (
            <Form>
              <Box sx={{ mt: 1 }}>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button variant="text" color="secondary" href="/signup">
                      Don't have an account? Sign up
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
