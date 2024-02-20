// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZeroRttAPI from 'cloudflare/resources/settings/zero-rtt';

export class ZeroRtt extends APIResource {
  /**
   * Changes the 0-RTT session resumption setting.
   */
  edit(
    zoneId: string,
    body: ZeroRttEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroRttEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/0rtt`, { body, ...options }) as Core.APIPromise<{
        result: ZeroRttEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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
}

/**
 * 0-RTT session resumption enabled for this zone.
 */
export interface ZeroRttEditResponse {
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

export interface ZeroRttEditParams {
  /**
   * Value of the 0-RTT setting.
   */
  value: 'on' | 'off';
}

export namespace ZeroRtt {
  export import ZeroRttEditResponse = ZeroRttAPI.ZeroRttEditResponse;
  export import ZeroRttGetResponse = ZeroRttAPI.ZeroRttGetResponse;
  export import ZeroRttEditParams = ZeroRttAPI.ZeroRttEditParams;
}
