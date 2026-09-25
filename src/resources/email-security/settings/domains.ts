// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  SinglePage,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDomains extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings', 'domains'] = Object.freeze([
    'emailSecurity',
    'settings',
    'domains',
  ] as const);

  /**
   * Protects a new email domain by adding it to Email Security. Accepts a flat
   * configuration object covering all delivery modes. Returns the newly created
   * domain configuration.
   *
   * @example
   * ```ts
   * const domain =
   *   await client.emailSecurity.settings.domains.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     allowed_delivery_modes: ['DIRECT'],
   *     domain: 'domain',
   *     drop_dispositions: ['MALICIOUS'],
   *     ip_restrictions: ['192.0.2.0/24', '2001:db8::/32'],
   *     regions: ['GLOBAL'],
   *   });
   * ```
   */
  create(params: DomainCreateParams, options?: RequestOptions): APIPromise<DomainCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/settings/domains`, {
        body,
        ...options,
      }) as APIPromise<{ result: DomainCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces all mutable fields of a protected email domain in a single atomic
   * operation. Unlike PATCH, all non-computed fields are required.
   *
   * @example
   * ```ts
   * const domain =
   *   await client.emailSecurity.settings.domains.update(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       allowed_delivery_modes: ['DIRECT'],
   *       drop_dispositions: ['MALICIOUS'],
   *       ip_restrictions: ['192.0.2.0/24', '2001:db8::/32'],
   *       regions: ['GLOBAL'],
   *     },
   *   );
   * ```
   */
  update(
    domainID: string,
    params: DomainUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DomainUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/email-security/settings/domains/${domainID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: DomainUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of email domains protected by Email Security. Includes
   * domain configuration, delivery modes, and authorization status. Supports
   * filtering by delivery mode and integration ID.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const domainListResponse of client.emailSecurity.settings.domains.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DomainListParams,
    options?: RequestOptions,
  ): PagePromise<DomainListResponsesV4PagePaginationArray, DomainListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/settings/domains`,
      V4PagePaginationArray<DomainListResponse>,
      { query, ...options },
    );
  }

  /**
   * Removes email security protection from a domain. After deletion, emails for this
   * domain will no longer be processed by Email Security. This action cannot be
   * undone.
   *
   * @example
   * ```ts
   * const domain =
   *   await client.emailSecurity.settings.domains.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    domainID: string,
    params: DomainDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DomainDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/email-security/settings/domains/${domainID}`,
        options,
      ) as APIPromise<{ result: DomainDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Executes multiple domain operations in a single request. All four operation
   * arrays (deletes, patches, puts, posts) are required and executed in order. Send
   * empty arrays for unused operations.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.domains.batch({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     deletes: [
   *       { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415' },
   *     ],
   *     patches: [
   *       { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415' },
   *     ],
   *     posts: [
   *       {
   *         allowed_delivery_modes: ['DIRECT'],
   *         domain: 'domain',
   *         drop_dispositions: ['MALICIOUS'],
   *         ip_restrictions: ['192.0.2.0/24', '2001:db8::/32'],
   *         regions: ['GLOBAL'],
   *       },
   *     ],
   *     puts: [
   *       {
   *         id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *         allowed_delivery_modes: ['DIRECT'],
   *         drop_dispositions: ['MALICIOUS'],
   *         ip_restrictions: ['192.0.2.0/24', '2001:db8::/32'],
   *         regions: ['GLOBAL'],
   *       },
   *     ],
   *   });
   * ```
   */
  batch(params: DomainBatchParams, options?: RequestOptions): APIPromise<DomainBatchResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/settings/domains/batch`, {
        body,
        ...options,
      }) as APIPromise<{ result: DomainBatchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes protection from multiple email domains. Deprecated; use the batch
   * endpoint instead.
   *
   * @deprecated This endpoint is deprecated. Use POST /accounts/{account_id}/email-security/settings/domains/batch instead.
   */
  bulkDelete(
    params: DomainBulkDeleteParams,
    options?: RequestOptions,
  ): PagePromise<DomainBulkDeleteResponsesSinglePage, DomainBulkDeleteResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/settings/domains`,
      SinglePage<DomainBulkDeleteResponse>,
      { method: 'delete', ...options },
    );
  }

  /**
   * Updates configuration for a protected email domain. Only provided fields will be
   * modified. Changes affect delivery mode, security settings, and regional
   * processing.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.domains.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(domainID: string, params: DomainEditParams, options?: RequestOptions): APIPromise<DomainEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/email-security/settings/domains/${domainID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: DomainEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves detailed information for a specific protected email domain including
   * its delivery configuration, SPF/DMARC status, and authorization state.
   *
   * @example
   * ```ts
   * const domain =
   *   await client.emailSecurity.settings.domains.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(domainID: string, params: DomainGetParams, options?: RequestOptions): APIPromise<DomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/settings/domains/${domainID}`,
        options,
      ) as APIPromise<{ result: DomainGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Domains extends BaseDomains {}

export type DomainListResponsesV4PagePaginationArray = V4PagePaginationArray<DomainListResponse>;

export type DomainBulkDeleteResponsesSinglePage = SinglePage<DomainBulkDeleteResponse>;

export interface DomainCreateResponse {
  /**
   * Domain identifier.
   */
  id?: string;

  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  authorization?: DomainCreateResponse.Authorization | null;

  created_at?: string;

  dmarc_status?: 'none' | 'good' | 'invalid' | null;

  domain?: string;

  drop_dispositions?: Array<
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
  >;

  emails_processed?: DomainCreateResponse.EmailsProcessed | null;

  folder?: 'AllItems' | 'Inbox' | null;

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  ip_restrictions?: Array<string>;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified?: string;

  lookback_hops?: number;

  modified_at?: string;

  o365_tenant_id?: string | null;

  regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;

  spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid' | null;

  status?: 'PENDING' | 'ACTIVE' | 'FAILED' | 'TIMEOUT' | null;

  transport?: string;
}

export namespace DomainCreateResponse {
  export interface Authorization {
    authorized: boolean;

    timestamp: string;

    status_message?: string | null;
  }

  export interface EmailsProcessed {
    timestamp: string;

    total_emails_processed: number;

    total_emails_processed_previous: number;
  }
}

export interface DomainUpdateResponse {
  /**
   * Domain identifier.
   */
  id?: string;

  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  authorization?: DomainUpdateResponse.Authorization | null;

  created_at?: string;

  dmarc_status?: 'none' | 'good' | 'invalid' | null;

  domain?: string;

  drop_dispositions?: Array<
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
  >;

  emails_processed?: DomainUpdateResponse.EmailsProcessed | null;

  folder?: 'AllItems' | 'Inbox' | null;

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  ip_restrictions?: Array<string>;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified?: string;

  lookback_hops?: number;

  modified_at?: string;

  o365_tenant_id?: string | null;

  regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;

  spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid' | null;

  status?: 'PENDING' | 'ACTIVE' | 'FAILED' | 'TIMEOUT' | null;

  transport?: string;
}

export namespace DomainUpdateResponse {
  export interface Authorization {
    authorized: boolean;

    timestamp: string;

    status_message?: string | null;
  }

  export interface EmailsProcessed {
    timestamp: string;

    total_emails_processed: number;

    total_emails_processed_previous: number;
  }
}

export interface DomainListResponse {
  /**
   * Domain identifier.
   */
  id?: string;

  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  authorization?: DomainListResponse.Authorization | null;

  created_at?: string;

  dmarc_status?: 'none' | 'good' | 'invalid' | null;

  domain?: string;

  drop_dispositions?: Array<
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
  >;

  emails_processed?: DomainListResponse.EmailsProcessed | null;

  folder?: 'AllItems' | 'Inbox' | null;

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  ip_restrictions?: Array<string>;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified?: string;

  lookback_hops?: number;

  modified_at?: string;

  o365_tenant_id?: string | null;

  regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;

  spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid' | null;

  status?: 'PENDING' | 'ACTIVE' | 'FAILED' | 'TIMEOUT' | null;

  transport?: string;
}

export namespace DomainListResponse {
  export interface Authorization {
    authorized: boolean;

    timestamp: string;

    status_message?: string | null;
  }

  export interface EmailsProcessed {
    timestamp: string;

    total_emails_processed: number;

    total_emails_processed_previous: number;
  }
}

export interface DomainDeleteResponse {
  /**
   * Domain identifier.
   */
  id: string;
}

export interface DomainBatchResponse {
  deletes: Array<DomainBatchResponse.Delete>;

  patches: Array<DomainBatchResponse.Patch>;

  posts: Array<DomainBatchResponse.Post>;

  puts: Array<DomainBatchResponse.Put>;
}

export namespace DomainBatchResponse {
  export interface Delete {
    /**
     * Domain identifier.
     */
    id: string;
  }

  export interface Patch {
    /**
     * Domain identifier.
     */
    id?: string;

    allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

    authorization?: Patch.Authorization | null;

    created_at?: string;

    dmarc_status?: 'none' | 'good' | 'invalid' | null;

    domain?: string;

    drop_dispositions?: Array<
      | 'MALICIOUS'
      | 'MALICIOUS-BEC'
      | 'SUSPICIOUS'
      | 'SPOOF'
      | 'SPAM'
      | 'BULK'
      | 'ENCRYPTED'
      | 'EXTERNAL'
      | 'UNKNOWN'
      | 'NONE'
    >;

    emails_processed?: Patch.EmailsProcessed | null;

    folder?: 'AllItems' | 'Inbox' | null;

    inbox_provider?: 'Microsoft' | 'Google' | null;

    integration_id?: string | null;

    ip_restrictions?: Array<string>;

    /**
     * @deprecated Use `modified_at` instead.
     */
    last_modified?: string;

    lookback_hops?: number;

    modified_at?: string;

    o365_tenant_id?: string | null;

    regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

    require_tls_inbound?: boolean | null;

    require_tls_outbound?: boolean | null;

    spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid' | null;

    status?: 'PENDING' | 'ACTIVE' | 'FAILED' | 'TIMEOUT' | null;

    transport?: string;
  }

  export namespace Patch {
    export interface Authorization {
      authorized: boolean;

      timestamp: string;

      status_message?: string | null;
    }

    export interface EmailsProcessed {
      timestamp: string;

      total_emails_processed: number;

      total_emails_processed_previous: number;
    }
  }

  export interface Post {
    /**
     * Domain identifier.
     */
    id?: string;

    allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

    authorization?: Post.Authorization | null;

    created_at?: string;

    dmarc_status?: 'none' | 'good' | 'invalid' | null;

    domain?: string;

    drop_dispositions?: Array<
      | 'MALICIOUS'
      | 'MALICIOUS-BEC'
      | 'SUSPICIOUS'
      | 'SPOOF'
      | 'SPAM'
      | 'BULK'
      | 'ENCRYPTED'
      | 'EXTERNAL'
      | 'UNKNOWN'
      | 'NONE'
    >;

    emails_processed?: Post.EmailsProcessed | null;

    folder?: 'AllItems' | 'Inbox' | null;

    inbox_provider?: 'Microsoft' | 'Google' | null;

    integration_id?: string | null;

    ip_restrictions?: Array<string>;

    /**
     * @deprecated Use `modified_at` instead.
     */
    last_modified?: string;

    lookback_hops?: number;

    modified_at?: string;

    o365_tenant_id?: string | null;

    regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

    require_tls_inbound?: boolean | null;

    require_tls_outbound?: boolean | null;

    spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid' | null;

    status?: 'PENDING' | 'ACTIVE' | 'FAILED' | 'TIMEOUT' | null;

    transport?: string;
  }

  export namespace Post {
    export interface Authorization {
      authorized: boolean;

      timestamp: string;

      status_message?: string | null;
    }

    export interface EmailsProcessed {
      timestamp: string;

      total_emails_processed: number;

      total_emails_processed_previous: number;
    }
  }

  export interface Put {
    /**
     * Domain identifier.
     */
    id?: string;

    allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

    authorization?: Put.Authorization | null;

    created_at?: string;

    dmarc_status?: 'none' | 'good' | 'invalid' | null;

    domain?: string;

    drop_dispositions?: Array<
      | 'MALICIOUS'
      | 'MALICIOUS-BEC'
      | 'SUSPICIOUS'
      | 'SPOOF'
      | 'SPAM'
      | 'BULK'
      | 'ENCRYPTED'
      | 'EXTERNAL'
      | 'UNKNOWN'
      | 'NONE'
    >;

    emails_processed?: Put.EmailsProcessed | null;

    folder?: 'AllItems' | 'Inbox' | null;

    inbox_provider?: 'Microsoft' | 'Google' | null;

    integration_id?: string | null;

    ip_restrictions?: Array<string>;

    /**
     * @deprecated Use `modified_at` instead.
     */
    last_modified?: string;

    lookback_hops?: number;

    modified_at?: string;

    o365_tenant_id?: string | null;

    regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

    require_tls_inbound?: boolean | null;

    require_tls_outbound?: boolean | null;

    spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid' | null;

    status?: 'PENDING' | 'ACTIVE' | 'FAILED' | 'TIMEOUT' | null;

    transport?: string;
  }

  export namespace Put {
    export interface Authorization {
      authorized: boolean;

      timestamp: string;

      status_message?: string | null;
    }

    export interface EmailsProcessed {
      timestamp: string;

      total_emails_processed: number;

      total_emails_processed_previous: number;
    }
  }
}

export interface DomainBulkDeleteResponse {
  /**
   * Domain identifier.
   */
  id: string;
}

export interface DomainEditResponse {
  /**
   * Domain identifier.
   */
  id?: string;

  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  authorization?: DomainEditResponse.Authorization | null;

  created_at?: string;

  dmarc_status?: 'none' | 'good' | 'invalid' | null;

  domain?: string;

  drop_dispositions?: Array<
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
  >;

  emails_processed?: DomainEditResponse.EmailsProcessed | null;

  folder?: 'AllItems' | 'Inbox' | null;

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  ip_restrictions?: Array<string>;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified?: string;

  lookback_hops?: number;

  modified_at?: string;

  o365_tenant_id?: string | null;

  regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;

  spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid' | null;

  status?: 'PENDING' | 'ACTIVE' | 'FAILED' | 'TIMEOUT' | null;

  transport?: string;
}

export namespace DomainEditResponse {
  export interface Authorization {
    authorized: boolean;

    timestamp: string;

    status_message?: string | null;
  }

  export interface EmailsProcessed {
    timestamp: string;

    total_emails_processed: number;

    total_emails_processed_previous: number;
  }
}

export interface DomainGetResponse {
  /**
   * Domain identifier.
   */
  id?: string;

  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  authorization?: DomainGetResponse.Authorization | null;

  created_at?: string;

  dmarc_status?: 'none' | 'good' | 'invalid' | null;

  domain?: string;

  drop_dispositions?: Array<
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
  >;

  emails_processed?: DomainGetResponse.EmailsProcessed | null;

  folder?: 'AllItems' | 'Inbox' | null;

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  ip_restrictions?: Array<string>;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified?: string;

  lookback_hops?: number;

  modified_at?: string;

  o365_tenant_id?: string | null;

  regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;

  spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid' | null;

  status?: 'PENDING' | 'ACTIVE' | 'FAILED' | 'TIMEOUT' | null;

  transport?: string;
}

export namespace DomainGetResponse {
  export interface Authorization {
    authorized: boolean;

    timestamp: string;

    status_message?: string | null;
  }

  export interface EmailsProcessed {
    timestamp: string;

    total_emails_processed: number;

    total_emails_processed_previous: number;
  }
}

export interface DomainCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  allowed_delivery_modes: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  /**
   * Body param
   */
  domain: string;

  /**
   * Body param
   */
  drop_dispositions: Array<
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
  >;

  /**
   * Body param
   */
  ip_restrictions: Array<string>;

  /**
   * Body param
   */
  regions: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  /**
   * Body param
   */
  folder?: 'AllItems' | 'Inbox' | null;

  /**
   * Body param
   */
  integration_id?: string | null;

  /**
   * Body param
   */
  lookback_hops?: number | null;

  /**
   * Body param
   */
  require_tls_inbound?: boolean | null;

  /**
   * Body param
   */
  require_tls_outbound?: boolean | null;

  /**
   * Body param
   */
  transport?: string | null;
}

export interface DomainUpdateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  allowed_delivery_modes: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  /**
   * Body param
   */
  drop_dispositions: Array<
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
  >;

  /**
   * Body param
   */
  ip_restrictions: Array<string>;

  /**
   * Body param
   */
  regions: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  /**
   * Body param
   */
  folder?: 'AllItems' | 'Inbox' | null;

  /**
   * Body param
   */
  integration_id?: string | null;

  /**
   * Body param
   */
  lookback_hops?: number | null;

  /**
   * Body param
   */
  require_tls_inbound?: boolean | null;

  /**
   * Body param
   */
  require_tls_outbound?: boolean | null;

  /**
   * Body param
   */
  transport?: string | null;
}

export interface DomainListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Currently active delivery mode to filter by.
   */
  active_delivery_mode?: 'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN';

  /**
   * Query param: Delivery mode to filter by.
   */
  allowed_delivery_mode?: 'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN';

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Domain names to filter by.
   */
  domain?: Array<string>;

  /**
   * Query param: Integration ID to filter by.
   */
  integration_id?: string;

  /**
   * Query param: Field to sort by.
   */
  order?: 'domain' | 'created_at';

  /**
   * Query param: Search term for filtering records. Behavior may change.
   */
  search?: string;

  /**
   * Query param: Filters response to domains with the provided status.
   */
  status?: 'PENDING' | 'ACTIVE' | 'FAILED' | 'TIMEOUT' | null;
}

export interface DomainDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface DomainBatchParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  deletes: Array<DomainBatchParams.Delete>;

  /**
   * Body param
   */
  patches: Array<DomainBatchParams.Patch>;

  /**
   * Body param
   */
  posts: Array<DomainBatchParams.Post>;

  /**
   * Body param
   */
  puts: Array<DomainBatchParams.Put>;
}

export namespace DomainBatchParams {
  export interface Delete {
    /**
     * Domain identifier.
     */
    id: string;
  }

  export interface Patch {
    /**
     * Domain identifier.
     */
    id: string;

    allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

    drop_dispositions?: Array<
      | 'MALICIOUS'
      | 'MALICIOUS-BEC'
      | 'SUSPICIOUS'
      | 'SPOOF'
      | 'SPAM'
      | 'BULK'
      | 'ENCRYPTED'
      | 'EXTERNAL'
      | 'UNKNOWN'
      | 'NONE'
    >;

    folder?: 'AllItems' | 'Inbox' | null;

    integration_id?: string | null;

    ip_restrictions?: Array<string>;

    lookback_hops?: number;

    regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

    require_tls_inbound?: boolean;

    require_tls_outbound?: boolean;

    transport?: string;
  }

  export interface Post {
    allowed_delivery_modes: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

    domain: string;

    drop_dispositions: Array<
      | 'MALICIOUS'
      | 'MALICIOUS-BEC'
      | 'SUSPICIOUS'
      | 'SPOOF'
      | 'SPAM'
      | 'BULK'
      | 'ENCRYPTED'
      | 'EXTERNAL'
      | 'UNKNOWN'
      | 'NONE'
    >;

    ip_restrictions: Array<string>;

    regions: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

    folder?: 'AllItems' | 'Inbox' | null;

    integration_id?: string | null;

    lookback_hops?: number | null;

    require_tls_inbound?: boolean | null;

    require_tls_outbound?: boolean | null;

    transport?: string | null;
  }

  /**
   * Request body for replacing an email domain. The `domain` field is intentionally
   * absent — the domain name is immutable after creation.
   */
  export interface Put {
    /**
     * Domain identifier.
     */
    id: string;

    allowed_delivery_modes: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

    drop_dispositions: Array<
      | 'MALICIOUS'
      | 'MALICIOUS-BEC'
      | 'SUSPICIOUS'
      | 'SPOOF'
      | 'SPAM'
      | 'BULK'
      | 'ENCRYPTED'
      | 'EXTERNAL'
      | 'UNKNOWN'
      | 'NONE'
    >;

    ip_restrictions: Array<string>;

    regions: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

    folder?: 'AllItems' | 'Inbox' | null;

    integration_id?: string | null;

    lookback_hops?: number | null;

    require_tls_inbound?: boolean | null;

    require_tls_outbound?: boolean | null;

    transport?: string | null;
  }
}

export interface DomainBulkDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface DomainEditParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  /**
   * Body param
   */
  drop_dispositions?: Array<
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
  >;

  /**
   * Body param
   */
  folder?: 'AllItems' | 'Inbox' | null;

  /**
   * Body param
   */
  integration_id?: string | null;

  /**
   * Body param
   */
  ip_restrictions?: Array<string>;

  /**
   * Body param
   */
  lookback_hops?: number;

  /**
   * Body param
   */
  regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  /**
   * Body param
   */
  require_tls_inbound?: boolean;

  /**
   * Body param
   */
  require_tls_outbound?: boolean;

  /**
   * Body param
   */
  transport?: string;
}

export interface DomainGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export declare namespace Domains {
  export {
    type DomainCreateResponse as DomainCreateResponse,
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainBatchResponse as DomainBatchResponse,
    type DomainBulkDeleteResponse as DomainBulkDeleteResponse,
    type DomainEditResponse as DomainEditResponse,
    type DomainGetResponse as DomainGetResponse,
    type DomainListResponsesV4PagePaginationArray as DomainListResponsesV4PagePaginationArray,
    type DomainBulkDeleteResponsesSinglePage as DomainBulkDeleteResponsesSinglePage,
    type DomainCreateParams as DomainCreateParams,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainBatchParams as DomainBatchParams,
    type DomainBulkDeleteParams as DomainBulkDeleteParams,
    type DomainEditParams as DomainEditParams,
    type DomainGetParams as DomainGetParams,
  };
}
