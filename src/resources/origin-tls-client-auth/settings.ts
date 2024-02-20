// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/origin-tls-client-auth/settings';

export class Settings extends APIResource {
  /**
   * Get whether zone-level authenticated origin pulls is enabled or not. It is false
   * by default.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/origin_tls_client_auth/settings`, options) as Core.APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable or disable zone-level authenticated origin pulls. 'enabled' should be set
   * true either before/after the certificate is uploaded to see the certificate in
   * use.
   */
  replace(
    zoneId: string,
    body: SettingReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneId}/origin_tls_client_auth/settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SettingReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingGetResponse {
  /**
   * Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled?: boolean;
}

export interface SettingReplaceResponse {
  /**
   * Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled?: boolean;
}

export interface SettingReplaceParams {
  /**
   * Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled: boolean;
}

export namespace Settings {
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingReplaceResponse = SettingsAPI.SettingReplaceResponse;
  export import SettingReplaceParams = SettingsAPI.SettingReplaceParams;
}
