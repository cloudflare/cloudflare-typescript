// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['originTLSClientAuth', 'settings'] = Object.freeze([
    'originTLSClientAuth',
    'settings',
  ] as const);

  /**
   * Enable or disable zone-level authenticated origin pulls. 'enabled' should be set
   * true either before/after the certificate is uploaded to see the certificate in
   * use.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.originTLSClientAuth.settings.update({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     enabled: true,
   *   });
   * ```
   */
  update(params: SettingUpdateParams, options?: RequestOptions): APIPromise<SettingUpdateResponse> {
    const { zone_id = this._client.zoneID, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/origin_tls_client_auth/settings`, {
        body,
        ...options,
      }) as APIPromise<{ result: SettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get whether zone-level authenticated origin pulls is enabled or not. It is false
   * by default.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.originTLSClientAuth.settings.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    params: SettingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SettingGetResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/origin_tls_client_auth/settings`, options) as APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Settings extends BaseSettings {}

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
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param: Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled: boolean;
}

export interface SettingGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export declare namespace Settings {
  export {
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingGetParams as SettingGetParams,
  };
}
