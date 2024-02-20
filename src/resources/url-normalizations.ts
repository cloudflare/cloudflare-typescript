// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as URLNormalizationsAPI from 'cloudflare/resources/url-normalizations';

export class URLNormalizations extends APIResource {
  /**
   * Updates the URL normalization settings.
   */
  update(
    zoneId: string,
    body: URLNormalizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLNormalizationUpdateResponse> {
    return this._client.put(`/zones/${zoneId}/url_normalization`, { body, ...options });
  }

  /**
   * Fetches the current URL normalization settings.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<URLNormalizationGetResponse> {
    return this._client.get(`/zones/${zoneId}/url_normalization`, options);
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
   * The scope of the URL normalization.
   */
  scope?: string;

  /**
   * The type of URL normalization performed by Cloudflare.
   */
  type?: string;
}

export namespace URLNormalizations {
  export import URLNormalizationUpdateResponse = URLNormalizationsAPI.URLNormalizationUpdateResponse;
  export import URLNormalizationGetResponse = URLNormalizationsAPI.URLNormalizationGetResponse;
  export import URLNormalizationUpdateParams = URLNormalizationsAPI.URLNormalizationUpdateParams;
}
