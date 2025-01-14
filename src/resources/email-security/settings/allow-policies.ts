// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class AllowPolicies extends APIResource {
  /**
   * Create an email allow policy
   */
  create(
    params: AllowPolicyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowPolicyCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/settings/allow_policies`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AllowPolicyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists, searches, and sorts an account’s email allow policies.
   */
  list(
    params: AllowPolicyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AllowPolicyListResponsesV4PagePaginationArray, AllowPolicyListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/settings/allow_policies`,
      AllowPolicyListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete an email allow policy
   */
  delete(
    policyId: number,
    params: AllowPolicyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowPolicyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/email-security/settings/allow_policies/${policyId}`,
        options,
      ) as Core.APIPromise<{ result: AllowPolicyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an email allow policy
   */
  edit(
    policyId: number,
    params: AllowPolicyEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowPolicyEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/email-security/settings/allow_policies/${policyId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AllowPolicyEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an email allow policy
   */
  get(
    policyId: number,
    params: AllowPolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowPolicyGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/settings/allow_policies/${policyId}`,
        options,
      ) as Core.APIPromise<{ result: AllowPolicyGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AllowPolicyListResponsesV4PagePaginationArray extends V4PagePaginationArray<AllowPolicyListResponse> {}

export interface AllowPolicyCreateResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;

  created_at: string;

  /**
   * Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note: This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender: boolean;

  /**
   * Messages to this recipient will bypass all detections.
   */
  is_exempt_recipient: boolean;

  is_regex: boolean;

  /**
   * Messages from this sender will bypass all detections and link following.
   */
  is_trusted_sender: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender: boolean;

  comments?: string | null;

  /**
   * @deprecated
   */
  is_recipient?: boolean;

  /**
   * @deprecated
   */
  is_sender?: boolean;

  /**
   * @deprecated
   */
  is_spoof?: boolean;
}

export interface AllowPolicyListResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;

  created_at: string;

  /**
   * Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note: This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender: boolean;

  /**
   * Messages to this recipient will bypass all detections.
   */
  is_exempt_recipient: boolean;

  is_regex: boolean;

  /**
   * Messages from this sender will bypass all detections and link following.
   */
  is_trusted_sender: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender: boolean;

  comments?: string | null;

  /**
   * @deprecated
   */
  is_recipient?: boolean;

  /**
   * @deprecated
   */
  is_sender?: boolean;

  /**
   * @deprecated
   */
  is_spoof?: boolean;
}

export interface AllowPolicyDeleteResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;
}

export interface AllowPolicyEditResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;

  created_at: string;

  /**
   * Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note: This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender: boolean;

  /**
   * Messages to this recipient will bypass all detections.
   */
  is_exempt_recipient: boolean;

  is_regex: boolean;

  /**
   * Messages from this sender will bypass all detections and link following.
   */
  is_trusted_sender: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender: boolean;

  comments?: string | null;

  /**
   * @deprecated
   */
  is_recipient?: boolean;

  /**
   * @deprecated
   */
  is_sender?: boolean;

  /**
   * @deprecated
   */
  is_spoof?: boolean;
}

export interface AllowPolicyGetResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;

  created_at: string;

  /**
   * Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note: This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender: boolean;

  /**
   * Messages to this recipient will bypass all detections.
   */
  is_exempt_recipient: boolean;

  is_regex: boolean;

  /**
   * Messages from this sender will bypass all detections and link following.
   */
  is_trusted_sender: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender: boolean;

  comments?: string | null;

  /**
   * @deprecated
   */
  is_recipient?: boolean;

  /**
   * @deprecated
   */
  is_sender?: boolean;

  /**
   * @deprecated
   */
  is_spoof?: boolean;
}

export interface AllowPolicyCreateParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param: Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note: This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender: boolean;

  /**
   * Body param: Messages to this recipient will bypass all detections.
   */
  is_exempt_recipient: boolean;

  /**
   * Body param:
   */
  is_regex: boolean;

  /**
   * Body param: Messages from this sender will bypass all detections and link
   * following.
   */
  is_trusted_sender: boolean;

  /**
   * Body param:
   */
  pattern: string;

  /**
   * Body param:
   */
  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Body param: Enforce DMARC, SPF or DKIM authentication. When on, Email Security
   * only honors policies that pass authentication.
   */
  verify_sender: boolean;

  /**
   * Body param:
   */
  comments?: string | null;

  /**
   * Body param:
   */
  is_recipient?: boolean;

  /**
   * Body param:
   */
  is_sender?: boolean;

  /**
   * Body param:
   */
  is_spoof?: boolean;
}

export interface AllowPolicyListParams extends V4PagePaginationArrayParams {
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
  is_acceptable_sender?: boolean;

  /**
   * Query param:
   */
  is_exempt_recipient?: boolean;

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
   * Query param:
   */
  is_trusted_sender?: boolean;

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

export interface AllowPolicyDeleteParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface AllowPolicyEditParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  comments?: string | null;

  /**
   * Body param: Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note: This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender?: boolean | null;

  /**
   * Body param: Messages to this recipient will bypass all detections.
   */
  is_exempt_recipient?: boolean | null;

  /**
   * Body param:
   */
  is_regex?: boolean | null;

  /**
   * Body param: Messages from this sender will bypass all detections and link
   * following.
   */
  is_trusted_sender?: boolean | null;

  /**
   * Body param:
   */
  pattern?: string | null;

  /**
   * Body param:
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN' | null;

  /**
   * Body param: Enforce DMARC, SPF or DKIM authentication. When on, Email Security
   * only honors policies that pass authentication.
   */
  verify_sender?: boolean | null;
}

export interface AllowPolicyGetParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

AllowPolicies.AllowPolicyListResponsesV4PagePaginationArray = AllowPolicyListResponsesV4PagePaginationArray;

export declare namespace AllowPolicies {
  export {
    type AllowPolicyCreateResponse as AllowPolicyCreateResponse,
    type AllowPolicyListResponse as AllowPolicyListResponse,
    type AllowPolicyDeleteResponse as AllowPolicyDeleteResponse,
    type AllowPolicyEditResponse as AllowPolicyEditResponse,
    type AllowPolicyGetResponse as AllowPolicyGetResponse,
    AllowPolicyListResponsesV4PagePaginationArray as AllowPolicyListResponsesV4PagePaginationArray,
    type AllowPolicyCreateParams as AllowPolicyCreateParams,
    type AllowPolicyListParams as AllowPolicyListParams,
    type AllowPolicyDeleteParams as AllowPolicyDeleteParams,
    type AllowPolicyEditParams as AllowPolicyEditParams,
    type AllowPolicyGetParams as AllowPolicyGetParams,
  };
}
