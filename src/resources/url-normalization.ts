// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class URLNormalization extends APIResource {
  /**
   * Updates the URL Normalization settings.
   */
  update(
    params: URLNormalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<URLNormalizationUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/url_normalization`, { body, ...options }) as APIPromise<{
        result: URLNormalizationUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the URL Normalization settings.
   */
  delete(params: URLNormalizationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { zone_id } = params;
    return this._client.delete(path`/zones/${zone_id}/url_normalization`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches the current URL Normalization settings.
   */
  get(params: URLNormalizationGetParams, options?: RequestOptions): APIPromise<URLNormalizationGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/url_normalization`, options) as APIPromise<{
        result: URLNormalizationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A result.
 */
export interface URLNormalizationUpdateResponse {
  /**
   * The scope of the URL normalization.
   */
  scope: 'incoming' | 'both';

  /**
   * The type of URL normalization performed by Cloudflare.
   */
  type: 'cloudflare' | 'rfc3986';
}

/**
 * A result.
 */
export interface URLNormalizationGetResponse {
  /**
   * The scope of the URL normalization.
   */
  scope: 'incoming' | 'both';

  /**
   * The type of URL normalization performed by Cloudflare.
   */
  type: 'cloudflare' | 'rfc3986';
}

export interface URLNormalizationUpdateParams {
  /**
   * Path param: The unique ID of the zone.
   */
  zone_id: string;

  /**
   * Body param: The scope of the URL normalization.
   */
  scope: 'incoming' | 'both';

  /**
   * Body param: The type of URL normalization performed by Cloudflare.
   */
  type: 'cloudflare' | 'rfc3986';
}

export interface URLNormalizationDeleteParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export interface URLNormalizationGetParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export declare namespace URLNormalization {
  export {
    type URLNormalizationUpdateResponse as URLNormalizationUpdateResponse,
    type URLNormalizationGetResponse as URLNormalizationGetResponse,
    type URLNormalizationUpdateParams as URLNormalizationUpdateParams,
    type URLNormalizationDeleteParams as URLNormalizationDeleteParams,
    type URLNormalizationGetParams as URLNormalizationGetParams,
  };
}
