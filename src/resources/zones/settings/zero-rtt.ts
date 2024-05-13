// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as ZeroRTTAPI from './zero-rtt';

export class ZeroRTTResource extends APIResource {
  /**
   * Changes the 0-RTT session resumption setting.
   */
  edit(params: ZeroRTTEditParams, options?: Core.RequestOptions): Core.APIPromise<ZeroRTT> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/0rtt`, { body, ...options }) as Core.APIPromise<{
        result: ZeroRTT;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets 0-RTT session resumption setting.
   */
  get(params: ZeroRTTGetParams, options?: Core.RequestOptions): Core.APIPromise<ZeroRTT> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/0rtt`, options) as Core.APIPromise<{ result: ZeroRTT }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * 0-RTT session resumption enabled for this zone.
 */
export interface ZeroRTT {
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

export interface ZeroRTTEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the 0-RTT setting.
   */
  value: 'on' | 'off';
}

export interface ZeroRTTGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace ZeroRTTResource {
  export import ZeroRTT = ZeroRTTAPI.ZeroRTT;
  export import ZeroRTTEditParams = ZeroRTTAPI.ZeroRTTEditParams;
  export import ZeroRTTGetParams = ZeroRTTAPI.ZeroRTTGetParams;
}
