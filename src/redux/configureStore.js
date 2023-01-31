import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missions';

const store = configureStore({
  reducer: missionsSlice,
});

export default store;
