// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Domains extends APIResource {
  /**
   * Lists, searches, and sorts an account’s email domains.
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
   * Unprotect an email domain
   */
  delete(
    domainId: number,
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
   * Unprotect multiple email domains
   */
  bulkDelete(
    params: DomainBulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DomainBulkDeleteResponsesSinglePage, DomainBulkDeleteResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/settings/domains`,
      DomainBulkDeleteResponsesSinglePage,
      { method: 'delete', ...options },
    );
  }

  /**
   * Update an email domain
   */
  edit(
    domainId: number,
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
   * Get an email domain
   */
  get(
    domainId: number,
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

export class DomainBulkDeleteResponsesSinglePage extends SinglePage<DomainBulkDeleteResponse> {}

export interface DomainListResponse {
  /**
   * The unique identifier for the domain.
   */
  id: number;

  allowed_delivery_modes: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  created_at: string;

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

  last_modified: string;

  lookback_hops: number;

  transport: string;

  authorization?: DomainListResponse.Authorization | null;

  emails_processed?: DomainListResponse.EmailsProcessed | null;

  folder?: 'AllItems' | 'Inbox' | null;

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  o365_tenant_id?: string | null;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;
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
   * The unique identifier for the domain.
   */
  id: number;
}

export interface DomainBulkDeleteResponse {
  /**
   * The unique identifier for the domain.
   */
  id: number;
}

export interface DomainEditResponse {
  /**
   * The unique identifier for the domain.
   */
  id: number;

  allowed_delivery_modes: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  created_at: string;

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

  last_modified: string;

  lookback_hops: number;

  transport: string;

  authorization?: DomainEditResponse.Authorization | null;

  emails_processed?: DomainEditResponse.EmailsProcessed | null;

  folder?: 'AllItems' | 'Inbox' | null;

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  o365_tenant_id?: string | null;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;
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
   * The unique identifier for the domain.
   */
  id: number;

  allowed_delivery_modes: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  created_at: string;

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

  last_modified: string;

  lookback_hops: number;

  transport: string;

  authorization?: DomainGetResponse.Authorization | null;

  emails_processed?: DomainGetResponse.EmailsProcessed | null;

  folder?: 'AllItems' | 'Inbox' | null;

  inbox_provider?: 'Microsoft' | 'Google' | null;

  integration_id?: string | null;

  o365_tenant_id?: string | null;

  require_tls_inbound?: boolean | null;

  require_tls_outbound?: boolean | null;
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
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param: Filters response to domains with the currently active delivery
   * mode.
   */
  active_delivery_mode?: 'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN';

  /**
   * Query param: Filters response to domains with the provided delivery mode.
   */
  allowed_delivery_mode?: 'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN';

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filters results by the provided domains, allowing for multiple
   * occurrences.
   */
  domain?: Array<string>;

  /**
   * Query param: The field to sort by.
   */
  order?: 'domain' | 'created_at';

  /**
   * Query param: Allows searching in multiple properties of a record simultaneously.
   * This parameter is intended for human users, not automation. Its exact behavior
   * is intentionally left unspecified and is subject to change in the future.
   */
  search?: string;
}

export interface DomainDeleteParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface DomainBulkDeleteParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface DomainEditParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  ip_restrictions: Array<string>;

  /**
   * Body param:
   */
  domain?: string | null;

  /**
   * Body param:
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
   * Body param:
   */
  folder?: 'AllItems' | 'Inbox';

  /**
   * Body param:
   */
  integration_id?: string | null;

  /**
   * Body param:
   */
  lookback_hops?: number | null;

  /**
   * Body param:
   */
  require_tls_inbound?: boolean;

  /**
   * Body param:
   */
  require_tls_outbound?: boolean;

  /**
   * Body param:
   */
  transport?: string;
}

export interface DomainGetParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

Domains.DomainListResponsesV4PagePaginationArray = DomainListResponsesV4PagePaginationArray;
Domains.DomainBulkDeleteResponsesSinglePage = DomainBulkDeleteResponsesSinglePage;

export declare namespace Domains {
  export {
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainBulkDeleteResponse as DomainBulkDeleteResponse,
    type DomainEditResponse as DomainEditResponse,
    type DomainGetResponse as DomainGetResponse,
    DomainListResponsesV4PagePaginationArray as DomainListResponsesV4PagePaginationArray,
    DomainBulkDeleteResponsesSinglePage as DomainBulkDeleteResponsesSinglePage,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainBulkDeleteParams as DomainBulkDeleteParams,
    type DomainEditParams as DomainEditParams,
    type DomainGetParams as DomainGetParams,
  };
}
