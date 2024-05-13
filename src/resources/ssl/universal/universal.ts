// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SettingsAPI from './settings';

export class Universal extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export namespace Universal {
  export import Settings = SettingsAPI.Settings;
  export import UniversalSSLSettings = SettingsAPI.UniversalSSLSettings;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
