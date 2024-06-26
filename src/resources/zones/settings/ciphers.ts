// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CiphersAPI from './ciphers';

export class Ciphers extends APIResource {}

/**
 * An allowlist of ciphers for TLS termination. These ciphers must be in the
 * BoringSSL format.
 */
export interface Ciphers {
  /**
   * ID of the zone setting.
   */
  id: 'ciphers';

  /**
   * Current value of the zone setting.
   */
  value: Array<string>;

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

export namespace Ciphers {
  export import Ciphers = CiphersAPI.Ciphers;
}
