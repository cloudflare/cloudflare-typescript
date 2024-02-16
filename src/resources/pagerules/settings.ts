// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/pagerules/settings';

export class Settings extends APIResource {
  /**
   * Returns a list of settings (and their details) that Page Rules can apply to
   * matching requests.
   */
  availablePageRulesSettingsListAvailablePageRulesSettings(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse> {
    return (
      this._client.get(`/zones/${zoneId}/pagerules/settings`, options) as Core.APIPromise<{
        result: SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Settings available for the zone.
 */
export type SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse = Array<unknown>;

export namespace Settings {
  export import SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse = SettingsAPI.SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse;
}
