import { combineReducers } from '@reduxjs/toolkit';

import userSettingsSlice from '@app/slices/userSettings.slice';

const reducers = combineReducers({
  userSettings: userSettingsSlice.reducer,
});

export default reducers;
