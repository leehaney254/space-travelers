/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

const fetchMissions = createAsyncThunk('user/fetchUsers', () => axios.get('https://api.spacexdata.com/v3/missions')
  .then((res) => res.data.map((mission) => (
    { id: mission.mission_id, name: mission.mission_name, descrption: mission.description }
  ))));

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, id) => {
      const newState = state.missions.map((mission) => {
        if (mission.id !== id.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return { ...state, missions: newState };
    },
    leaveMission: (state, id) => {
      const newState = state.missions.map((mission) => {
        if (mission.id !== id.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return { ...state, missions: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.loading = false;
      state.missions = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.loading = false;
      state.missions = [];
      state.error = action.error.message;
    });
  },
});

export default missionsSlice.reducer;
export const { joinMission } = missionsSlice.actions;
export { fetchMissions };
