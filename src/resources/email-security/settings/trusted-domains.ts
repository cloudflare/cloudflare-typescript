// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTrustedDomains extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings', 'trustedDomains'] = Object.freeze([
    'emailSecurity',
    'settings',
    'trustedDomains',
  ] as const);

  /**
   * Creates a new trusted domain pattern. Use for partner domains or approved
   * senders that should bypass recent domain registration and similarity checks.
   * Configure whether it prevents recent domain or spoof dispositions.
   *
   * @example
   * ```ts
   * const trustedDomain =
   *   await client.emailSecurity.settings.trustedDomains.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       is_recent: true,
   *       is_regex: false,
   *       is_similarity: false,
   *       pattern: 'example.com',
   *     },
   *   );
   * ```
   */
  create(
    params: TrustedDomainCreateParams,
    options?: RequestOptions,
  ): APIPromise<TrustedDomainCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/settings/trusted_domains`, {
        body,
        ...options,
      }) as APIPromise<{ result: TrustedDomainCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of trusted domain patterns. Trusted domains prevent
   * false positives for recently registered domains and lookalike domain detections.
   * Patterns can use regular expressions for flexible matching.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const trustedDomainListResponse of client.emailSecurity.settings.trustedDomains.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: TrustedDomainListParams,
    options?: RequestOptions,
  ): PagePromise<TrustedDomainListResponsesV4PagePaginationArray, TrustedDomainListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/settings/trusted_domains`,
      V4PagePaginationArray<TrustedDomainListResponse>,
      { query, ...options },
    );
  }

  /**
   * Removes a trusted domain pattern. After deletion, emails from this domain will
   * be subject to normal recent domain and similarity checks.
   *
   * @example
   * ```ts
   * const trustedDomain =
   *   await client.emailSecurity.settings.trustedDomains.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    trustedDomainID: string,
    params: TrustedDomainDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TrustedDomainDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/email-security/settings/trusted_domains/${trustedDomainID}`,
        options,
      ) as APIPromise<{ result: TrustedDomainDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing trusted domain pattern. Only provided fields will be
   * modified. Changes take effect for new emails matching the pattern.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.trustedDomains.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    trustedDomainID: string,
    params: TrustedDomainEditParams,
    options?: RequestOptions,
  ): APIPromise<TrustedDomainEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/email-security/settings/trusted_domains/${trustedDomainID}`,
        { body, ...options },
      ) as APIPromise<{ result: TrustedDomainEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details for a specific trusted domain pattern including its pattern
   * value, whether it uses regex matching, and which detection types it affects.
   *
   * @example
   * ```ts
   * const trustedDomain =
   *   await client.emailSecurity.settings.trustedDomains.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    trustedDomainID: string,
    params: TrustedDomainGetParams,
    options?: RequestOptions,
  ): APIPromise<TrustedDomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/settings/trusted_domains/${trustedDomainID}`,
        options,
      ) as APIPromise<{ result: TrustedDomainGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TrustedDomains extends BaseTrustedDomains {}

export type TrustedDomainListResponsesV4PagePaginationArray =
  V4PagePaginationArray<TrustedDomainListResponse>;

/**
 * A trusted email domain
 */
export interface TrustedDomainCreateResponse {
  /**
   * Trusted domain identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  /**
   * Select to prevent recently registered domains from triggering a Suspicious or
   * Malicious disposition.
   */
  is_recent?: boolean;

  is_regex?: boolean;

  /**
   * Select for partner or other approved domains that have similar spelling to your
   * connected domains. Prevents listed domains from triggering a Spoof disposition.
   */
  is_similarity?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  pattern?: string;
}

/**
 * A trusted email domain
 */
export interface TrustedDomainListResponse {
  /**
   * Trusted domain identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  /**
   * Select to prevent recently registered domains from triggering a Suspicious or
   * Malicious disposition.
   */
  is_recent?: boolean;

  is_regex?: boolean;

  /**
   * Select for partner or other approved domains that have similar spelling to your
   * connected domains. Prevents listed domains from triggering a Spoof disposition.
   */
  is_similarity?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  pattern?: string;
}

export interface TrustedDomainDeleteResponse {
  /**
   * Trusted domain identifier
   */
  id: string;
}

/**
 * A trusted email domain
 */
export interface TrustedDomainEditResponse {
  /**
   * Trusted domain identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  /**
   * Select to prevent recently registered domains from triggering a Suspicious or
   * Malicious disposition.
   */
  is_recent?: boolean;

  is_regex?: boolean;

  /**
   * Select for partner or other approved domains that have similar spelling to your
   * connected domains. Prevents listed domains from triggering a Spoof disposition.
   */
  is_similarity?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  pattern?: string;
}

/**
 * A trusted email domain
 */
export interface TrustedDomainGetResponse {
  /**
   * Trusted domain identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  /**
   * Select to prevent recently registered domains from triggering a Suspicious or
   * Malicious disposition.
   */
  is_recent?: boolean;

  is_regex?: boolean;

  /**
   * Select for partner or other approved domains that have similar spelling to your
   * connected domains. Prevents listed domains from triggering a Spoof disposition.
   */
  is_similarity?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  pattern?: string;
}

export interface TrustedDomainCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Select to prevent recently registered domains from triggering a
   * Suspicious or Malicious disposition.
   */
  is_recent: boolean;

  /**
   * Body param
   */
  is_regex: boolean;

  /**
   * Body param: Select for partner or other approved domains that have similar
   * spelling to your connected domains. Prevents listed domains from triggering a
   * Spoof disposition.
   */
  is_similarity: boolean;

  /**
   * Body param
   */
  pattern: string;

  /**
   * Body param
   */
  comments?: string | null;
}

export interface TrustedDomainListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter to show only recently registered domains that are trusted to
   * prevent triggering Suspicious or Malicious dispositions.
   */
  is_recent?: boolean;

  /**
   * Query param: Filter to show only proximity domains (partner or approved domains
   * with similar spelling to connected domains) that prevent Spoof dispositions.
   */
  is_similarity?: boolean;

  /**
   * Query param: Field to sort by.
   */
  order?: 'pattern' | 'created_at';

  /**
   * Query param
   */
  pattern?: string;

  /**
   * Query param: Search term for filtering records. Behavior may change.
   */
  search?: string;
}

export interface TrustedDomainDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface TrustedDomainEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  comments?: string | null;

  /**
   * Body param: Select to prevent recently registered domains from triggering a
   * Suspicious or Malicious disposition.
   */
  is_recent?: boolean;

  /**
   * Body param
   */
  is_regex?: boolean;

  /**
   * Body param: Select for partner or other approved domains that have similar
   * spelling to your connected domains. Prevents listed domains from triggering a
   * Spoof disposition.
   */
  is_similarity?: boolean;

  /**
   * Body param
   */
  pattern?: string;
}

export interface TrustedDomainGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace TrustedDomains {
  export {
    type TrustedDomainCreateResponse as TrustedDomainCreateResponse,
    type TrustedDomainListResponse as TrustedDomainListResponse,
    type TrustedDomainDeleteResponse as TrustedDomainDeleteResponse,
    type TrustedDomainEditResponse as TrustedDomainEditResponse,
    type TrustedDomainGetResponse as TrustedDomainGetResponse,
    type TrustedDomainListResponsesV4PagePaginationArray as TrustedDomainListResponsesV4PagePaginationArray,
    type TrustedDomainCreateParams as TrustedDomainCreateParams,
    type TrustedDomainListParams as TrustedDomainListParams,
    type TrustedDomainDeleteParams as TrustedDomainDeleteParams,
    type TrustedDomainEditParams as TrustedDomainEditParams,
    type TrustedDomainGetParams as TrustedDomainGetParams,
  };
}
