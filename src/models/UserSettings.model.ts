import Format from '@app/enums/format.enum';
import MediaQuality from '@app/enums/mediaQuality.enum';

export interface BaseSettings {
  preferedQuality: MediaQuality;
}

interface UserSettings {
  format: Format;
  mp3: BaseSettings,
  mp4: BaseSettings,
}

export default UserSettings;
