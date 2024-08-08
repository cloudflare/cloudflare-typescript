// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DomainsAPI from './domains';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Domains extends APIResource {
  /**
   * List, search, and sort an account's email domains.
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
}

export class DomainListResponsesV4PagePaginationArray extends V4PagePaginationArray<DomainListResponse> {}

export interface DomainListResponse {
  /**
   * Unique domain identifier
   */
  id: number;

  allowed_delivery_modes: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  created_at: string;

  domain: string;

  last_modified: string;

  lookback_hops: number;

  integration_id?: string | null;

  o365_tenant_id?: string | null;
}

export interface DomainDeleteResponse {
  /**
   * Unique domain identifier
   */
  id: number;
}

export interface DomainEditResponse {
  /**
   * Unique domain identifier
   */
  id: number;

  allowed_delivery_modes: Array<'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN'>;

  created_at: string;

  domain: string;

  last_modified: string;

  lookback_hops: number;

  integration_id?: string | null;

  o365_tenant_id?: string | null;
}

export interface DomainListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param: If present, the response contains only domains with the provided
   * delivery mode.
   */
  allowed_delivery_mode?: 'DIRECT' | 'BCC' | 'JOURNAL' | 'API' | 'RETRO_SCAN';

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter result by the provided domains. Allows for multiple
   * occurrences, e.g., `domain=example.com&domain=example.xyz`.
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

export interface DomainEditParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  domain?: string | null;

  /**
   * Body param:
   */
  lookback_hops?: number | null;
}

export namespace Domains {
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainEditResponse = DomainsAPI.DomainEditResponse;
  export import DomainListResponsesV4PagePaginationArray = DomainsAPI.DomainListResponsesV4PagePaginationArray;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export import DomainEditParams = DomainsAPI.DomainEditParams;
}
