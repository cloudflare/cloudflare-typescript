// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IPV6API from './ipv6';

export class IPV6Resource extends APIResource {}

/**
 * Enable IPv6 on all subdomains that are Cloudflare enabled.
 * (https://support.cloudflare.com/hc/en-us/articles/200168586).
 */
export interface IPV6 {
  /**
   * ID of the zone setting.
   */
  id: 'ipv6';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'on';

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

export namespace IPV6Resource {
  export import IPV6 = IPV6API.IPV6;
}
