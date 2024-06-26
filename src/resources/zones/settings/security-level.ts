// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SecurityLevelAPI from './security-level';

export class SecurityLevelResource extends APIResource {}

/**
 * Choose the appropriate security profile for your website, which will
 * automatically adjust each of the security settings. If you choose to customize
 * an individual security setting, the profile will become Custom.
 * (https://support.cloudflare.com/hc/en-us/articles/200170056).
 */
export interface SecurityLevel {
  /**
   * ID of the zone setting.
   */
  id: 'security_level';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

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

export namespace SecurityLevelResource {
  export import SecurityLevel = SecurityLevelAPI.SecurityLevel;
}
