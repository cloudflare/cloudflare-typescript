// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OpportunisticOnionAPI from './opportunistic-onion';

export class OpportunisticOnionResource extends APIResource {}

/**
 * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
 * connection to use our onion services instead of exit nodes.
 */
export interface OpportunisticOnion {
  /**
   * ID of the zone setting.
   */
  id: 'opportunistic_onion';

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

export namespace OpportunisticOnionResource {
  export import OpportunisticOnion = OpportunisticOnionAPI.OpportunisticOnion;
}
