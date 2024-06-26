// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as NELAPI from './nel';

export class NELResource extends APIResource {
  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our [blog post](http://blog.cloudflare.com/nel-solving-mobile-speed)
   * for more information.
   */
  edit(params: NELEditParams, options?: Core.RequestOptions): Core.APIPromise<NEL> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/nel`, { body, ...options }) as Core.APIPromise<{
        result: NEL;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  get(params: NELGetParams, options?: Core.RequestOptions): Core.APIPromise<NEL> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/nel`, options) as Core.APIPromise<{ result: NEL }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enable Network Error Logging reporting on your zone. (Beta)
 */
export interface NEL {
  /**
   * Zone setting identifier.
   */
  id: 'nel';

  /**
   * Current value of the zone setting.
   */
  value: NEL.Value;

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

export namespace NEL {
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
export interface NELParam {
  /**
   * Zone setting identifier.
   */
  id: 'nel';

  /**
   * Current value of the zone setting.
   */
  value: NELParam.Value;
}

export namespace NELParam {
  /**
   * Current value of the zone setting.
   */
  export interface Value {
    enabled?: boolean;
  }
}

export interface NELEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Enable Network Error Logging reporting on your zone. (Beta)
   */
  value: NELParam;
}

export interface NELGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace NELResource {
  export import NEL = NELAPI.NEL;
  export import NELEditParams = NELAPI.NELEditParams;
  export import NELGetParams = NELAPI.NELGetParams;
}
