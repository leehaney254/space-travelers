import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';
import rocketSlice from './rockets/rockets';

const reducer = combineReducers({
  mission: missionReducer,
  rockets: rocketSlice,
});

const store = configureStore({
  reducer,
});

export default store;
