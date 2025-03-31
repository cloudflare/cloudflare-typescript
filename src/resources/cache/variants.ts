// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Variants extends APIResource {
  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  delete(params: VariantDeleteParams, options?: RequestOptions): APIPromise<VariantDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/cache/variants`, options) as APIPromise<{
        result: VariantDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  edit(params: VariantEditParams, options?: RequestOptions): APIPromise<VariantEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/cache/variants`, { body, ...options }) as APIPromise<{
        result: VariantEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  get(params: VariantGetParams, options?: RequestOptions): APIPromise<VariantGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/cache/variants`, options) as APIPromise<{
        result: VariantGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Variant support enables caching variants of images with certain file extensions
 * in addition to the original. This only applies when the origin server sends the
 * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
 * does not serve the variant requested, the response will not be cached. This will
 * be indicated with BYPASS cache status in the response headers.
 */
export interface CacheVariant {
  id: unknown;

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface VariantDeleteResponse {
  id: unknown;

  /**
   * Whether the setting is editable
   */
  editable: boolean;

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface VariantEditResponse {
  id: unknown;

  /**
   * Whether the setting is editable
   */
  editable: boolean;

  /**
   * The value of the feature
   */
  value: string;

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface VariantGetResponse {
  id: unknown;

  /**
   * Whether the setting is editable
   */
  editable: boolean;

  /**
   * The value of the feature
   */
  value: string;

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface VariantDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface VariantEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: VariantEditParams.Value;
}

export namespace VariantEditParams {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * List of strings with the MIME types of all the variants that should be served
     * for avif.
     */
    avif?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for bmp.
     */
    bmp?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for gif.
     */
    gif?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jp2.
     */
    jp2?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpeg.
     */
    jpeg?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg.
     */
    jpg?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg2.
     */
    jpg2?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for png.
     */
    png?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tif.
     */
    tif?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tiff.
     */
    tiff?: Array<string>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for webp.
     */
    webp?: Array<string>;
  }
}

export interface VariantGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Variants {
  export {
    type CacheVariant as CacheVariant,
    type VariantDeleteResponse as VariantDeleteResponse,
    type VariantEditResponse as VariantEditResponse,
    type VariantGetResponse as VariantGetResponse,
    type VariantDeleteParams as VariantDeleteParams,
    type VariantEditParams as VariantEditParams,
    type VariantGetParams as VariantGetParams,
  };
}
