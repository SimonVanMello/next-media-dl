import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import MediaQuality from '@app/enums/mediaQuality.enum';
import Format from '@app/enums/format.enum';
import UserSettings from '@app/models/UserSettings.model';

interface UserSettingsState {
  userSettings: UserSettings;
}

const initialState: UserSettingsState = {
  userSettings: {
    format: Format.MP3,
    mp3: {
      preferedQuality: MediaQuality.HIGHEST,
    },
    mp4: {
      preferedQuality: MediaQuality.HIGHEST,
    },
  },
};

interface UpdatePreferedQuality {
  format: Format;
  preferedQuality: MediaQuality;
}

interface UpdateFormat {
  format: Format;
}

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    updatePreferedQuality: (state, { payload }: PayloadAction<UpdatePreferedQuality>) => {
      state.userSettings[payload.format].preferedQuality = payload.preferedQuality;
    },
    updateFormat: (state, { payload }: PayloadAction<UpdateFormat>) => {
      state.userSettings.format = payload.format;
    },
  },
});

export const userSettingsActions = { ...userSettingsSlice.actions };

export default userSettingsSlice;
