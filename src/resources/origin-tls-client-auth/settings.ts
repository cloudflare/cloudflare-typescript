// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SettingsAPI from './settings';

export class Settings extends APIResource {
  /**
   * Enable or disable zone-level authenticated origin pulls. 'enabled' should be set
   * true either before/after the certificate is uploaded to see the certificate in
   * use.
   */
  update(params: SettingUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SettingUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/origin_tls_client_auth/settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get whether zone-level authenticated origin pulls is enabled or not. It is false
   * by default.
   */
  get(params: SettingGetParams, options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/origin_tls_client_auth/settings`, options) as Core.APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingUpdateResponse {
  /**
   * Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled?: boolean;
}

export interface SettingGetResponse {
  /**
   * Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled?: boolean;
}

export interface SettingUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled: boolean;
}

export interface SettingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Settings {
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
