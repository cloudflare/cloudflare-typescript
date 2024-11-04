// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Variants extends APIResource {
  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  delete(params: VariantDeleteParams, options?: Core.RequestOptions): Core.APIPromise<CacheVariant> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/cache/variants`, options) as Core.APIPromise<{
        result: CacheVariant;
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
  edit(params: VariantEditParams, options?: Core.RequestOptions): Core.APIPromise<VariantEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/cache/variants`, { body, ...options }) as Core.APIPromise<{
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
  get(params: VariantGetParams, options?: Core.RequestOptions): Core.APIPromise<VariantGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/cache/variants`, options) as Core.APIPromise<{
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
  /**
   * ID of the zone setting.
   */
  id: 'variants';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;
}

/**
 * Identifier
 */
export type CacheVariantIdentifier = string;

/**
 * Identifier
 */
export type CacheVariantIdentifierParam = string;

/**
 * Variant support enables caching variants of images with certain file extensions
 * in addition to the original. This only applies when the origin server sends the
 * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
 * does not serve the variant requested, the response will not be cached. This will
 * be indicated with BYPASS cache status in the response headers.
 */
export interface VariantEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'variants';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Value of the zone setting.
   */
  value: VariantEditResponse.Value;
}

export namespace VariantEditResponse {
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

/**
 * Variant support enables caching variants of images with certain file extensions
 * in addition to the original. This only applies when the origin server sends the
 * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
 * does not serve the variant requested, the response will not be cached. This will
 * be indicated with BYPASS cache status in the response headers.
 */
export interface VariantGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'variants';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Value of the zone setting.
   */
  value: VariantGetResponse.Value;
}

export namespace VariantGetResponse {
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

export interface VariantDeleteParams {
  /**
   * Identifier
   */
  zone_id: CacheVariantIdentifierParam;
}

export interface VariantEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: CacheVariantIdentifierParam;

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
  zone_id: CacheVariantIdentifierParam;
}

export declare namespace Variants {
  export {
    type CacheVariant as CacheVariant,
    type CacheVariantIdentifier as CacheVariantIdentifier,
    type VariantEditResponse as VariantEditResponse,
    type VariantGetResponse as VariantGetResponse,
    type VariantDeleteParams as VariantDeleteParams,
    type VariantEditParams as VariantEditParams,
    type VariantGetParams as VariantGetParams,
  };
}
