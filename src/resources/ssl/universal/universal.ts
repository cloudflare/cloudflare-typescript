// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/ssl/universal/settings';

export class Universal extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export namespace Universal {
  export import Settings = SettingsAPI.Settings;
  export import TLSCertificatesAndHostnamesUniversal = SettingsAPI.TLSCertificatesAndHostnamesUniversal;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
