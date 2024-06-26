// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ProxyReadTimeoutAPI from './proxy-read-timeout';

export class ProxyReadTimeoutResource extends APIResource {}

/**
 * Maximum time between two read operations from origin.
 */
export interface ProxyReadTimeout {
  /**
   * ID of the zone setting.
   */
  id: 'proxy_read_timeout';

  /**
   * Current value of the zone setting.
   */
  value: number;

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

export namespace ProxyReadTimeoutResource {
  export import ProxyReadTimeout = ProxyReadTimeoutAPI.ProxyReadTimeout;
}
