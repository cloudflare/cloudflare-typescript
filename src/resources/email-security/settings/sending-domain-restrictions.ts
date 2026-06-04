// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class SendingDomainRestrictions extends APIResource {
  /**
   * Creates a new sending domain restriction to enforce TLS requirements for a
   * domain. Emails without TLS from this domain will be dropped unless the subdomain
   * is in the exclude list.
   *
   * @example
   * ```ts
   * const sendingDomainRestriction =
   *   await client.emailSecurity.settings.sendingDomainRestrictions.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       domain: 'example.com',
   *       exclude: ['subdomain.example.com'],
   *     },
   *   );
   * ```
   */
  create(
    params: SendingDomainRestrictionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SendingDomainRestrictionCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/settings/sending_domain_restrictions`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SendingDomainRestrictionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of sending domain restrictions. These restrictions
   * enforce TLS requirements for emails from specific domains. Mail without TLS from
   * restricted domains will be dropped unless the subdomain is in the exclude list.
   * Supports sorting and searching.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sendingDomainRestrictionListResponse of client.emailSecurity.settings.sendingDomainRestrictions.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SendingDomainRestrictionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    SendingDomainRestrictionListResponsesV4PagePaginationArray,
    SendingDomainRestrictionListResponse
  > {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/settings/sending_domain_restrictions`,
      SendingDomainRestrictionListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Removes a sending domain restriction. After deletion, TLS will no longer be
   * enforced for emails from this domain.
   *
   * @example
   * ```ts
   * const sendingDomainRestriction =
   *   await client.emailSecurity.settings.sendingDomainRestrictions.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    sendingDomainRestrictionId: string,
    params: SendingDomainRestrictionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SendingDomainRestrictionDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/email-security/settings/sending_domain_restrictions/${sendingDomainRestrictionId}`,
        options,
      ) as Core.APIPromise<{ result: SendingDomainRestrictionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing sending domain restriction. Only provided fields will be
   * modified. Changes affect which domains require TLS and which subdomains are
   * excluded.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.sendingDomainRestrictions.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    sendingDomainRestrictionId: string,
    params: SendingDomainRestrictionEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SendingDomainRestrictionEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/email-security/settings/sending_domain_restrictions/${sendingDomainRestrictionId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: SendingDomainRestrictionEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details for a specific sending domain restriction including the domain
   * requiring TLS and any excluded subdomains exempt from the TLS requirement.
   *
   * @example
   * ```ts
   * const sendingDomainRestriction =
   *   await client.emailSecurity.settings.sendingDomainRestrictions.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    sendingDomainRestrictionId: string,
    params: SendingDomainRestrictionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SendingDomainRestrictionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/settings/sending_domain_restrictions/${sendingDomainRestrictionId}`,
        options,
      ) as Core.APIPromise<{ result: SendingDomainRestrictionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SendingDomainRestrictionListResponsesV4PagePaginationArray extends V4PagePaginationArray<SendingDomainRestrictionListResponse> {}

/**
 * A sending domain restriction that enforces TLS (Transport Layer Security)
 * requirements for emails from specific domains. If TLS is required, mail without
 * TLS from the specified domain will be dropped.
 */
export interface SendingDomainRestrictionCreateResponse {
  /**
   * Sending domain restriction identifier.
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  /**
   * Domain that requires TLS enforcement.
   */
  domain?: string;

  /**
   * Excluded subdomains that are exempt from TLS requirements.
   */
  exclude?: Array<string>;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;
}

/**
 * A sending domain restriction that enforces TLS (Transport Layer Security)
 * requirements for emails from specific domains. If TLS is required, mail without
 * TLS from the specified domain will be dropped.
 */
export interface SendingDomainRestrictionListResponse {
  /**
   * Sending domain restriction identifier.
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  /**
   * Domain that requires TLS enforcement.
   */
  domain?: string;

  /**
   * Excluded subdomains that are exempt from TLS requirements.
   */
  exclude?: Array<string>;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;
}

export interface SendingDomainRestrictionDeleteResponse {
  /**
   * Sending domain restriction identifier.
   */
  id: string;
}

/**
 * A sending domain restriction that enforces TLS (Transport Layer Security)
 * requirements for emails from specific domains. If TLS is required, mail without
 * TLS from the specified domain will be dropped.
 */
export interface SendingDomainRestrictionEditResponse {
  /**
   * Sending domain restriction identifier.
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  /**
   * Domain that requires TLS enforcement.
   */
  domain?: string;

  /**
   * Excluded subdomains that are exempt from TLS requirements.
   */
  exclude?: Array<string>;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;
}

/**
 * A sending domain restriction that enforces TLS (Transport Layer Security)
 * requirements for emails from specific domains. If TLS is required, mail without
 * TLS from the specified domain will be dropped.
 */
export interface SendingDomainRestrictionGetResponse {
  /**
   * Sending domain restriction identifier.
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  /**
   * Domain that requires TLS enforcement.
   */
  domain?: string;

  /**
   * Excluded subdomains that are exempt from TLS requirements.
   */
  exclude?: Array<string>;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;
}

export interface SendingDomainRestrictionCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Domain that requires TLS enforcement.
   */
  domain: string;

  /**
   * Body param: Excluded subdomains that are exempt from TLS requirements.
   */
  exclude: Array<string>;

  /**
   * Body param
   */
  comments?: string | null;
}

export interface SendingDomainRestrictionListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to sort by.
   */
  order?: 'domain' | 'created_at';

  /**
   * Query param: Search term for filtering records. Behavior may change.
   */
  search?: string;
}

export interface SendingDomainRestrictionDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface SendingDomainRestrictionEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  comments?: string | null;

  /**
   * Body param: Domain that requires TLS enforcement.
   */
  domain?: string;

  /**
   * Body param: Excluded subdomains that are exempt from TLS requirements.
   */
  exclude?: Array<string>;
}

export interface SendingDomainRestrictionGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

SendingDomainRestrictions.SendingDomainRestrictionListResponsesV4PagePaginationArray =
  SendingDomainRestrictionListResponsesV4PagePaginationArray;

export declare namespace SendingDomainRestrictions {
  export {
    type SendingDomainRestrictionCreateResponse as SendingDomainRestrictionCreateResponse,
    type SendingDomainRestrictionListResponse as SendingDomainRestrictionListResponse,
    type SendingDomainRestrictionDeleteResponse as SendingDomainRestrictionDeleteResponse,
    type SendingDomainRestrictionEditResponse as SendingDomainRestrictionEditResponse,
    type SendingDomainRestrictionGetResponse as SendingDomainRestrictionGetResponse,
    SendingDomainRestrictionListResponsesV4PagePaginationArray as SendingDomainRestrictionListResponsesV4PagePaginationArray,
    type SendingDomainRestrictionCreateParams as SendingDomainRestrictionCreateParams,
    type SendingDomainRestrictionListParams as SendingDomainRestrictionListParams,
    type SendingDomainRestrictionDeleteParams as SendingDomainRestrictionDeleteParams,
    type SendingDomainRestrictionEditParams as SendingDomainRestrictionEditParams,
    type SendingDomainRestrictionGetParams as SendingDomainRestrictionGetParams,
  };
}
