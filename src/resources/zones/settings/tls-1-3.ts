// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TLS1_3API from './tls-1-3';

export class TLS1_3Resource extends APIResource {}

/**
 * Enables Crypto TLS 1.3 feature for a zone.
 */
export interface TLS1_3 {
  /**
   * ID of the zone setting.
   */
  id: 'tls_1_3';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off' | 'zrt';

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

export namespace TLS1_3Resource {
  export import TLS1_3 = TLS1_3API.TLS1_3;
}
