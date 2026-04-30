// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Domains extends APIResource {
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<DomainListResponsesV4PagePaginationArray, DomainListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/settings/domains`,
      DomainListResponsesV4PagePaginationArray,
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
    domainId: string,
    params: DomainDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/email-security/settings/domains/${domainId}`,
        options,
      ) as Core.APIPromise<{ result: DomainDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
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
  edit(
    domainId: string,
    params: DomainEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/email-security/settings/domains/${domainId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DomainEditResponse }>
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
  get(
    domainId: string,
    params: DomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/settings/domains/${domainId}`,
        options,
      ) as Core.APIPromise<{ result: DomainGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DomainListResponsesV4PagePaginationArray extends V4PagePaginationArray<DomainListResponse> {}

export interface DomainListResponse {
  /**
   * Domain identifier
   */
  id?: string;

  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  authorization?: DomainListResponse.Authorization;

  created_at?: string;

  dmarc_status?: 'none' | 'good' | 'invalid';

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

  folder?: 'AllItems' | 'Inbox';

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  ip_restrictions?: Array<string>;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  lookback_hops?: number;

  modified_at?: string;

  o365_tenant_id?: string | null;

  regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;

  spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid';

  status?: 'pending' | 'active' | 'failed' | 'timeout';

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
   * Domain identifier
   */
  id: string;
}

export interface DomainEditResponse {
  /**
   * Domain identifier
   */
  id?: string;

  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  authorization?: DomainEditResponse.Authorization;

  created_at?: string;

  dmarc_status?: 'none' | 'good' | 'invalid';

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

  folder?: 'AllItems' | 'Inbox';

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  ip_restrictions?: Array<string>;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  lookback_hops?: number;

  modified_at?: string;

  o365_tenant_id?: string | null;

  regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;

  spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid';

  status?: 'pending' | 'active' | 'failed' | 'timeout';

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
   * Domain identifier
   */
  id?: string;

  allowed_delivery_modes?: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  authorization?: DomainGetResponse.Authorization;

  created_at?: string;

  dmarc_status?: 'none' | 'good' | 'invalid';

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

  folder?: 'AllItems' | 'Inbox';

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  ip_restrictions?: Array<string>;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  lookback_hops?: number;

  modified_at?: string;

  o365_tenant_id?: string | null;

  regions?: Array<'GLOBAL' | 'AU' | 'DE' | 'IN' | 'US'>;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;

  spf_status?: 'none' | 'good' | 'neutral' | 'open' | 'invalid';

  status?: 'pending' | 'active' | 'failed' | 'timeout';

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
  status?: 'pending' | 'active' | 'failed' | 'timeout';
}

export interface DomainDeleteParams {
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
  domain?: string;

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
  folder?: 'AllItems' | 'Inbox';

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

Domains.DomainListResponsesV4PagePaginationArray = DomainListResponsesV4PagePaginationArray;

export declare namespace Domains {
  export {
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainEditResponse as DomainEditResponse,
    type DomainGetResponse as DomainGetResponse,
    DomainListResponsesV4PagePaginationArray as DomainListResponsesV4PagePaginationArray,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainEditParams as DomainEditParams,
    type DomainGetParams as DomainGetParams,
  };
}
