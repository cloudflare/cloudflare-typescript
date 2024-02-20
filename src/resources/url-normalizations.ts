// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as URLNormalizationsAPI from 'cloudflare/resources/url-normalizations';

export class URLNormalizations extends APIResource {
  /**
   * Fetches the current URL normalization settings.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<URLNormalizationGetResponse> {
    return this._client.get(`/zones/${zoneId}/url_normalization`, options);
  }

  /**
   * Updates the URL normalization settings.
   */
  replace(
    zoneId: string,
    body: URLNormalizationReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLNormalizationReplaceResponse> {
    return this._client.put(`/zones/${zoneId}/url_normalization`, { body, ...options });
  }
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

export interface URLNormalizationReplaceResponse {
  /**
   * The scope of the URL normalization.
   */
  scope?: string;

  /**
   * The type of URL normalization performed by Cloudflare.
   */
  type?: string;
}

export interface URLNormalizationReplaceParams {
  /**
   * The scope of the URL normalization.
   */
  scope?: string;

  /**
   * The type of URL normalization performed by Cloudflare.
   */
  type?: string;
}

export namespace URLNormalizations {
  export import URLNormalizationGetResponse = URLNormalizationsAPI.URLNormalizationGetResponse;
  export import URLNormalizationReplaceResponse = URLNormalizationsAPI.URLNormalizationReplaceResponse;
  export import URLNormalizationReplaceParams = URLNormalizationsAPI.URLNormalizationReplaceParams;
}
