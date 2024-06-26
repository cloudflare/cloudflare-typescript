// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HTTP3API from './http3';

export class HTTP3Resource extends APIResource {}

/**
 * HTTP3 enabled for this zone.
 */
export interface HTTP3 {
  /**
   * ID of the zone setting.
   */
  id: 'http3';

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

export namespace HTTP3Resource {
  export import HTTP3 = HTTP3API.HTTP3;
}
