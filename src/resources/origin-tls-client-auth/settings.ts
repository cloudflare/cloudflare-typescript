// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/origin-tls-client-auth/settings';

export class Settings extends APIResource {
  /**
   * Get whether zone-level authenticated origin pulls is enabled or not. It is false
   * by default.
   */
  zoneLevelAuthenticatedOriginPullsGetEnablementSettingForZone(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse> {
    return (
      this._client.get(`/zones/${zoneId}/origin_tls_client_auth/settings`, options) as Core.APIPromise<{
        result: SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable or disable zone-level authenticated origin pulls. 'enabled' should be set
   * true either before/after the certificate is uploaded to see the certificate in
   * use.
   */
  zoneLevelAuthenticatedOriginPullsSetEnablementForZone(
    zoneId: string,
    body: SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse> {
    return (
      this._client.put(`/zones/${zoneId}/origin_tls_client_auth/settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse {
  /**
   * Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled?: boolean;
}

export interface SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse {
  /**
   * Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled?: boolean;
}

export interface SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams {
  /**
   * Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled: boolean;
}

export namespace Settings {
  export import SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse;
  export import SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse;
  export import SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams;
}
