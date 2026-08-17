// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTransformationsC2paResource extends APIResource {
  static override readonly _key: readonly ['zones', 'transformationsC2pa'] = Object.freeze([
    'zones',
    'transformationsC2pa',
  ] as const);

  /**
   * C2PA (Coalition for Content Provenance and Authenticity) signing adds
   * cryptographic metadata to images processed through Cloudflare Image
   * Transformations, enabling verification of image authenticity and provenance.
   *
   * @example
   * ```ts
   * const transformationsC2pa =
   *   await client.zones.transformationsC2pa.edit({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     value: 'off',
   *   });
   * ```
   */
  edit(params: TransformationsC2paEditParams, options?: RequestOptions): APIPromise<TransformationsC2pa> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/settings/transformations_c2pa`, {
        body,
        ...options,
      }) as APIPromise<{ result: TransformationsC2pa }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * C2PA (Coalition for Content Provenance and Authenticity) signing adds
   * cryptographic metadata to images processed through Cloudflare Image
   * Transformations, enabling verification of image authenticity and provenance.
   *
   * @example
   * ```ts
   * const transformationsC2pa =
   *   await client.zones.transformationsC2pa.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(params: TransformationsC2paGetParams, options?: RequestOptions): APIPromise<TransformationsC2pa> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/settings/transformations_c2pa`, options) as APIPromise<{
        result: TransformationsC2pa;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TransformationsC2paResource extends BaseTransformationsC2paResource {}

/**
 * Controls C2PA signing for images processed through Cloudflare Image
 * Transformations.
 */
export interface TransformationsC2pa {
  /**
   * ID of the zone setting.
   */
  id?: 'image_resizing_c2pa';

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
   * Current value of the zone setting.
   */
  value?: 'on' | 'off';
}

export interface TransformationsC2paEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Whether C2PA signing is enabled for image transformations.
   */
  value: 'off' | 'on';
}

export interface TransformationsC2paGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace TransformationsC2paResource {
  export {
    type TransformationsC2pa as TransformationsC2pa,
    type TransformationsC2paEditParams as TransformationsC2paEditParams,
    type TransformationsC2paGetParams as TransformationsC2paGetParams,
  };
}
