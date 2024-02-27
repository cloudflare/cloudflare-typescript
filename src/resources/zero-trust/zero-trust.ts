// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConnectivitySettingsAPI from 'cloudflare/resources/zero-trust/connectivity-settings';

export class ZeroTrust extends APIResource {
  connectivitySettings: ConnectivitySettingsAPI.ConnectivitySettings =
    new ConnectivitySettingsAPI.ConnectivitySettings(this._client);
}

export namespace ZeroTrust {
  export import ConnectivitySettings = ConnectivitySettingsAPI.ConnectivitySettings;
  export import ConnectivitySettingEditResponse = ConnectivitySettingsAPI.ConnectivitySettingEditResponse;
  export import ConnectivitySettingGetResponse = ConnectivitySettingsAPI.ConnectivitySettingGetResponse;
  export import ConnectivitySettingEditParams = ConnectivitySettingsAPI.ConnectivitySettingEditParams;
  export import ConnectivitySettingGetParams = ConnectivitySettingsAPI.ConnectivitySettingGetParams;
}
