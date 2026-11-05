// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTieredCaching extends APIResource {
  static override readonly _key: readonly ['argo', 'tieredCaching'] = Object.freeze([
    'argo',
    'tieredCaching',
  ] as const);

  /**
   * Enables or disables Tiered Cache for a zone. Tiered Cache reduces origin traffic
   * by serving lower-tier cache misses from upper-tier data centers before
   * requesting content from your origin.
   *
   * @example
   * ```ts
   * const response = await client.argo.tieredCaching.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   value: 'on',
   * });
   * ```
   */
  edit(params: TieredCachingEditParams, options?: RequestOptions): APIPromise<TieredCachingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/argo/tiered_caching`, { body, ...options }) as APIPromise<{
        result: TieredCachingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves whether Tiered Cache is enabled for a zone. Tiered Cache reduces
   * origin traffic by serving lower-tier cache misses from upper-tier data centers
   * before requesting content from your origin.
   *
   * @example
   * ```ts
   * const tieredCaching = await client.argo.tieredCaching.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: TieredCachingGetParams, options?: RequestOptions): APIPromise<TieredCachingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/argo/tiered_caching`, options) as APIPromise<{
        result: TieredCachingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TieredCaching extends BaseTieredCaching {}

export interface TieredCachingEditResponse {
  /**
   * The identifier of the caching setting.
   */
  id: 'tiered_caching';

  /**
   * Whether the setting is editable.
   */
  editable: boolean;

  /**
   * Value of the Tiered Cache zone setting.
   */
  value: 'on' | 'off';

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface TieredCachingGetResponse {
  /**
   * The identifier of the caching setting.
   */
  id: 'tiered_caching';

  /**
   * Whether the setting is editable.
   */
  editable: boolean;

  /**
   * Value of the Tiered Cache zone setting.
   */
  value: 'on' | 'off';

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface TieredCachingEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Enables or disables Tiered Cache.
   */
  value: 'on' | 'off';
}

export interface TieredCachingGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace TieredCaching {
  export {
    type TieredCachingEditResponse as TieredCachingEditResponse,
    type TieredCachingGetResponse as TieredCachingGetResponse,
    type TieredCachingEditParams as TieredCachingEditParams,
    type TieredCachingGetParams as TieredCachingGetParams,
  };
}
