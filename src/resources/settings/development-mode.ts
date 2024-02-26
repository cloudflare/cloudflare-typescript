// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DevelopmentModeAPI from 'cloudflare/resources/settings/development-mode';

export class DevelopmentMode extends APIResource {
  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  edit(
    params: DevelopmentModeEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevelopmentModeEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/development_mode`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DevelopmentModeEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  get(
    params: DevelopmentModeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevelopmentModeGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/development_mode`, options) as Core.APIPromise<{
        result: DevelopmentModeGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Development Mode temporarily allows you to enter development mode for your
 * websites if you need to make changes to your site. This will bypass Cloudflare's
 * accelerated cache and slow down your site, but is useful if you are making
 * changes to cacheable content (like images, css, or JavaScript) and would like to
 * see those changes right away. Once entered, development mode will last for 3
 * hours and then automatically toggle off.
 */
export interface DevelopmentModeEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'development_mode';

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

  /**
   * Value of the zone setting. Notes: The interval (in seconds) from when
   * development mode expires (positive integer) or last expired (negative integer)
   * for the domain. If development mode has never been enabled, this value is false.
   */
  time_remaining?: number;
}

/**
 * Development Mode temporarily allows you to enter development mode for your
 * websites if you need to make changes to your site. This will bypass Cloudflare's
 * accelerated cache and slow down your site, but is useful if you are making
 * changes to cacheable content (like images, css, or JavaScript) and would like to
 * see those changes right away. Once entered, development mode will last for 3
 * hours and then automatically toggle off.
 */
export interface DevelopmentModeGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'development_mode';

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

  /**
   * Value of the zone setting. Notes: The interval (in seconds) from when
   * development mode expires (positive integer) or last expired (negative integer)
   * for the domain. If development mode has never been enabled, this value is false.
   */
  time_remaining?: number;
}

export interface DevelopmentModeEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface DevelopmentModeGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace DevelopmentMode {
  export import DevelopmentModeEditResponse = DevelopmentModeAPI.DevelopmentModeEditResponse;
  export import DevelopmentModeGetResponse = DevelopmentModeAPI.DevelopmentModeGetResponse;
  export import DevelopmentModeEditParams = DevelopmentModeAPI.DevelopmentModeEditParams;
  export import DevelopmentModeGetParams = DevelopmentModeAPI.DevelopmentModeGetParams;
}
