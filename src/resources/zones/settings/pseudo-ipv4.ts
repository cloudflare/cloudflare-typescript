// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PseudoIPV4API from './pseudo-ipv4';

export class PseudoIPV4Resource extends APIResource {}

/**
 * The value set for the Pseudo IPv4 setting.
 */
export interface PseudoIPV4 {
  /**
   * Value of the Pseudo IPv4 setting.
   */
  id: 'pseudo_ipv4';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'add_header' | 'overwrite_header';

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

export namespace PseudoIPV4Resource {
  export import PseudoIPV4 = PseudoIPV4API.PseudoIPV4;
}
