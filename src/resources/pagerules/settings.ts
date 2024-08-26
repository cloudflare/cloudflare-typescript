// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as SettingsAPI from './settings';

export class Settings extends APIResource {
  /**
   * Returns a list of settings (and their details) that Page Rules can apply to
   * matching requests.
   */
  list(params: SettingListParams, options?: Core.RequestOptions): Core.APIPromise<SettingListResponse> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/pagerules/settings`, options) as Core.APIPromise<{ result: SettingListResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Settings available for the zone.
 */
export type SettingListResponse = Array<unknown>

export interface SettingListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Settings {
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingListParams = SettingsAPI.SettingListParams;
}
