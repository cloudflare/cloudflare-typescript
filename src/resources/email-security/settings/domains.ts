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
   * Removes protection from multiple email domains. Deprecated; use the batch
   * endpoint instead.
   *
   * @deprecated
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

export interface DomainListResponse {
  /**
   * Domain identifier.
   */
  id?: string;

  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  authorization?: DomainListResponse.Authorization;

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

  emails_processed?: DomainListResponse.EmailsProcessed;

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

  status?: 'pending' | 'active' | 'failed' | 'timeout' | null;

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

  authorization?: DomainEditResponse.Authorization;

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

  emails_processed?: DomainEditResponse.EmailsProcessed;

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

  status?: 'pending' | 'active' | 'failed' | 'timeout' | null;

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

  authorization?: DomainGetResponse.Authorization;

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

  emails_processed?: DomainGetResponse.EmailsProcessed;

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

  status?: 'pending' | 'active' | 'failed' | 'timeout' | null;

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

export interface DomainListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
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
  status?: 'pending' | 'active' | 'failed' | 'timeout' | null;
}

export interface DomainDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DomainBulkDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DomainEditParams {
  /**
   * Path param: Identifier.
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
   * Identifier.
   */
  account_id: string;
}

export declare namespace Domains {
  export {
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainBulkDeleteResponse as DomainBulkDeleteResponse,
    type DomainEditResponse as DomainEditResponse,
    type DomainGetResponse as DomainGetResponse,
    type DomainListResponsesV4PagePaginationArray as DomainListResponsesV4PagePaginationArray,
    type DomainBulkDeleteResponsesSinglePage as DomainBulkDeleteResponsesSinglePage,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainBulkDeleteParams as DomainBulkDeleteParams,
    type DomainEditParams as DomainEditParams,
    type DomainGetParams as DomainGetParams,
  };
}
