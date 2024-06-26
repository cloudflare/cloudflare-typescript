// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AdvancedDDoSAPI from './advanced-ddos';

export class AdvancedDDoS extends APIResource {}

/**
 * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
 * website. This is an uneditable value that is 'on' in the case of Business and
 * Enterprise zones.
 */
export interface AdvancedDDoS {
  /**
   * ID of the zone setting.
   */
  id: 'advanced_ddos';

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

export namespace AdvancedDDoS {
  export import AdvancedDDoS = AdvancedDDoSAPI.AdvancedDDoS;
}
