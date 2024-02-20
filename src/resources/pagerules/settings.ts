// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/pagerules/settings';

export class Settings extends APIResource {
  /**
   * Returns a list of settings (and their details) that Page Rules can apply to
   * matching requests.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<SettingListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/pagerules/settings`, options) as Core.APIPromise<{
        result: SettingListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Settings available for the zone.
 */
export type SettingListResponse = Array<unknown>;

export namespace Settings {
  export import SettingListResponse = SettingsAPI.SettingListResponse;
}
