// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/waiting-rooms/settings';

export class Settings extends APIResource {
  /**
   * Patch zone-level Waiting Room settings
   */
  edit(
    zoneIdentifier: string,
    body: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingEditResponse> {
    return (
      this._client.patch(`/zones/${zoneIdentifier}/waiting_rooms/settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get zone-level Waiting Room settings
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/waiting_rooms/settings`, options) as Core.APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WaitingroomZoneSettingsResponse {
  result: WaitingroomZoneSettingsResponse.Result;
}

export namespace WaitingroomZoneSettingsResponse {
  export interface Result {
    /**
     * Whether to allow verified search engine crawlers to bypass all waiting rooms on
     * this zone. Verified search engine crawlers will not be tracked or counted by the
     * waiting room system, and will not appear in waiting room analytics.
     */
    search_engine_crawler_bypass: boolean;
  }
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

export interface SettingEditParams {
  /**
   * Whether to allow verified search engine crawlers to bypass all waiting rooms on
   * this zone. Verified search engine crawlers will not be tracked or counted by the
   * waiting room system, and will not appear in waiting room analytics.
   */
  search_engine_crawler_bypass?: boolean;
}

export namespace Settings {
  export import WaitingroomZoneSettingsResponse = SettingsAPI.WaitingroomZoneSettingsResponse;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
}
