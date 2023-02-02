import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

const fetchMissions = createAsyncThunk('user/fetchUsers', () => fetch('https://api.spacexdata.com/v3/missions')
  .then((res) => res.json())
  .then((data) => data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    descrption: mission.description,
    reserved: false,
  }))));

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
    builder.addCase(fetchMissions.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(fetchMissions.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        missions: action.payload,
        error: '',
      }
    ));
    builder.addCase(fetchMissions.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        missions: [],
        error: action.error.message,
      }
    ));
  },
});

export default missionsSlice.reducer;
export const { joinMission, leaveMission, joinedMissions } = missionsSlice.actions;
export { fetchMissions };
