// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class URLNormalization extends APIResource {
  /**
   * Updates the URL normalization settings.
   */
  update(
    params: URLNormalizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLNormalizationUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.put(`/zones/${zone_id}/url_normalization`, { body, ...options });
  }

  /**
   * Fetches the current URL normalization settings.
   */
  get(
    params: URLNormalizationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLNormalizationGetResponse> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/url_normalization`, options);
  }
}

export interface URLNormalizationUpdateResponse {
  /**
   * The scope of the URL normalization.
   */
  scope?: string;

  /**
   * The type of URL normalization performed by Cloudflare.
   */
  type?: string;
}

export interface URLNormalizationGetResponse {
  /**
   * The scope of the URL normalization.
   */
  scope?: string;

  /**
   * The type of URL normalization performed by Cloudflare.
   */
  type?: string;
}

export interface URLNormalizationUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The scope of the URL normalization.
   */
  scope?: string;

  /**
   * Body param: The type of URL normalization performed by Cloudflare.
   */
  type?: string;
}

export interface URLNormalizationGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}
