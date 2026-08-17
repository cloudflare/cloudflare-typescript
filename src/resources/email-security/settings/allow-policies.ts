// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAllowPolicies extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings', 'allowPolicies'] = Object.freeze([
    'emailSecurity',
    'settings',
    'allowPolicies',
  ] as const);

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
  create(params: AllowPolicyCreateParams, options?: RequestOptions): APIPromise<AllowPolicyCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/settings/allow_policies`, {
        body,
        ...options,
      }) as APIPromise<{ result: AllowPolicyCreateResponse }>
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
    options?: RequestOptions,
  ): PagePromise<AllowPolicyListResponsesV4PagePaginationArray, AllowPolicyListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/settings/allow_policies`,
      V4PagePaginationArray<AllowPolicyListResponse>,
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
    policyID: string,
    params: AllowPolicyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AllowPolicyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/email-security/settings/allow_policies/${policyID}`,
        options,
      ) as APIPromise<{ result: AllowPolicyDeleteResponse }>
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
    policyID: string,
    params: AllowPolicyEditParams,
    options?: RequestOptions,
  ): APIPromise<AllowPolicyEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/email-security/settings/allow_policies/${policyID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: AllowPolicyEditResponse }>
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
    policyID: string,
    params: AllowPolicyGetParams,
    options?: RequestOptions,
  ): APIPromise<AllowPolicyGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/settings/allow_policies/${policyID}`,
        options,
      ) as APIPromise<{ result: AllowPolicyGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class AllowPolicies extends BaseAllowPolicies {}

export type AllowPolicyListResponsesV4PagePaginationArray = V4PagePaginationArray<AllowPolicyListResponse>;

/**
 * An email allow policy.
 */
export interface AllowPolicyCreateResponse {
  /**
   * Allow policy identifier.
   */
  id: string;

  created_at: string;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified: string;

  comments?: string | null;

  /**
   * Exempts messages from this sender from Spam, Spoof and Bulk dispositions only;
   * Malicious and Suspicious dispositions still apply.
   */
  is_acceptable_sender?: boolean;

  /**
   * Bypasses all detections for messages to this recipient.
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Use `is_exempt_recipient` instead.
   */
  is_recipient?: boolean;

  is_regex?: boolean;

  /**
   * @deprecated Use `is_trusted_sender` instead.
   */
  is_sender?: boolean;

  /**
   * @deprecated Use `is_acceptable_sender` instead.
   */
  is_spoof?: boolean;

  /**
   * Bypasses all detections and link following for messages from this sender.
   */
  is_trusted_sender?: boolean;

  modified_at?: string;

  /**
   * The pattern value to match. The format depends on `pattern_type`: a valid email
   * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
   * (e.g. `example.com`), or a plain IPv4 address or IPv4 CIDR block for IP (e.g.
   * `1.2.3.4` or `1.2.3.0/24`); the API accepts only globally reachable IP addresses
   * and rejects private, loopback, link-local, and unspecified addresses.
   */
  pattern?: string;

  /**
   * Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g.
   *   `1.2.3.0/24`). The API accepts only globally reachable addresses.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender?: boolean;
}

/**
 * An email allow policy.
 */
export interface AllowPolicyListResponse {
  /**
   * Allow policy identifier.
   */
  id: string;

  created_at: string;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified: string;

  comments?: string | null;

  /**
   * Exempts messages from this sender from Spam, Spoof and Bulk dispositions only;
   * Malicious and Suspicious dispositions still apply.
   */
  is_acceptable_sender?: boolean;

  /**
   * Bypasses all detections for messages to this recipient.
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Use `is_exempt_recipient` instead.
   */
  is_recipient?: boolean;

  is_regex?: boolean;

  /**
   * @deprecated Use `is_trusted_sender` instead.
   */
  is_sender?: boolean;

  /**
   * @deprecated Use `is_acceptable_sender` instead.
   */
  is_spoof?: boolean;

  /**
   * Bypasses all detections and link following for messages from this sender.
   */
  is_trusted_sender?: boolean;

  modified_at?: string;

  /**
   * The pattern value to match. The format depends on `pattern_type`: a valid email
   * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
   * (e.g. `example.com`), or a plain IPv4 address or IPv4 CIDR block for IP (e.g.
   * `1.2.3.4` or `1.2.3.0/24`); the API accepts only globally reachable IP addresses
   * and rejects private, loopback, link-local, and unspecified addresses.
   */
  pattern?: string;

  /**
   * Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g.
   *   `1.2.3.0/24`). The API accepts only globally reachable addresses.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
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
   * Allow policy identifier.
   */
  id: string;
}

/**
 * An email allow policy.
 */
export interface AllowPolicyEditResponse {
  /**
   * Allow policy identifier.
   */
  id: string;

  created_at: string;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified: string;

  comments?: string | null;

  /**
   * Exempts messages from this sender from Spam, Spoof and Bulk dispositions only;
   * Malicious and Suspicious dispositions still apply.
   */
  is_acceptable_sender?: boolean;

  /**
   * Bypasses all detections for messages to this recipient.
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Use `is_exempt_recipient` instead.
   */
  is_recipient?: boolean;

  is_regex?: boolean;

  /**
   * @deprecated Use `is_trusted_sender` instead.
   */
  is_sender?: boolean;

  /**
   * @deprecated Use `is_acceptable_sender` instead.
   */
  is_spoof?: boolean;

  /**
   * Bypasses all detections and link following for messages from this sender.
   */
  is_trusted_sender?: boolean;

  modified_at?: string;

  /**
   * The pattern value to match. The format depends on `pattern_type`: a valid email
   * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
   * (e.g. `example.com`), or a plain IPv4 address or IPv4 CIDR block for IP (e.g.
   * `1.2.3.4` or `1.2.3.0/24`); the API accepts only globally reachable IP addresses
   * and rejects private, loopback, link-local, and unspecified addresses.
   */
  pattern?: string;

  /**
   * Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g.
   *   `1.2.3.0/24`). The API accepts only globally reachable addresses.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors
   * policies that pass authentication.
   */
  verify_sender?: boolean;
}

/**
 * An email allow policy.
 */
export interface AllowPolicyGetResponse {
  /**
   * Allow policy identifier.
   */
  id: string;

  created_at: string;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified: string;

  comments?: string | null;

  /**
   * Exempts messages from this sender from Spam, Spoof and Bulk dispositions only;
   * Malicious and Suspicious dispositions still apply.
   */
  is_acceptable_sender?: boolean;

  /**
   * Bypasses all detections for messages to this recipient.
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Use `is_exempt_recipient` instead.
   */
  is_recipient?: boolean;

  is_regex?: boolean;

  /**
   * @deprecated Use `is_trusted_sender` instead.
   */
  is_sender?: boolean;

  /**
   * @deprecated Use `is_acceptable_sender` instead.
   */
  is_spoof?: boolean;

  /**
   * Bypasses all detections and link following for messages from this sender.
   */
  is_trusted_sender?: boolean;

  modified_at?: string;

  /**
   * The pattern value to match. The format depends on `pattern_type`: a valid email
   * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
   * (e.g. `example.com`), or a plain IPv4 address or IPv4 CIDR block for IP (e.g.
   * `1.2.3.4` or `1.2.3.0/24`); the API accepts only globally reachable IP addresses
   * and rejects private, loopback, link-local, and unspecified addresses.
   */
  pattern?: string;

  /**
   * Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g.
   *   `1.2.3.0/24`). The API accepts only globally reachable addresses.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
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
   * Body param: Exempts messages from this sender from Spam, Spoof and Bulk
   * dispositions only; Malicious and Suspicious dispositions still apply.
   */
  is_acceptable_sender: boolean;

  /**
   * Body param: Bypasses all detections for messages to this recipient.
   */
  is_exempt_recipient: boolean;

  /**
   * Body param
   */
  is_regex: boolean;

  /**
   * Body param: Bypasses all detections and link following for messages from this
   * sender.
   */
  is_trusted_sender: boolean;

  /**
   * Body param: The pattern value to match. The format depends on `pattern_type`: a
   * valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for
   * DOMAIN (e.g. `example.com`), or a plain IPv4 address or IPv4 CIDR block for IP
   * (e.g. `1.2.3.4` or `1.2.3.0/24`); the API accepts only globally reachable IP
   * addresses and rejects private, loopback, link-local, and unspecified addresses.
   */
  pattern: string;

  /**
   * Body param: Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g.
   *   `1.2.3.0/24`). The API accepts only globally reachable addresses.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
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
   * @deprecated Use `is_exempt_recipient` instead.
   */
  is_recipient?: boolean;

  /**
   * @deprecated Use `is_trusted_sender` instead.
   */
  is_sender?: boolean;

  /**
   * @deprecated Use `is_acceptable_sender` instead.
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
   * Query param: Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g.
   *   `1.2.3.0/24`). The API accepts only globally reachable addresses.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
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
   * Body param: Exempts messages from this sender from Spam, Spoof and Bulk
   * dispositions only; Malicious and Suspicious dispositions still apply.
   */
  is_acceptable_sender?: boolean;

  /**
   * Body param: Bypasses all detections for messages to this recipient.
   */
  is_exempt_recipient?: boolean;

  /**
   * @deprecated Use `is_exempt_recipient` instead.
   */
  is_recipient?: boolean;

  /**
   * Body param
   */
  is_regex?: boolean;

  /**
   * @deprecated Use `is_trusted_sender` instead.
   */
  is_sender?: boolean;

  /**
   * @deprecated Use `is_acceptable_sender` instead.
   */
  is_spoof?: boolean;

  /**
   * Body param: Bypasses all detections and link following for messages from this
   * sender.
   */
  is_trusted_sender?: boolean;

  /**
   * Body param: The pattern value to match. The format depends on `pattern_type`: a
   * valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for
   * DOMAIN (e.g. `example.com`), or a plain IPv4 address or IPv4 CIDR block for IP
   * (e.g. `1.2.3.4` or `1.2.3.0/24`); the API accepts only globally reachable IP
   * addresses and rejects private, loopback, link-local, and unspecified addresses.
   */
  pattern?: string;

  /**
   * Body param: Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g.
   *   `1.2.3.0/24`). The API accepts only globally reachable addresses.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
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

export declare namespace AllowPolicies {
  export {
    type AllowPolicyCreateResponse as AllowPolicyCreateResponse,
    type AllowPolicyListResponse as AllowPolicyListResponse,
    type AllowPolicyDeleteResponse as AllowPolicyDeleteResponse,
    type AllowPolicyEditResponse as AllowPolicyEditResponse,
    type AllowPolicyGetResponse as AllowPolicyGetResponse,
    type AllowPolicyListResponsesV4PagePaginationArray as AllowPolicyListResponsesV4PagePaginationArray,
    type AllowPolicyCreateParams as AllowPolicyCreateParams,
    type AllowPolicyListParams as AllowPolicyListParams,
    type AllowPolicyDeleteParams as AllowPolicyDeleteParams,
    type AllowPolicyEditParams as AllowPolicyEditParams,
    type AllowPolicyGetParams as AllowPolicyGetParams,
  };
}
