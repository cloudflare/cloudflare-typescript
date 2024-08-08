// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AllowPatternsAPI from './allow-patterns';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class AllowPatterns extends APIResource {
  /**
   * Create an email allow pattern
   */
  create(
    params: AllowPatternCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowPatternCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/settings/allow_patterns`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AllowPatternCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List, search, and sort an accounts's email allow patterns.
   */
  list(
    params: AllowPatternListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AllowPatternListResponsesV4PagePaginationArray, AllowPatternListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/settings/allow_patterns`,
      AllowPatternListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete an email allow pattern
   */
  delete(
    patternId: number,
    params: AllowPatternDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowPatternDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/email-security/settings/allow_patterns/${patternId}`,
        options,
      ) as Core.APIPromise<{ result: AllowPatternDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an email allow pattern
   */
  edit(
    patternId: number,
    params: AllowPatternEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowPatternEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/email-security/settings/allow_patterns/${patternId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AllowPatternEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an email allow pattern
   */
  get(
    patternId: number,
    params: AllowPatternGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowPatternGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/settings/allow_patterns/${patternId}`,
        options,
      ) as Core.APIPromise<{ result: AllowPatternGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AllowPatternListResponsesV4PagePaginationArray extends V4PagePaginationArray<AllowPatternListResponse> {}

export type AllowPatternCreateResponse =
  | AllowPatternCreateResponse.EmailSecurityAllowPattern
  | Array<AllowPatternCreateResponse.UnionMember1>;

export namespace AllowPatternCreateResponse {
  export interface EmailSecurityAllowPattern {
    id: number;

    created_at: string;

    is_recipient: boolean;

    is_regex: boolean;

    is_sender: boolean;

    is_spoof: boolean;

    last_modified: string;

    pattern: string;

    pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

    verify_sender: boolean;

    comments?: string | null;
  }

  export interface UnionMember1 {
    id: number;

    created_at: string;

    is_recipient: boolean;

    is_regex: boolean;

    is_sender: boolean;

    is_spoof: boolean;

    last_modified: string;

    pattern: string;

    pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

    verify_sender: boolean;

    comments?: string | null;
  }
}

export interface AllowPatternListResponse {
  id: number;

  created_at: string;

  is_recipient: boolean;

  is_regex: boolean;

  is_sender: boolean;

  is_spoof: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  verify_sender: boolean;

  comments?: string | null;
}

export interface AllowPatternDeleteResponse {
  id: number;
}

export interface AllowPatternEditResponse {
  id: number;

  created_at: string;

  is_recipient: boolean;

  is_regex: boolean;

  is_sender: boolean;

  is_spoof: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  verify_sender: boolean;

  comments?: string | null;
}

export interface AllowPatternGetResponse {
  id: number;

  created_at: string;

  is_recipient: boolean;

  is_regex: boolean;

  is_sender: boolean;

  is_spoof: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  verify_sender: boolean;

  comments?: string | null;
}

export type AllowPatternCreateParams =
  | AllowPatternCreateParams.EmailSecurityCreateAllowPattern
  | AllowPatternCreateParams.Variant1;

export namespace AllowPatternCreateParams {
  export interface EmailSecurityCreateAllowPattern {
    /**
     * Path param: Account Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    is_recipient: boolean;

    /**
     * Body param:
     */
    is_regex: boolean;

    /**
     * Body param:
     */
    is_sender: boolean;

    /**
     * Body param:
     */
    is_spoof: boolean;

    /**
     * Body param:
     */
    pattern: string;

    /**
     * Body param:
     */
    pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

    /**
     * Body param:
     */
    verify_sender: boolean;

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
    body: Array<AllowPatternCreateParams.Variant1.Body>;
  }

  export namespace Variant1 {
    export interface Body {
      is_recipient: boolean;

      is_regex: boolean;

      is_sender: boolean;

      is_spoof: boolean;

      pattern: string;

      pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

      verify_sender: boolean;

      comments?: string | null;
    }
  }
}

export interface AllowPatternListParams extends V4PagePaginationArrayParams {
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
  is_recipient?: boolean;

  /**
   * Query param:
   */
  is_sender?: boolean;

  /**
   * Query param:
   */
  is_spoof?: boolean;

  /**
   * Query param: The field to sort by.
   */
  order?: 'pattern' | 'created_at';

  /**
   * Query param:
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Query param: Allows searching in multiple properties of a record simultaneously.
   * This parameter is intended for human users, not automation. Its exact behavior
   * is intentionally left unspecified and is subject to change in the future.
   */
  search?: string;

  /**
   * Query param:
   */
  verify_sender?: boolean;
}

export interface AllowPatternDeleteParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface AllowPatternEditParams {
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
  is_recipient?: boolean | null;

  /**
   * Body param:
   */
  is_regex?: boolean | null;

  /**
   * Body param:
   */
  is_sender?: boolean | null;

  /**
   * Body param:
   */
  is_spoof?: boolean | null;

  /**
   * Body param:
   */
  pattern?: string | null;

  /**
   * Body param:
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN' | null;

  /**
   * Body param:
   */
  verify_sender?: boolean | null;
}

export interface AllowPatternGetParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export namespace AllowPatterns {
  export import AllowPatternCreateResponse = AllowPatternsAPI.AllowPatternCreateResponse;
  export import AllowPatternListResponse = AllowPatternsAPI.AllowPatternListResponse;
  export import AllowPatternDeleteResponse = AllowPatternsAPI.AllowPatternDeleteResponse;
  export import AllowPatternEditResponse = AllowPatternsAPI.AllowPatternEditResponse;
  export import AllowPatternGetResponse = AllowPatternsAPI.AllowPatternGetResponse;
  export import AllowPatternListResponsesV4PagePaginationArray = AllowPatternsAPI.AllowPatternListResponsesV4PagePaginationArray;
  export import AllowPatternCreateParams = AllowPatternsAPI.AllowPatternCreateParams;
  export import AllowPatternListParams = AllowPatternsAPI.AllowPatternListParams;
  export import AllowPatternDeleteParams = AllowPatternsAPI.AllowPatternDeleteParams;
  export import AllowPatternEditParams = AllowPatternsAPI.AllowPatternEditParams;
  export import AllowPatternGetParams = AllowPatternsAPI.AllowPatternGetParams;
}
