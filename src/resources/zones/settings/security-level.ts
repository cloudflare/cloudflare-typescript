// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SecurityLevelAPI from 'cloudflare/resources/zones/settings/security-level';

export class SecurityLevelResource extends APIResource {
  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  edit(params: SecurityLevelEditParams, options?: Core.RequestOptions): Core.APIPromise<SecurityLevel> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/security_level`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SecurityLevel }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  get(params: SecurityLevelGetParams, options?: Core.RequestOptions): Core.APIPromise<SecurityLevel> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/security_level`, options) as Core.APIPromise<{
        result: SecurityLevel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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

export interface SecurityLevelEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
}

export interface SecurityLevelGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SecurityLevelResource {
  export import SecurityLevel = SecurityLevelAPI.SecurityLevel;
  export import SecurityLevelEditParams = SecurityLevelAPI.SecurityLevelEditParams;
  export import SecurityLevelGetParams = SecurityLevelAPI.SecurityLevelGetParams;
}
