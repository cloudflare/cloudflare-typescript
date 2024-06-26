// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HTTP2API from './http2';

export class HTTP2Resource extends APIResource {}

/**
 * HTTP2 enabled for this zone.
 */
export interface HTTP2 {
  /**
   * ID of the zone setting.
   */
  id: 'http2';

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

export namespace HTTP2Resource {
  export import HTTP2 = HTTP2API.HTTP2;
}
