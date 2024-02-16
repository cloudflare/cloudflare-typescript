// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as URLNormalizationsAPI from 'cloudflare/resources/url-normalizations';

export class URLNormalizations extends APIResource {
  /**
   * Fetches the current URL normalization settings.
   */
  urlNormalizationGetURLNormalizationSettings(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse> {
    return this._client.get(`/zones/${zoneId}/url_normalization`, options);
  }

  /**
   * Updates the URL normalization settings.
   */
  urlNormalizationUpdateURLNormalizationSettings(
    zoneId: string,
    body: URLNormalizationURLNormalizationUpdateURLNormalizationSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse> {
    return this._client.put(`/zones/${zoneId}/url_normalization`, { body, ...options });
  }
}

export interface URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse {
  /**
   * The scope of the URL normalization.
   */
  scope?: string;

  /**
   * The type of URL normalization performed by Cloudflare.
   */
  type?: string;
}

export interface URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse {
  /**
   * The scope of the URL normalization.
   */
  scope?: string;

  /**
   * The type of URL normalization performed by Cloudflare.
   */
  type?: string;
}

export interface URLNormalizationURLNormalizationUpdateURLNormalizationSettingsParams {
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
  export import URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse = URLNormalizationsAPI.URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse;
  export import URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse = URLNormalizationsAPI.URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse;
  export import URLNormalizationURLNormalizationUpdateURLNormalizationSettingsParams = URLNormalizationsAPI.URLNormalizationURLNormalizationUpdateURLNormalizationSettingsParams;
}
