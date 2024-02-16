// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZeroRttAPI from 'cloudflare/resources/settings/zero-rtt';

export class ZeroRtt extends APIResource {
  /**
   * Gets 0-RTT session resumption setting.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<ZeroRttGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/0rtt`, options) as Core.APIPromise<{
        result: ZeroRttGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Changes the 0-RTT session resumption setting.
   */
  zoneSettingsChange0RttSessionResumptionSetting(
    zoneId: string,
    body: ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/0rtt`, { body, ...options }) as Core.APIPromise<{
        result: ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * 0-RTT session resumption enabled for this zone.
 */
export interface ZeroRttGetResponse {
  /**
   * ID of the zone setting.
   */
  id: '0rtt';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

/**
 * 0-RTT session resumption enabled for this zone.
 */
export interface ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse {
  /**
   * ID of the zone setting.
   */
  id: '0rtt';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams {
  /**
   * Value of the 0-RTT setting.
   */
  value: 'on' | 'off';
}

export namespace ZeroRtt {
  export import ZeroRttGetResponse = ZeroRttAPI.ZeroRttGetResponse;
  export import ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse = ZeroRttAPI.ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse;
  export import ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams = ZeroRttAPI.ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams;
}
