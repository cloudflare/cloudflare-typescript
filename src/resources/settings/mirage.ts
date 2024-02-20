// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MirageAPI from 'cloudflare/resources/settings/mirage';

export class Mirage extends APIResource {
  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our
   * [blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for more
   * information.
   */
  edit(
    zoneId: string,
    body: MirageEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MirageEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/mirage`, { body, ...options }) as Core.APIPromise<{
        result: MirageEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our
   * [blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for more
   * information.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<MirageGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/mirage`, options) as Core.APIPromise<{
        result: MirageGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Automatically optimize image loading for website visitors on mobile devices.
 * Refer to
 * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
 * more information.
 */
export interface MirageEditResponse {
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

/**
 * Automatically optimize image loading for website visitors on mobile devices.
 * Refer to
 * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
 * more information.
 */
export interface MirageGetResponse {
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
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace Mirage {
  export import MirageEditResponse = MirageAPI.MirageEditResponse;
  export import MirageGetResponse = MirageAPI.MirageGetResponse;
  export import MirageEditParams = MirageAPI.MirageEditParams;
}
