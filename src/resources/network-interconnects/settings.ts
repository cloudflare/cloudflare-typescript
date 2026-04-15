// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Settings extends APIResource {
  /**
   * Update the current settings for the active account
   *
   * @example
   * ```ts
   * const setting =
   *   await client.networkInterconnects.settings.update({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  update(params?: SettingUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SettingUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<SettingUpdateResponse>;
  update(
    params: SettingUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingUpdateResponse> {
    if (isRequestOptions(params)) {
      return this.update({}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.put(`/accounts/${account_id}/cni/settings`, { body, ...options });
  }

  /**
   * Get the current settings for the active account
   *
   * @example
   * ```ts
   * const setting =
   *   await client.networkInterconnects.settings.get({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  get(params?: SettingGetParams, options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse>;
  get(
    params: SettingGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/cni/settings`, options);
  }
}

export interface SettingUpdateResponse {
  default_asn: number;
}

export interface SettingGetResponse {
  default_asn: number;
}

export interface SettingUpdateParams {
  /**
   * Path param: Account tag to update settings for
   */
  account_id?: string;

  /**
   * Body param
   */
  default_asn?: number | null;
}

export interface SettingGetParams {
  /**
   * Account tag to retrieve settings for
   */
  account_id?: string;
}

export declare namespace Settings {
  export {
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingGetParams as SettingGetParams,
  };
}
