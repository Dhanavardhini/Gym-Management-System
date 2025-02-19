import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {  useNavigate } from 'react-router-dom';
import { Button, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup,  TextField } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Box, Typography, } from "@mui/material";
import DashboardStyles from './DashboardStyles';
import camera from '../../assets/camera-viewfinder.png';
import Dashboard1 from './GymMainDashboard';


export default function Resgisterpage() {
  const [gender, setGender] = React.useState("");

  const handleBackClick = () => {
    navigate("/dashboard"); 
  };
  const [image, setImage] = React.useState(null);
  const [isCameraOpen, setIsCameraOpen] = React.useState(false);
  const [isImageUploaded, setIsImageUploaded] = React.useState(false);
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  // const handleBackClick = () => {
  //   navigate("/dashboard");
  // };
  const startCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      const imageData = canvasRef.current.toDataURL("image/png");
      setImage(imageData);
      stopCamera();
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setIsCameraOpen(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setIsImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    city: "",
    joiningDate: "",
    duration: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Store the form data in localStorage
    localStorage.setItem("registerData", JSON.stringify(formData));

    // Navigate to the dashboard
    navigate("/dashboard");
  };

  return (
    <DashboardStyles>

    <Box className="Box-1">
      <Dashboard1/>
{/* ----------------- */}

    <Box
      sx={{
        mt: 10,ml: 2, mr: 2, mb:2,
      }} className="Register-1"
    >
      
      <IconButton onClick={handleBackClick} className='Register-4'
      >
        <ArrowBackRoundedIcon /> Back
      </IconButton>

      <Grid container spacing={3} className='Register-5'>
      {/* Left Column - Form */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h5"
          className='Register-3'
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '2rem' },
            textAlign: { xs: 'left', md: 'center' },
            flex: 1,
            mb: 2,
            mt: 0,
          }}
        >
          <u>Re</u>gistration Form
        </Typography>

        <Box className="Register-6">
          <form onSubmit={handleFormSubmit}>
            <TextField fullWidth margin="normal" label="Name" name="name" onChange={handleChange} className="inputField" />
            <TextField fullWidth margin="normal" label="Age" name="age" type="number" onChange={handleChange} className="inputField" />
            <TextField
              select
              fullWidth
              margin="normal"
              label="Gender"
              name="gender"
          className="inputField"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
            handleChange(e);
          }}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <TextField fullWidth margin="normal" label="Joining Date" name="joiningDate" onChange={handleChange} type="text" className="inputField" />
            <TextField fullWidth margin="normal" label="City" name="city" onChange={handleChange} type="text" className="inputField" />
            <TextField fullWidth margin="normal" label="Contact Number" name="phone" onChange={handleChange} type="text" className="inputField" />

            <TextField select fullWidth margin="normal" label="Membership Duration" name="duration" onChange={handleChange} className="inputField">
              <MenuItem value="12-Months">12 Months</MenuItem>
              <MenuItem value="6-Months">6 Months</MenuItem>
              <MenuItem value="3-Months">3 Months</MenuItem>
              <MenuItem value="1-Months">1 Month</MenuItem>
            </TextField>
          
            <FormControl component="fieldset" margin="normal" required>
              <RadioGroup row name="type" onChange={handleChange}>
                <FormControlLabel
                  value="Trainer"
                  control={<Radio sx={{ color: "#E4003A", '&.Mui-checked': { color: "#E4003A" } }} />}
                  label="Trainer"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="Personal Trainer"
                  control={<Radio sx={{ color: "#E4003A", '&.Mui-checked': { color: "#E4003A" } }} />}
                  label="Personal Trainer"
                  sx={{ color: 'white' }}
                />
              </RadioGroup>
            </FormControl>

            <TextField select fullWidth margin="normal" label="Payment Mode" name="PaymentMode" className="inputField">
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Online">Online</MenuItem>
            </TextField>

            <TextField fullWidth margin="normal" label="Fees Amount" name="Fees-Amount" type="text" className="inputField" sx={{ mb: 3 }} />

            <Box className="Register-7">
              <Button type="submit" sx={{ color: "white" }}>
                Upload
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>

      {/* Right Column - Take Photo */}
      <Grid item xs={12} md={6} className="Register-8">
              <Box mb={2} className="Register-9">
                {image ? (
                  <img src={image} alt="Captured" className="Register-12" />
                ) : isCameraOpen ? (
                  <video ref={videoRef} autoPlay playsInline className="Register-12"></video>
                ) : (
                  <img src={camera} alt="" />
                )}
              </Box>

              <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

              {!isCameraOpen ? (
                <Button
                  variant="contained"
                  className="Register-11"
                  sx={{ padding: "3px 40px 3px 40px" }}
                  onClick={startCamera}
                >
                  Take Photo
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="Register-11"
                  sx={{ padding: "3px 40px 3px 40px" }}
                  onClick={capturePhoto}
                >
                  Capture Photo
                </Button>
              )}
            </Grid>
    </Grid>

    </Box>

{/* ----- */}
    </Box>

    </DashboardStyles>
  );
}