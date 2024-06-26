import { Autocomplete, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import bg3 from "../../assets/bg3.jpg";
import theme from "../../theme";
import { fetchAllAdsApi, fetchUserDetailsApi } from "../../apis";
import { fetchUserDetails } from "../../Store/UserSlice";
import { updateprofileAPI } from "../../apis";

const UpdateProfileForm = () => {
  const dispatch = useDispatch()

  const user=useSelector(state=>state.user.userDetails)
  const navigate = useNavigate()
  
    const loggedIn=useSelector(state=>state.user.loggedIn)
    useEffect(()=>{
      if(!loggedIn){navigate('/home')}
    },[])

  const [name, setName] = useState("");
  const [collegeName, setCollegeName] = useState(user.college_name);
  const [year, setYear] = useState(user.year);
  const [branch, setBranch] = useState(user.branch);
  console.log(user)
  useEffect(()=>{
    setName(user.name)

    setCollegeName(user.college_name)
   
    setYear(user.year || "" )
    setBranch(user.branch || "")
  },[])
  const handleSubmit = async(event) => {
    event.preventDefault();
    const id = user._id
    const data = {
      id,
      name,
      collegeName,
      year,branch
    }

    await updateprofileAPI(data);
    dispatch(fetchUserDetails(user._id))
    navigate("/user")

    // Perform basic form validation
    // if (name !== "" && collegeName !== "" && year !== "" && branch !== "") {
    //   console.log("Profile updated successfully!");
    //   // Add logic to update the user's profile with the provided information
    // } else {
    //   alert("Please provide relevant information!");
    // }
  };


  // Array of colleges
  const colleges = [
    {
      label: 'MIT',
      cid: 0,
    },
    {
      label: 'IIT Madras',
      cid: 1,
    },
    {
      label: 'NIT Rourkela',
      cid: 2,
    },
    {
      label: 'IIIT Sri City',
      cid: 3,
    },
    {
      label: 'IIT Kharagpur',
      cid: 4,
    },
    {
      label: 'NIT Suratkal',
      cid: 5,
    },
    {
      label: 'IIIT Hyderabad',
      cid: 6,
    },
    {
      label: 'IIT Patna',
      cid: 7,
    },
    {
      label: 'NIT Bhopal',
      cid: 8,
    },
    {
      label: 'IIIT Trichy',
      cid: 9,
    },
    {
      label: 'IIT Roorkee',
      cid: 10,
    },
    {
      label: 'NIT Trichy',
      cid: 11,
    },
  ];

  return (
    <>
      
      <img
        style={{
          width: "100%",
          position: "absolute",
          zIndex: -1,
          backgroundRepeat: "repeat-y",
        }}
        src={bg3}
      />

      
        <Container
          sx={{
            flex: 1,
            width:'700px',
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            opacity: 0.95,
            paddingTop: 3,
            borderRadius: 5,
            marginBottom: "60px",
            marginTop:"40px",
          }}
        >
          <Typography variant="h4" textAlign="center" fontFamily={"cursive"}>
            Edit Profile
          </Typography>

          <TextField
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            label="Name *"
            placeholder="new name"
            variant="outlined"
          />

         
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              ivalue={collegeName}
              // getOptionLabel={(option) => setCollegeName(option.label)}
              onSelect={(option) => {
              setCollegeName(option.target.value);
              }}
            
              // onInputChange={(e) => {
              //   console.log("Selected value:", e);
              //   setCollegeName(e.target.value)}}
                // getOptionLabel={(option) => option.name}
                
              options={colleges}
              renderInput={(params) => <TextField {...params} label="College Name" />}
            />
          <TextField
            id="year"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            label="Year *"
            placeholder="Your academic year"
            variant="outlined"
          />
          <TextField
            id="branch"
            onChange={(e) => setBranch(e.target.value)}
            value={branch}
            label="Branch *"
            placeholder="Your branch of study"
            variant="outlined"
          />
           <Button variant="contained" onClick={handleSubmit} 
        sx={{
              marginBottom:"20px",
              display: "flex", 
              alignSelf:'center',
              height: "40px",
              transition: "background-color 0.3s ease",
              backgroundColor: theme.palette.secondary.main,
              color: "#fff",              
              border: "none",
              borderRadius: "5px",
              width:"150px",
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,}}}>
          Save changes
        </Button>
        </Container>

       
    </>
  );
};

export default UpdateProfileForm;
