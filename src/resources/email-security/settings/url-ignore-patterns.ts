// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class URLIgnorePatterns extends APIResource {
  /**
   * Creates a new URL rewrite ignore pattern. URLs matching this pattern will not be
   * rewritten.
   *
   * @example
   * ```ts
   * const urlIgnorePattern =
   *   await client.emailSecurity.settings.urlIgnorePatterns.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       pattern: 'https://example\\.com/.*',
   *     },
   *   );
   * ```
   */
  create(
    params: URLIgnorePatternCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLIgnorePatternCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/settings/url_ignore_patterns`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: URLIgnorePatternCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of URL rewrite ignore patterns for the account. URLs
   * matching these patterns will not be rewritten.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const urlIgnorePatternListResponse of client.emailSecurity.settings.urlIgnorePatterns.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: URLIgnorePatternListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<URLIgnorePatternListResponsesV4PagePaginationArray, URLIgnorePatternListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/settings/url_ignore_patterns`,
      URLIgnorePatternListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Removes a URL rewrite ignore pattern. After deletion, URLs matching this pattern
   * will be rewritten again.
   *
   * @example
   * ```ts
   * const urlIgnorePattern =
   *   await client.emailSecurity.settings.urlIgnorePatterns.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    patternId: string,
    params: URLIgnorePatternDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLIgnorePatternDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/email-security/settings/url_ignore_patterns/${patternId}`,
        options,
      ) as Core.APIPromise<{ result: URLIgnorePatternDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing URL rewrite ignore pattern. Only provided fields will be
   * modified.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.urlIgnorePatterns.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    patternId: string,
    params: URLIgnorePatternEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLIgnorePatternEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/email-security/settings/url_ignore_patterns/${patternId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: URLIgnorePatternEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a single URL rewrite ignore pattern by its identifier.
   *
   * @example
   * ```ts
   * const urlIgnorePattern =
   *   await client.emailSecurity.settings.urlIgnorePatterns.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    patternId: string,
    params: URLIgnorePatternGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLIgnorePatternGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/settings/url_ignore_patterns/${patternId}`,
        options,
      ) as Core.APIPromise<{ result: URLIgnorePatternGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class URLIgnorePatternListResponsesV4PagePaginationArray extends V4PagePaginationArray<URLIgnorePatternListResponse> {}

/**
 * A URL ignore pattern that exempts matching URLs from being rewritten by Email
 * Security.
 */
export interface URLIgnorePatternCreateResponse {
  /**
   * URL ignore pattern identifier
   */
  id: string;

  created_at: string;

  /**
   * Regular expression matching URLs that should not be rewritten.
   */
  pattern: string;

  /**
   * Optional note describing the reason for the ignore pattern.
   */
  comments?: string | null;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;
}

/**
 * A URL ignore pattern that exempts matching URLs from being rewritten by Email
 * Security.
 */
export interface URLIgnorePatternListResponse {
  /**
   * URL ignore pattern identifier
   */
  id: string;

  created_at: string;

  /**
   * Regular expression matching URLs that should not be rewritten.
   */
  pattern: string;

  /**
   * Optional note describing the reason for the ignore pattern.
   */
  comments?: string | null;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;
}

export interface URLIgnorePatternDeleteResponse {
  /**
   * URL ignore pattern identifier
   */
  id: string;
}

/**
 * A URL ignore pattern that exempts matching URLs from being rewritten by Email
 * Security.
 */
export interface URLIgnorePatternEditResponse {
  /**
   * URL ignore pattern identifier
   */
  id: string;

  created_at: string;

  /**
   * Regular expression matching URLs that should not be rewritten.
   */
  pattern: string;

  /**
   * Optional note describing the reason for the ignore pattern.
   */
  comments?: string | null;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;
}

/**
 * A URL ignore pattern that exempts matching URLs from being rewritten by Email
 * Security.
 */
export interface URLIgnorePatternGetResponse {
  /**
   * URL ignore pattern identifier
   */
  id: string;

  created_at: string;

  /**
   * Regular expression matching URLs that should not be rewritten.
   */
  pattern: string;

  /**
   * Optional note describing the reason for the ignore pattern.
   */
  comments?: string | null;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;
}

export interface URLIgnorePatternCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Regular expression matching URLs that should not be rewritten.
   */
  pattern: string;

  /**
   * Body param: Optional note describing the reason for the ignore pattern.
   */
  comments?: string | null;
}

export interface URLIgnorePatternListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export interface URLIgnorePatternDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface URLIgnorePatternEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Optional note describing the reason for the ignore pattern.
   */
  comments?: string | null;

  /**
   * Body param: Regular expression matching URLs that should not be rewritten.
   */
  pattern?: string;
}

export interface URLIgnorePatternGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

URLIgnorePatterns.URLIgnorePatternListResponsesV4PagePaginationArray =
  URLIgnorePatternListResponsesV4PagePaginationArray;

export declare namespace URLIgnorePatterns {
  export {
    type URLIgnorePatternCreateResponse as URLIgnorePatternCreateResponse,
    type URLIgnorePatternListResponse as URLIgnorePatternListResponse,
    type URLIgnorePatternDeleteResponse as URLIgnorePatternDeleteResponse,
    type URLIgnorePatternEditResponse as URLIgnorePatternEditResponse,
    type URLIgnorePatternGetResponse as URLIgnorePatternGetResponse,
    URLIgnorePatternListResponsesV4PagePaginationArray as URLIgnorePatternListResponsesV4PagePaginationArray,
    type URLIgnorePatternCreateParams as URLIgnorePatternCreateParams,
    type URLIgnorePatternListParams as URLIgnorePatternListParams,
    type URLIgnorePatternDeleteParams as URLIgnorePatternDeleteParams,
    type URLIgnorePatternEditParams as URLIgnorePatternEditParams,
    type URLIgnorePatternGetParams as URLIgnorePatternGetParams,
  };
}
