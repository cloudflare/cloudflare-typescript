// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as SettingsAPI from './settings';

export class Settings extends APIResource {
  /**
   * Update zone-level Waiting Room settings
   */
  update(params: SettingUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SettingUpdateResponse> {
    const { zone_id, ...body } = params;
    return (this._client.put(`/zones/${zone_id}/waiting_rooms/settings`, { body, ...options }) as Core.APIPromise<{ result: SettingUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch zone-level Waiting Room settings
   */
  edit(params: SettingEditParams, options?: Core.RequestOptions): Core.APIPromise<SettingEditResponse> {
    const { zone_id, ...body } = params;
    return (this._client.patch(`/zones/${zone_id}/waiting_rooms/settings`, { body, ...options }) as Core.APIPromise<{ result: SettingEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get zone-level Waiting Room settings
   */
  get(params: SettingGetParams, options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/waiting_rooms/settings`, options) as Core.APIPromise<{ result: SettingGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface Setting {
  /**
   * Whether to allow verified search engine crawlers to bypass all waiting rooms on
   * this zone. Verified search engine crawlers will not be tracked or counted by the
   * waiting room system, and will not appear in waiting room analytics.
   */
  search_engine_crawler_bypass: boolean;
}

export interface SettingUpdateResponse {
  /**
   * Whether to allow verified search engine crawlers to bypass all waiting rooms on
   * this zone. Verified search engine crawlers will not be tracked or counted by the
   * waiting room system, and will not appear in waiting room analytics.
   */
  search_engine_crawler_bypass: boolean;
}

export interface SettingEditResponse {
  /**
   * Whether to allow verified search engine crawlers to bypass all waiting rooms on
   * this zone. Verified search engine crawlers will not be tracked or counted by the
   * waiting room system, and will not appear in waiting room analytics.
   */
  search_engine_crawler_bypass: boolean;
}

export interface SettingGetResponse {
  /**
   * Whether to allow verified search engine crawlers to bypass all waiting rooms on
   * this zone. Verified search engine crawlers will not be tracked or counted by the
   * waiting room system, and will not appear in waiting room analytics.
   */
  search_engine_crawler_bypass: boolean;
}

export interface SettingUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether to allow verified search engine crawlers to bypass all
   * waiting rooms on this zone. Verified search engine crawlers will not be tracked
   * or counted by the waiting room system, and will not appear in waiting room
   * analytics.
   */
  search_engine_crawler_bypass?: boolean;
}

export interface SettingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether to allow verified search engine crawlers to bypass all
   * waiting rooms on this zone. Verified search engine crawlers will not be tracked
   * or counted by the waiting room system, and will not appear in waiting room
   * analytics.
   */
  search_engine_crawler_bypass?: boolean;
}

export interface SettingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Settings {
  export import Setting = SettingsAPI.Setting;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
