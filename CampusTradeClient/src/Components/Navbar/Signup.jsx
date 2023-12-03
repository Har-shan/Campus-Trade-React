import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material'
import { Backdrop, Button, Checkbox, Fade, FormControl, FormControlLabel, FormHelperText, InputAdornment, InputLabel, Modal, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react'
import GoogleLoginButton from './GoogleLoginButton';
import { sendOtpAPI, signUpAPI } from '../../apis';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '330px',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const Signup = ({ openModalSignup, handleCloseSignup, toLogin }) => {


  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState('');
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [name, setname] = useState('');
  const [college_name, setcollege_name] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleOTP = () => {
    sendOtpAPI(email)
  }
  const handleSignup = () => {


    const userData =
    {
      name,
      college_name,
      email,
      password, otp
    }

    signUpAPI(userData)

    // alert(`name : ${name}, email : ${email}, password : ${password}`)
    // console.log(`email : ${email} password : ${password}`);
  }

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModalSignup}
        onClose={handleCloseSignup}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalSignup}>
          <Box sx={style}>
            <Typography color='primary' sx={{ fontSize: 'xx-large', marginBottom: '20px' }} variant='h5' component='h5'>Signup</Typography>
            <TextField
              sx={{ width: '300px', margin: '10px' }}
              // error
              id="outlined-error1"
              value={name}
              onChange={(e) => setname(e.target.value)}
              label="username"
            />
            <TextField
              sx={{ width: '300px', margin: '10px' }}
              // error
              id="outlined-error2"
              value={college_name}
              onChange={(e) => setcollege_name(e.target.value)}
              label="college name"
            />
            <TextField
              sx={{ width: '300px', margin: '10px' }}
              // error
              id="outlined-error3"
              onChange={(e) => setemail(e.target.value)}
              label="email"
              value={email}
            />
            <Button sx={{ width: '200px', margin: '10px' }} variant='contained' onClick={handleOTP}>Generate OTP</Button>
            <TextField
              sx={{ width: '300px', margin: '10px' }}
              // error
              id="outlined-error4"
              onChange={(e) => setOtp(e.target.value)}
              label="OTP"
              value={otp}
            />
            <FormControl sx={{ width: '300px', margin: '10px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">new password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                onChange={(e) => setpassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                value={password}
                endAdornment={
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
                }
                label="create password"
              />
            </FormControl>
            <Button sx={{ width: '300px', margin: '10px' }} variant='contained' onClick={handleSignup}>Signup</Button>
            <Button sx={{ width: '300px', margin: '10px' }} variant='outlined' onClick={toLogin}>Already Have a account</Button>
            <GoogleLoginButton />
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export default Signup