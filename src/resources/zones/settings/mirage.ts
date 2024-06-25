// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MirageAPI from './mirage';

export class MirageResource extends APIResource {
  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our
   * [blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for more
   * information.
   */
  edit(params: MirageEditParams, options?: Core.RequestOptions): Core.APIPromise<Mirage> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/mirage`, { body, ...options }) as Core.APIPromise<{
        result: Mirage;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our
   * [blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for more
   * information.
   */
  get(params: MirageGetParams, options?: Core.RequestOptions): Core.APIPromise<Mirage> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/mirage`, options) as Core.APIPromise<{ result: Mirage }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Automatically optimize image loading for website visitors on mobile devices.
 * Refer to
 * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
 * more information.
 */
export interface Mirage {
  /**
   * ID of the zone setting.
   */
  id: 'mirage';

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

export interface MirageEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface MirageGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace MirageResource {
  export import Mirage = MirageAPI.Mirage;
  export import MirageEditParams = MirageAPI.MirageEditParams;
  export import MirageGetParams = MirageAPI.MirageGetParams;
}
