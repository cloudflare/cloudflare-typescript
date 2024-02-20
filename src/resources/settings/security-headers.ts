// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SecurityHeadersAPI from 'cloudflare/resources/settings/security-headers';

export class SecurityHeaders extends APIResource {
  /**
   * Cloudflare security header for a zone.
   */
  edit(
    zoneId: string,
    body: SecurityHeaderEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityHeaderEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/security_header`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SecurityHeaderEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cloudflare security header for a zone.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<SecurityHeaderGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/security_header`, options) as Core.APIPromise<{
        result: SecurityHeaderGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Cloudflare security header for a zone.
 */
export interface SecurityHeaderEditResponse {
  /**
   * ID of the zone's security header.
   */
  id: 'security_header';

  /**
   * Current value of the zone setting.
   */
  value: SecurityHeaderEditResponse.Value;

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

export namespace SecurityHeaderEditResponse {
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

/**
 * Cloudflare security header for a zone.
 */
export interface SecurityHeaderGetResponse {
  /**
   * ID of the zone's security header.
   */
  id: 'security_header';

  /**
   * Current value of the zone setting.
   */
  value: SecurityHeaderGetResponse.Value;

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

export namespace SecurityHeaderGetResponse {
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

export interface SecurityHeaderEditParams {
  value: SecurityHeaderEditParams.Value;
}

export namespace SecurityHeaderEditParams {
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
  export import SecurityHeaderEditResponse = SecurityHeadersAPI.SecurityHeaderEditResponse;
  export import SecurityHeaderGetResponse = SecurityHeadersAPI.SecurityHeaderGetResponse;
  export import SecurityHeaderEditParams = SecurityHeadersAPI.SecurityHeaderEditParams;
}
