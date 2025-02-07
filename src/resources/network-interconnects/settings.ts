// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Update the current settings for the active account
   */
  update(params: SettingUpdateParams, options?: RequestOptions): APIPromise<SettingUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(path`/accounts/${account_id}/cni/settings`, { body, ...options });
  }

  /**
   * Get the current settings for the active account
   */
  get(params: SettingGetParams, options?: RequestOptions): APIPromise<SettingGetResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cni/settings`, options);
  }
}

export interface SettingUpdateResponse {
  default_asn?: number | null;
}

export interface SettingGetResponse {
  default_asn?: number | null;
}

export interface SettingUpdateParams {
  /**
   * Path param: Account tag to update settings for
   */
  account_id: string;

  /**
   * Body param:
   */
  default_asn?: number | null;
}

export interface SettingGetParams {
  /**
   * Account tag to retrieve settings for
   */
  account_id: string;
}

export declare namespace Settings {
  export {
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingGetParams as SettingGetParams,
  };
}
