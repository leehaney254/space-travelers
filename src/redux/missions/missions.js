import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

const fetchMissions = createAsyncThunk('mission/fetchMissions', () => (
  axios.get('https://api.spacexdata.com/v3/missions')
    .then((res) => res.data)
));

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => (
      { ...state, loading: true }
    ));
    builder.addCase(fetchMissions.fulfilled, (state, action) => (
      {
        ...state, isLoading: false, missions: action.payload, error: '',
      }
    ));
    builder.addCase(fetchMissions.rejected, (state, action) => (
      {
        ...state, isLoading: false, missions: [], error: action.error.message,
      }
    ));
  },
});

export default missionSlice;
export { fetchMissions };
