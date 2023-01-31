import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missions';

const store = configureStore({
  reducer: {
    missionSlice,
  },
});

export default store;
