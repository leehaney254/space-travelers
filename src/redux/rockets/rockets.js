import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';
const ADD_DATA = 'space-travelers/rockets/ADD_DATA';
const rockets = [];

const rocketsAction = createAsyncThunk(ADD_DATA, async () => {
  const response = await axios.get(URL);
  if (response.data) {
    return response.data;
  }
  return [];
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: rockets,
  reducers: {
    reserveRocket(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    },
    unreserveRocket(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(rocketsAction.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((key) => {
        newState.push({
          id: key[1].id,
          name: key[1].rocket_name,
          description: key[1].description,
          flickr_images: key[1].flickr_images[0],
          reserved: false,
        });
      });
      return newState;
    });
  },
});

export default rocketSlice.reducer;
export const { reserveRocket, unreserveRocket } = rocketSlice.actions;
export { rocketsAction };
