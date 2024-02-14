// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConnectivitySettingsAPI from 'cloudflare/resources/zerotrust/connectivity-settings';

export class Zerotrust extends APIResource {
  connectivitySettings: ConnectivitySettingsAPI.ConnectivitySettings =
    new ConnectivitySettingsAPI.ConnectivitySettings(this._client);
}

export namespace Zerotrust {
  export import ConnectivitySettings = ConnectivitySettingsAPI.ConnectivitySettings;
  export import ConnectivitySettingRetrieveResponse = ConnectivitySettingsAPI.ConnectivitySettingRetrieveResponse;
  export import ConnectivitySettingUpdateResponse = ConnectivitySettingsAPI.ConnectivitySettingUpdateResponse;
  export import ConnectivitySettingUpdateParams = ConnectivitySettingsAPI.ConnectivitySettingUpdateParams;
}
