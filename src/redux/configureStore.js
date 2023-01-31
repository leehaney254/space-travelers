import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';

const store = configureStore({
  reducer: missionReducer,
});

export default store;
