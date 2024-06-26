// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as H2PrioritizationAPI from './h2-prioritization';

export class H2PrioritizationResource extends APIResource {}

/**
 * HTTP/2 Edge Prioritization optimises the delivery of resources served through
 * HTTP/2 to improve page load performance. It also supports fine control of
 * content delivery when used in conjunction with Workers.
 */
export interface H2Prioritization {
  /**
   * ID of the zone setting.
   */
  id: 'h2_prioritization';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off' | 'custom';

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

export namespace H2PrioritizationResource {
  export import H2Prioritization = H2PrioritizationAPI.H2Prioritization;
}
