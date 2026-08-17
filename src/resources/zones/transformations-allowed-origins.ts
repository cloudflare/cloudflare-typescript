// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTransformationsAllowedOrigins extends APIResource {
  static override readonly _key: readonly ['zones', 'transformationsAllowedOrigins'] = Object.freeze([
    'zones',
    'transformationsAllowedOrigins',
  ] as const);

  /**
   * Media Transformations Allowed Origins restricts transformations for images and
   * video served through Cloudflare's network to requests originating from specified
   * domains. Refer to the Image Transformations and Video Transformations
   * documentation for more information.
   *
   * @example
   * ```ts
   * const transformationsAllowedOrigins =
   *   await client.zones.transformationsAllowedOrigins.edit({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     value: 'example.com,cdn.example.com',
   *   });
   * ```
   */
  edit(
    params: TransformationsAllowedOriginEditParams,
    options?: RequestOptions,
  ): APIPromise<TransformationsAllowedOrigins> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/settings/transformations_allowed_origins`, {
        body,
        ...options,
      }) as APIPromise<{ result: TransformationsAllowedOrigins }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Media Transformations Allowed Origins restricts transformations for images and
   * video served through Cloudflare's network to requests originating from specified
   * domains. Refer to the Image Transformations and Video Transformations
   * documentation for more information.
   *
   * @example
   * ```ts
   * const transformationsAllowedOrigins =
   *   await client.zones.transformationsAllowedOrigins.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    params: TransformationsAllowedOriginGetParams,
    options?: RequestOptions,
  ): APIPromise<TransformationsAllowedOrigins> {
    const { zone_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/settings/transformations_allowed_origins`,
        options,
      ) as APIPromise<{ result: TransformationsAllowedOrigins }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TransformationsAllowedOrigins extends BaseTransformationsAllowedOrigins {}

/**
 * Controls which origins are allowed to request image and video transformations.
 */
export interface TransformationsAllowedOrigins {
  /**
   * ID of the zone setting.
   */
  id?: 'image_resizing_allowed_origins';

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
   * Comma-separated list of allowed origin domains for image and video
   * transformations. Use "\*" to allow all origins (default).
   */
  value?: 'on' | 'off';
}

export interface TransformationsAllowedOriginEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Comma-separated list of allowed origin domains for image and video
   * transformations. Use "\*" to allow all origins (default).
   */
  value: string;
}

export interface TransformationsAllowedOriginGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace TransformationsAllowedOrigins {
  export {
    type TransformationsAllowedOrigins as TransformationsAllowedOrigins,
    type TransformationsAllowedOriginEditParams as TransformationsAllowedOriginEditParams,
    type TransformationsAllowedOriginGetParams as TransformationsAllowedOriginGetParams,
  };
}
