// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OpportunisticEncryptionAPI from './opportunistic-encryption';

export class OpportunisticEncryptionResource extends APIResource {}

/**
 * Enables the Opportunistic Encryption feature for a zone.
 */
export interface OpportunisticEncryption {
  /**
   * ID of the zone setting.
   */
  id: 'opportunistic_encryption';

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

export namespace OpportunisticEncryptionResource {
  export import OpportunisticEncryption = OpportunisticEncryptionAPI.OpportunisticEncryption;
}
