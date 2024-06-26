// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ZeroRTTAPI from './zero-rtt';

export class ZeroRTTResource extends APIResource {}

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

export namespace ZeroRTTResource {
  export import ZeroRTT = ZeroRTTAPI.ZeroRTT;
}
