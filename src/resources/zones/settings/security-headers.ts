// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SecurityHeadersAPI from './security-headers';

export class SecurityHeaders extends APIResource {}

/**
 * Cloudflare security header for a zone.
 */
export interface SecurityHeaders {
  /**
   * ID of the zone's security header.
   */
  id: 'security_header';

  /**
   * Current value of the zone setting.
   */
  value: SecurityHeaders.Value;

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

export namespace SecurityHeaders {
  /**
   * Current value of the zone setting.
   */
  export interface Value {
    /**
     * Strict Transport Security.
     */
    strict_transport_security?: Value.StrictTransportSecurity;
  }

  export namespace Value {
    /**
     * Strict Transport Security.
     */
    export interface StrictTransportSecurity {
      /**
       * Whether or not strict transport security is enabled.
       */
      enabled?: boolean;

      /**
       * Include all subdomains for strict transport security.
       */
      include_subdomains?: boolean;

      /**
       * Max age in seconds of the strict transport security.
       */
      max_age?: number;

      /**
       * Whether or not to include 'X-Content-Type-Options: nosniff' header.
       */
      nosniff?: boolean;
    }
  }
}

export namespace SecurityHeaders {
  export import SecurityHeaders = SecurityHeadersAPI.SecurityHeaders;
}
