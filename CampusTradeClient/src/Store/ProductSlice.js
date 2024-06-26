import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdDetailsApi } from "../apis";
import { useSelector } from "react-redux";
const initialState = {
  search: "",
  adDetails: {
    id: "",
    name: "",
    price: "",
    age: "",
    desc: "",
    subname: "",
    tags: [],
    features: [],
    img_id: [],
    date: "",
    likes: [],
    sold:false,
    buyer:"",
    views: ["0"],
    sellerMail: "",
    reportcount:0,
  },
};

export const fetchAdDetails = createAsyncThunk("Product/fetch", async (id) => {
  try {
    // console.log(id);
    let uid=sessionStorage.getItem("id")
    const loggedIn=sessionStorage.getItem("logged")
    if(loggedIn=="false"){
      uid="-"
    }
    const response = await fetchAdDetailsApi(id,uid);
    // console.log(response);
    return response.data;
  } catch (err) {
    return err.message;
  }
});
export const productSlice = createSlice({
  name: "ad",
  initialState,

  reducers: {
    setSearch:(state,action)=>{
      state.search=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdDetails.fulfilled, (state, action) => {
      state.adDetails = {
        ...action.payload,
      };
    });
    builder.addCase(fetchAdDetails.pending, (state, action) => {
      state.adDetails = initialState.adDetails;
    });
    builder.addCase(fetchAdDetails.rejected, (state, action) => {
      state.adDetails = initialState.adDetails;
    });
  },
});
export const { changeProduct ,setSearch} = productSlice.actions;
export default productSlice.reducer;
