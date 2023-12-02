import { Password } from "@mui/icons-material";
import axios from "axios";
const url='http://localhost:3000/api/'
const API=axios.create({baseURL:url});

export const fetchUserDetailsApi=(id)=> API.post('/user',{userId:id})
export const checkLoginAPI=(admin,email,password)=>API.post('/user/login',{admin,email,password})
export const sendOtpAPI=(email)=>API.post('/send-otp',{email})
export const signUpAPI=(userData)=>API.post('/user/register',userData)