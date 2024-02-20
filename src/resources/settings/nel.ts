// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NELAPI from 'cloudflare/resources/settings/nel';

export class NEL extends APIResource {
  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our [blog post](http://blog.cloudflare.com/nel-solving-mobile-speed)
   * for more information.
   */
  edit(zoneId: string, body: NELEditParams, options?: Core.RequestOptions): Core.APIPromise<NELEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/nel`, { body, ...options }) as Core.APIPromise<{
        result: NELEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<NELGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/nel`, options) as Core.APIPromise<{
        result: NELGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enable Network Error Logging reporting on your zone. (Beta)
 */
export interface NELEditResponse {
  /**
   * Zone setting identifier.
   */
  id: 'nel';

  /**
   * Current value of the zone setting.
   */
  value: NELEditResponse.Value;

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

export namespace NELEditResponse {
  /**
   * Current value of the zone setting.
   */
  export interface Value {
    enabled?: boolean;
  }
}

/**
 * Enable Network Error Logging reporting on your zone. (Beta)
 */
export interface NELGetResponse {
  /**
   * Zone setting identifier.
   */
  id: 'nel';

  /**
   * Current value of the zone setting.
   */
  value: NELGetResponse.Value;

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

export namespace NELGetResponse {
  /**
   * Current value of the zone setting.
   */
  export interface Value {
    enabled?: boolean;
  }
}

export interface NELEditParams {
  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  value: NELEditParams.Value;
}

export namespace NELEditParams {
  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface Value {
    /**
     * Zone setting identifier.
     */
    id: 'nel';

    /**
     * Current value of the zone setting.
     */
    value: Value.Value;
  }

  export namespace Value {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }
}

export namespace NEL {
  export import NELEditResponse = NELAPI.NELEditResponse;
  export import NELGetResponse = NELAPI.NELGetResponse;
  export import NELEditParams = NELAPI.NELEditParams;
}
