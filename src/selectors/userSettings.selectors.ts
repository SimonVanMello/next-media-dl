import { RootState } from '@app/types/RootState.type';

const selectUserSettings = (state: RootState) => state.userSettingsReducer.userSettings;

const userSettingsSelectors = {
  selectUserSettings,
};

export default userSettingsSelectors;
