import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSettingsSlice from '@app/slices/userSettings.slice';

const userSettingsPersistConfig = {
  key: 'userSettings',
  storage,
};

const userSettingsReducer = persistReducer(userSettingsPersistConfig, userSettingsSlice.reducer);

const reducers = {
  userSettingsReducer,
};

export default reducers;
