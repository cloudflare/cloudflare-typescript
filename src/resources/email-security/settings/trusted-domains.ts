// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TrustedDomainsAPI from './trusted-domains';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class TrustedDomains extends APIResource {
  /**
   * Create a trusted email domain
   */
  create(
    params: TrustedDomainCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrustedDomainCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/settings/trusted_domains`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TrustedDomainCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List, search, and sort an account's trusted email domains.
   */
  list(
    params: TrustedDomainListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TrustedDomainListResponsesV4PagePaginationArray, TrustedDomainListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/settings/trusted_domains`,
      TrustedDomainListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a trusted email domain
   */
  delete(
    patternId: number,
    params: TrustedDomainDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrustedDomainDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/email-security/settings/trusted_domains/${patternId}`,
        options,
      ) as Core.APIPromise<{ result: TrustedDomainDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a trusted email domain
   */
  edit(
    patternId: number,
    params: TrustedDomainEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrustedDomainEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/email-security/settings/trusted_domains/${patternId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TrustedDomainEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a trusted email domain
   */
  get(
    patternId: number,
    params: TrustedDomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrustedDomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/settings/trusted_domains/${patternId}`,
        options,
      ) as Core.APIPromise<{ result: TrustedDomainGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TrustedDomainListResponsesV4PagePaginationArray extends V4PagePaginationArray<TrustedDomainListResponse> {}

export type TrustedDomainCreateResponse =
  | TrustedDomainCreateResponse.EmailSecurityTrustedDomain
  | Array<TrustedDomainCreateResponse.UnionMember1>;

export namespace TrustedDomainCreateResponse {
  export interface EmailSecurityTrustedDomain {
    id: number;

    created_at: string;

    is_recent: boolean;

    is_regex: boolean;

    is_similarity: boolean;

    last_modified: string;

    pattern: string;

    comments?: string | null;
  }

  export interface UnionMember1 {
    id: number;

    created_at: string;

    is_recent: boolean;

    is_regex: boolean;

    is_similarity: boolean;

    last_modified: string;

    pattern: string;

    comments?: string | null;
  }
}

export interface TrustedDomainListResponse {
  id: number;

  created_at: string;

  is_recent: boolean;

  is_regex: boolean;

  is_similarity: boolean;

  last_modified: string;

  pattern: string;

  comments?: string | null;
}

export interface TrustedDomainDeleteResponse {
  id: number;
}

export interface TrustedDomainEditResponse {
  id: number;

  created_at: string;

  is_recent: boolean;

  is_regex: boolean;

  is_similarity: boolean;

  last_modified: string;

  pattern: string;

  comments?: string | null;
}

export interface TrustedDomainGetResponse {
  id: number;

  created_at: string;

  is_recent: boolean;

  is_regex: boolean;

  is_similarity: boolean;

  last_modified: string;

  pattern: string;

  comments?: string | null;
}

export type TrustedDomainCreateParams =
  | TrustedDomainCreateParams.EmailSecurityCreateTrustedDomain
  | TrustedDomainCreateParams.Variant1;

export namespace TrustedDomainCreateParams {
  export interface EmailSecurityCreateTrustedDomain {
    /**
     * Path param: Account Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    is_recent: boolean;

    /**
     * Body param:
     */
    is_regex: boolean;

    /**
     * Body param:
     */
    is_similarity: boolean;

    /**
     * Body param:
     */
    pattern: string;

    /**
     * Body param:
     */
    comments?: string | null;
  }

  export interface Variant1 {
    /**
     * Path param: Account Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: Array<TrustedDomainCreateParams.Variant1.Body>;
  }

  export namespace Variant1 {
    export interface Body {
      is_recent: boolean;

      is_regex: boolean;

      is_similarity: boolean;

      pattern: string;

      comments?: string | null;
    }
  }
}

export interface TrustedDomainListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param:
   */
  is_recent?: boolean;

  /**
   * Query param:
   */
  is_similarity?: boolean;

  /**
   * Query param: The field to sort by.
   */
  order?: 'pattern' | 'created_at';

  /**
   * Query param: Allows searching in multiple properties of a record simultaneously.
   * This parameter is intended for human users, not automation. Its exact behavior
   * is intentionally left unspecified and is subject to change in the future.
   */
  search?: string;
}

export interface TrustedDomainDeleteParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface TrustedDomainEditParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  comments?: string | null;

  /**
   * Body param:
   */
  is_recent?: boolean | null;

  /**
   * Body param:
   */
  is_regex?: boolean | null;

  /**
   * Body param:
   */
  is_similarity?: boolean | null;

  /**
   * Body param:
   */
  pattern?: string | null;
}

export interface TrustedDomainGetParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export namespace TrustedDomains {
  export import TrustedDomainCreateResponse = TrustedDomainsAPI.TrustedDomainCreateResponse;
  export import TrustedDomainListResponse = TrustedDomainsAPI.TrustedDomainListResponse;
  export import TrustedDomainDeleteResponse = TrustedDomainsAPI.TrustedDomainDeleteResponse;
  export import TrustedDomainEditResponse = TrustedDomainsAPI.TrustedDomainEditResponse;
  export import TrustedDomainGetResponse = TrustedDomainsAPI.TrustedDomainGetResponse;
  export import TrustedDomainListResponsesV4PagePaginationArray = TrustedDomainsAPI.TrustedDomainListResponsesV4PagePaginationArray;
  export import TrustedDomainCreateParams = TrustedDomainsAPI.TrustedDomainCreateParams;
  export import TrustedDomainListParams = TrustedDomainsAPI.TrustedDomainListParams;
  export import TrustedDomainDeleteParams = TrustedDomainsAPI.TrustedDomainDeleteParams;
  export import TrustedDomainEditParams = TrustedDomainsAPI.TrustedDomainEditParams;
  export import TrustedDomainGetParams = TrustedDomainsAPI.TrustedDomainGetParams;
}
