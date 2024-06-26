import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAdminDetailsApi, getAllreportAPI } from '../apis'
const initialState = {
  isAdmin: false,
  loggedIn:false,
  reportedAds:[],
  adminDetails: {
    _id: '',
    name: '',
    email: '',
    college: '-',
    soldOut: 0,
    reportedAds:0,
    activity : {
      labels: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05','2024-01-06','2024-01-07','2024-01-08','2024-01-09','2024-01-10'],
      values: [5, 8, 12, 6, 10,13,15,18,13,23],
    }
  }

}

export const fetchAdminDetails = createAsyncThunk(
  "AdminDetails/fetch", async (id) => {
    try {
      const response = await fetchAdminDetailsApi(id)
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
)
export const fetchReportedAds = createAsyncThunk(
  "reportedAds/fetch", async (college="-") => {
    try {
      const response = await getAllreportAPI(college);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
)
export const adminSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    adminLoginReducer: (state) => {
      state.loggedIn = true
      state.isAdmin = true
    },
    adminLogOutReducer: (state) => {
      state.loggedIn = false
      state.isAdmin = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdminDetails.fulfilled, (state, action) => {
      state.adminDetails={
        ...action.payload
      }
    })
    builder.addCase(fetchAdminDetails.pending, (state, action) => {
      state.adminDetails=initialState.adminDetails
    })
    builder.addCase(fetchAdminDetails.rejected, (state, action) => {
      state.adminDetails=initialState.adminDetails
    })
    builder.addCase(fetchReportedAds.fulfilled, (state, action) => {
      state.reportedAds=action.payload.reports
    })
    builder.addCase(fetchReportedAds.pending, (state, action) => {
      state.reportedAds=initialState.reportedAds
    })
    builder.addCase(fetchReportedAds.rejected, (state, action) => {
      state.reportedAds=initialState.reportedAds
    })
  }
})

// Action creators are generated for each case reducer function
export const { adminLoginReducer, adminLogOutReducer } = adminSlice.actions

export default adminSlice.reducer