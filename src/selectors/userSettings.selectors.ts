import { RootState } from '@app/types/RootState.type';

const selectUserSettings = (state: RootState) => state.userSettings.userSettings;

const userSettingsSelectors = {
  selectUserSettings,
};

export default userSettingsSelectors;
