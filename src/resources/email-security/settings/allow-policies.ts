// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class AllowPolicies extends APIResource {
  /**
   * Creates a new allow policy that exempts matching emails from security
   * detections. Use with caution as this bypasses email security scanning. Policies
   * can match on sender patterns and apply to specific detections or all detections.
   *
   * @example
   * ```ts
   * const allowPolicy =
   *   await client.emailSecurity.settings.allowPolicies.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     is_acceptable_sender: false,
   *     is_exempt_recipient: false,
   *     is_regex: false,
   *     is_trusted_sender: true,
   *     pattern: 'test@example.com',
   *     pattern_type: 'EMAIL',
   *     verify_sender: true,
   *   });
   * ```
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
   * Returns a paginated list of email allow policies. These policies exempt matching
   * emails from security detection, allowing them to bypass disposition actions.
   * Supports filtering by pattern type and policy attributes.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const allowPolicyListResponse of client.emailSecurity.settings.allowPolicies.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
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
   * Removes an allow policy. After deletion, emails matching this pattern will be
   * subject to normal security scanning and disposition actions.
   *
   * @example
   * ```ts
   * const allowPolicy =
   *   await client.emailSecurity.settings.allowPolicies.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    policyId: string,
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
   * Updates an existing allow policy. Only provided fields will be modified. Changes
   * take effect for new emails matching the pattern.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.allowPolicies.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    policyId: string,
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
   * Retrieves details for a specific allow policy including its pattern,
   * dispositions that are exempted, and whether it applies to all detections.
   *
   * @example
   * ```ts
   * const allowPolicy =
   *   await client.emailSecurity.settings.allowPolicies.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    policyId: string,
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

/**
 * An email allow policy
 */
export interface AllowPolicyCreateResponse {
  /**
   * Allow policy identifier
   */
  id: string;

  created_at: string;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified: string;

  comments?: string | null;

  /**
   * Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note - This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender?: boolean;

  /**
   * Messages to this recipient will bypass all detections
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead.
   * End of life: July 1, 2026.
   */
  is_recipient?: boolean;

  is_regex?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End
   * of life: July 1, 2026.
   */
  is_sender?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead.
   * End of life: July 1, 2026.
   */
  is_spoof?: boolean;

  /**
   * Messages from this sender will bypass all detections and link following
   */
  is_trusted_sender?: boolean;

  modified_at?: string;

  pattern?: string;

  /**
   * Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when
   * creating or updating policies, but may be returned for existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender?: boolean;
}

/**
 * An email allow policy
 */
export interface AllowPolicyListResponse {
  /**
   * Allow policy identifier
   */
  id: string;

  created_at: string;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified: string;

  comments?: string | null;

  /**
   * Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note - This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender?: boolean;

  /**
   * Messages to this recipient will bypass all detections
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead.
   * End of life: July 1, 2026.
   */
  is_recipient?: boolean;

  is_regex?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End
   * of life: July 1, 2026.
   */
  is_sender?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead.
   * End of life: July 1, 2026.
   */
  is_spoof?: boolean;

  /**
   * Messages from this sender will bypass all detections and link following
   */
  is_trusted_sender?: boolean;

  modified_at?: string;

  pattern?: string;

  /**
   * Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when
   * creating or updating policies, but may be returned for existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender?: boolean;
}

export interface AllowPolicyDeleteResponse {
  /**
   * Allow policy identifier
   */
  id: string;
}

/**
 * An email allow policy
 */
export interface AllowPolicyEditResponse {
  /**
   * Allow policy identifier
   */
  id: string;

  created_at: string;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified: string;

  comments?: string | null;

  /**
   * Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note - This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender?: boolean;

  /**
   * Messages to this recipient will bypass all detections
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead.
   * End of life: July 1, 2026.
   */
  is_recipient?: boolean;

  is_regex?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End
   * of life: July 1, 2026.
   */
  is_sender?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead.
   * End of life: July 1, 2026.
   */
  is_spoof?: boolean;

  /**
   * Messages from this sender will bypass all detections and link following
   */
  is_trusted_sender?: boolean;

  modified_at?: string;

  pattern?: string;

  /**
   * Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when
   * creating or updating policies, but may be returned for existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender?: boolean;
}

/**
 * An email allow policy
 */
export interface AllowPolicyGetResponse {
  /**
   * Allow policy identifier
   */
  id: string;

  created_at: string;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified: string;

  comments?: string | null;

  /**
   * Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note - This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender?: boolean;

  /**
   * Messages to this recipient will bypass all detections
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead.
   * End of life: July 1, 2026.
   */
  is_recipient?: boolean;

  is_regex?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End
   * of life: July 1, 2026.
   */
  is_sender?: boolean;

  /**
   * @deprecated Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead.
   * End of life: July 1, 2026.
   */
  is_spoof?: boolean;

  /**
   * Messages from this sender will bypass all detections and link following
   */
  is_trusted_sender?: boolean;

  modified_at?: string;

  pattern?: string;

  /**
   * Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when
   * creating or updating policies, but may be returned for existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender?: boolean;
}

export interface AllowPolicyCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note - This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender: boolean;

  /**
   * Body param: Messages to this recipient will bypass all detections
   */
  is_exempt_recipient: boolean;

  /**
   * Body param
   */
  is_regex: boolean;

  /**
   * Body param: Messages from this sender will bypass all detections and link
   * following
   */
  is_trusted_sender: boolean;

  /**
   * Body param
   */
  pattern: string;

  /**
   * Body param: Type of pattern matching. Note: UNKNOWN is deprecated and cannot be
   * used when creating or updating policies, but may be returned for existing
   * entries.
   */
  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Body param: Enforce DMARC, SPF or DKIM authentication. When on, Email Security
   * only honors policies that pass authentication.
   */
  verify_sender: boolean;

  /**
   * Body param
   */
  comments?: string | null;

  /**
   * @deprecated Body param: Deprecated as of July 1, 2025. Use `is_exempt_recipient`
   * instead. End of life: July 1, 2026.
   */
  is_recipient?: boolean;

  /**
   * @deprecated Body param: Deprecated as of July 1, 2025. Use `is_trusted_sender`
   * instead. End of life: July 1, 2026.
   */
  is_sender?: boolean;

  /**
   * @deprecated Body param: Deprecated as of July 1, 2025. Use
   * `is_acceptable_sender` instead. End of life: July 1, 2026.
   */
  is_spoof?: boolean;
}

export interface AllowPolicyListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter to show only policies where messages from the sender are
   * exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).
   */
  is_acceptable_sender?: boolean;

  /**
   * Query param: Filter to show only policies where messages to the recipient bypass
   * all detections.
   */
  is_exempt_recipient?: boolean;

  /**
   * Query param: Filter to show only policies where messages from the sender bypass
   * all detections and link following.
   */
  is_trusted_sender?: boolean;

  /**
   * Query param: Field to sort by.
   */
  order?: 'pattern' | 'created_at';

  /**
   * Query param
   */
  pattern?: string;

  /**
   * Query param: Type of pattern matching. Note: UNKNOWN is deprecated and cannot be
   * used when creating or updating policies, but may be returned for existing
   * entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Query param: Search term for filtering records. Behavior may change.
   */
  search?: string;

  /**
   * Query param: Filter to show only policies that enforce DMARC, SPF, or DKIM
   * authentication.
   */
  verify_sender?: boolean;
}

export interface AllowPolicyDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface AllowPolicyEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  comments?: string | null;

  /**
   * Body param: Messages from this sender will be exempted from Spam, Spoof and Bulk
   * dispositions. Note - This will not exempt messages with Malicious or Suspicious
   * dispositions.
   */
  is_acceptable_sender?: boolean;

  /**
   * Body param: Messages to this recipient will bypass all detections
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Body param: Deprecated as of July 1, 2025. Use `is_exempt_recipient`
   * instead. End of life: July 1, 2026.
   */
  is_recipient?: boolean;

  /**
   * Body param
   */
  is_regex?: boolean;

  /**
   * @deprecated Body param: Deprecated as of July 1, 2025. Use `is_trusted_sender`
   * instead. End of life: July 1, 2026.
   */
  is_sender?: boolean;

  /**
   * @deprecated Body param: Deprecated as of July 1, 2025. Use
   * `is_acceptable_sender` instead. End of life: July 1, 2026.
   */
  is_spoof?: boolean;

  /**
   * Body param: Messages from this sender will bypass all detections and link
   * following
   */
  is_trusted_sender?: boolean;

  /**
   * Body param
   */
  pattern?: string;

  /**
   * Body param: Type of pattern matching. Note: UNKNOWN is deprecated and cannot be
   * used when creating or updating policies, but may be returned for existing
   * entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Body param: Enforce DMARC, SPF or DKIM authentication. When on, Email Security
   * only honors policies that pass authentication.
   */
  verify_sender?: boolean;
}

export interface AllowPolicyGetParams {
  /**
   * Identifier.
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
