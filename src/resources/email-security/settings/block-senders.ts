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

export class BaseBlockSenders extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings', 'blockSenders'] = Object.freeze([
    'emailSecurity',
    'settings',
    'blockSenders',
  ] as const);

  /**
   * Creates a new blocked sender pattern. Emails matching this pattern will be
   * blocked from delivery. Patterns can be email addresses, domains, or IP
   * addresses, and support regular expressions.
   *
   * @example
   * ```ts
   * const blockSender =
   *   await client.emailSecurity.settings.blockSenders.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     is_regex: false,
   *     pattern: 'test@example.com',
   *     pattern_type: 'EMAIL',
   *   });
   * ```
   */
  create(params: BlockSenderCreateParams, options?: RequestOptions): APIPromise<BlockSenderCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/settings/block_senders`, {
        body,
        ...options,
      }) as APIPromise<{ result: BlockSenderCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of blocked email sender patterns. These patterns
   * prevent emails from matching senders from being delivered. Supports filtering by
   * pattern type and searching across patterns.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const blockSenderListResponse of client.emailSecurity.settings.blockSenders.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: BlockSenderListParams,
    options?: RequestOptions,
  ): PagePromise<BlockSenderListResponsesV4PagePaginationArray, BlockSenderListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/settings/block_senders`,
      V4PagePaginationArray<BlockSenderListResponse>,
      { query, ...options },
    );
  }

  /**
   * Removes a blocked sender pattern. After deletion, emails from this sender will
   * no longer be automatically blocked based on this rule.
   *
   * @example
   * ```ts
   * const blockSender =
   *   await client.emailSecurity.settings.blockSenders.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    patternID: string,
    params: BlockSenderDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BlockSenderDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/email-security/settings/block_senders/${patternID}`,
        options,
      ) as APIPromise<{ result: BlockSenderDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Executes multiple operations atomically. All four operation arrays (deletes,
   * patches, puts, posts) are required and executed in order. Send empty arrays for
   * unused operations.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.blockSenders.batch({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     deletes: [
   *       { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415' },
   *     ],
   *     patches: [{}],
   *     posts: [
   *       {
   *         is_regex: false,
   *         pattern: 'test@example.com',
   *         pattern_type: 'EMAIL',
   *       },
   *     ],
   *     puts: [
   *       {
   *         is_regex: false,
   *         pattern: 'test@example.com',
   *         pattern_type: 'EMAIL',
   *       },
   *     ],
   *   });
   * ```
   */
  batch(params: BlockSenderBatchParams, options?: RequestOptions): APIPromise<BlockSenderBatchResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/settings/block_senders/batch`, {
        body,
        ...options,
      }) as APIPromise<{ result: BlockSenderBatchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing blocked sender pattern. Only provided fields will be
   * modified. The pattern will continue blocking emails until deleted.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.blockSenders.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    patternID: string,
    params: BlockSenderEditParams,
    options?: RequestOptions,
  ): APIPromise<BlockSenderEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/email-security/settings/block_senders/${patternID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: BlockSenderEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details for a specific blocked sender pattern including its pattern
   * type, value, and metadata.
   *
   * @example
   * ```ts
   * const blockSender =
   *   await client.emailSecurity.settings.blockSenders.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    patternID: string,
    params: BlockSenderGetParams,
    options?: RequestOptions,
  ): APIPromise<BlockSenderGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/settings/block_senders/${patternID}`,
        options,
      ) as APIPromise<{ result: BlockSenderGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class BlockSenders extends BaseBlockSenders {}

export type BlockSenderListResponsesV4PagePaginationArray = V4PagePaginationArray<BlockSenderListResponse>;

/**
 * A blocked sender pattern.
 */
export interface BlockSenderCreateResponse {
  /**
   * Blocked sender pattern identifier.
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  is_regex?: boolean;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified?: string;

  modified_at?: string;

  /**
   * The pattern value to match. The format depends on `pattern_type`: a valid email
   * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
   * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
   * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
   * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
   * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
   */
  pattern?: string;

  /**
   * Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
   *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
   *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
   *   link-local, unspecified, and IPv4 broadcast addresses, including their
   *   IPv4-mapped IPv6 equivalents.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

/**
 * A blocked sender pattern.
 */
export interface BlockSenderListResponse {
  /**
   * Blocked sender pattern identifier.
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  is_regex?: boolean;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified?: string;

  modified_at?: string;

  /**
   * The pattern value to match. The format depends on `pattern_type`: a valid email
   * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
   * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
   * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
   * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
   * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
   */
  pattern?: string;

  /**
   * Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
   *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
   *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
   *   link-local, unspecified, and IPv4 broadcast addresses, including their
   *   IPv4-mapped IPv6 equivalents.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

export interface BlockSenderDeleteResponse {
  /**
   * Blocked sender pattern identifier.
   */
  id: string;
}

export interface BlockSenderBatchResponse {
  deletes?: Array<BlockSenderBatchResponse.Delete>;

  patches?: Array<BlockSenderBatchResponse.Patch>;

  posts?: Array<BlockSenderBatchResponse.Post>;

  puts?: Array<BlockSenderBatchResponse.Put>;
}

export namespace BlockSenderBatchResponse {
  export interface Delete {
    /**
     * Blocked sender pattern identifier.
     */
    id: string;
  }

  /**
   * A blocked sender pattern.
   */
  export interface Patch {
    /**
     * Blocked sender pattern identifier.
     */
    id?: string;

    comments?: string | null;

    created_at?: string;

    is_regex?: boolean;

    /**
     * @deprecated Use `modified_at` instead.
     */
    last_modified?: string;

    modified_at?: string;

    /**
     * The pattern value to match. The format depends on `pattern_type`: a valid email
     * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
     * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
     * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
     * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
     * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
     */
    pattern?: string;

    /**
     * Type of pattern matching.
     *
     * - EMAIL: matches a full email address (e.g. `user@example.com`)
     * - DOMAIN: matches a domain name (e.g. `example.com`)
     * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
     *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
     *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
     *   link-local, unspecified, and IPv4 broadcast addresses, including their
     *   IPv4-mapped IPv6 equivalents.
     * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
     *   but it may appear on existing entries.
     */
    pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
  }

  /**
   * A blocked sender pattern.
   */
  export interface Post {
    /**
     * Blocked sender pattern identifier.
     */
    id?: string;

    comments?: string | null;

    created_at?: string;

    is_regex?: boolean;

    /**
     * @deprecated Use `modified_at` instead.
     */
    last_modified?: string;

    modified_at?: string;

    /**
     * The pattern value to match. The format depends on `pattern_type`: a valid email
     * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
     * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
     * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
     * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
     * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
     */
    pattern?: string;

    /**
     * Type of pattern matching.
     *
     * - EMAIL: matches a full email address (e.g. `user@example.com`)
     * - DOMAIN: matches a domain name (e.g. `example.com`)
     * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
     *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
     *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
     *   link-local, unspecified, and IPv4 broadcast addresses, including their
     *   IPv4-mapped IPv6 equivalents.
     * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
     *   but it may appear on existing entries.
     */
    pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
  }

  /**
   * A blocked sender pattern.
   */
  export interface Put {
    /**
     * Blocked sender pattern identifier.
     */
    id?: string;

    comments?: string | null;

    created_at?: string;

    is_regex?: boolean;

    /**
     * @deprecated Use `modified_at` instead.
     */
    last_modified?: string;

    modified_at?: string;

    /**
     * The pattern value to match. The format depends on `pattern_type`: a valid email
     * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
     * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
     * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
     * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
     * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
     */
    pattern?: string;

    /**
     * Type of pattern matching.
     *
     * - EMAIL: matches a full email address (e.g. `user@example.com`)
     * - DOMAIN: matches a domain name (e.g. `example.com`)
     * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
     *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
     *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
     *   link-local, unspecified, and IPv4 broadcast addresses, including their
     *   IPv4-mapped IPv6 equivalents.
     * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
     *   but it may appear on existing entries.
     */
    pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
  }
}

/**
 * A blocked sender pattern.
 */
export interface BlockSenderEditResponse {
  /**
   * Blocked sender pattern identifier.
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  is_regex?: boolean;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified?: string;

  modified_at?: string;

  /**
   * The pattern value to match. The format depends on `pattern_type`: a valid email
   * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
   * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
   * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
   * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
   * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
   */
  pattern?: string;

  /**
   * Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
   *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
   *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
   *   link-local, unspecified, and IPv4 broadcast addresses, including their
   *   IPv4-mapped IPv6 equivalents.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

/**
 * A blocked sender pattern.
 */
export interface BlockSenderGetResponse {
  /**
   * Blocked sender pattern identifier.
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  is_regex?: boolean;

  /**
   * @deprecated Use `modified_at` instead.
   */
  last_modified?: string;

  modified_at?: string;

  /**
   * The pattern value to match. The format depends on `pattern_type`: a valid email
   * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
   * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
   * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
   * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
   * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
   */
  pattern?: string;

  /**
   * Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
   *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
   *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
   *   link-local, unspecified, and IPv4 broadcast addresses, including their
   *   IPv4-mapped IPv6 equivalents.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

export interface BlockSenderCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  is_regex: boolean;

  /**
   * Body param: The pattern value to match. The format depends on `pattern_type`: a
   * valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for
   * DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for
   * IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or
   * `2606:4700:4700::/48`); the API rejects private or unique-local, loopback,
   * link-local, unspecified, and IPv4 broadcast addresses, including their
   * IPv4-mapped IPv6 equivalents.
   */
  pattern: string;

  /**
   * Body param: Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
   *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
   *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
   *   link-local, unspecified, and IPv4 broadcast addresses, including their
   *   IPv4-mapped IPv6 equivalents.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
   */
  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Body param
   */
  comments?: string | null;
}

export interface BlockSenderListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to sort by.
   */
  order?: 'pattern' | 'created_at';

  /**
   * Query param: Filter by pattern value.
   */
  pattern?: string;

  /**
   * Query param: Filter by pattern type.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  /**
   * Query param: Search term for filtering records. Behavior may change.
   */
  search?: string;
}

export interface BlockSenderDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface BlockSenderBatchParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  deletes: Array<BlockSenderBatchParams.Delete>;

  /**
   * Body param
   */
  patches: Array<BlockSenderBatchParams.Patch>;

  /**
   * Body param
   */
  posts: Array<BlockSenderBatchParams.Post>;

  /**
   * Body param
   */
  puts: Array<BlockSenderBatchParams.Put>;
}

export namespace BlockSenderBatchParams {
  export interface Delete {
    /**
     * Blocked sender pattern identifier.
     */
    id: string;
  }

  /**
   * A blocked sender pattern.
   */
  export interface Patch {
    comments?: string | null;

    is_regex?: boolean;

    /**
     * The pattern value to match. The format depends on `pattern_type`: a valid email
     * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
     * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
     * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
     * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
     * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
     */
    pattern?: string;

    /**
     * Type of pattern matching.
     *
     * - EMAIL: matches a full email address (e.g. `user@example.com`)
     * - DOMAIN: matches a domain name (e.g. `example.com`)
     * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
     *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
     *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
     *   link-local, unspecified, and IPv4 broadcast addresses, including their
     *   IPv4-mapped IPv6 equivalents.
     * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
     *   but it may appear on existing entries.
     */
    pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
  }

  /**
   * Create a blocked sender pattern.
   */
  export interface Post {
    is_regex: boolean;

    /**
     * The pattern value to match. The format depends on `pattern_type`: a valid email
     * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
     * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
     * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
     * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
     * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
     */
    pattern: string;

    /**
     * Type of pattern matching.
     *
     * - EMAIL: matches a full email address (e.g. `user@example.com`)
     * - DOMAIN: matches a domain name (e.g. `example.com`)
     * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
     *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
     *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
     *   link-local, unspecified, and IPv4 broadcast addresses, including their
     *   IPv4-mapped IPv6 equivalents.
     * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
     *   but it may appear on existing entries.
     */
    pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

    comments?: string | null;
  }

  /**
   * A blocked sender pattern.
   */
  export interface Put {
    is_regex: boolean;

    /**
     * The pattern value to match. The format depends on `pattern_type`: a valid email
     * address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN
     * (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g.
     * `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the
     * API rejects private or unique-local, loopback, link-local, unspecified, and IPv4
     * broadcast addresses, including their IPv4-mapped IPv6 equivalents.
     */
    pattern: string;

    /**
     * Type of pattern matching.
     *
     * - EMAIL: matches a full email address (e.g. `user@example.com`)
     * - DOMAIN: matches a domain name (e.g. `example.com`)
     * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
     *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
     *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
     *   link-local, unspecified, and IPv4 broadcast addresses, including their
     *   IPv4-mapped IPv6 equivalents.
     * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
     *   but it may appear on existing entries.
     */
    pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

    comments?: string | null;
  }
}

export interface BlockSenderEditParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  comments?: string | null;

  /**
   * Body param
   */
  is_regex?: boolean;

  /**
   * Body param: The pattern value to match. The format depends on `pattern_type`: a
   * valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for
   * DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for
   * IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or
   * `2606:4700:4700::/48`); the API rejects private or unique-local, loopback,
   * link-local, unspecified, and IPv4 broadcast addresses, including their
   * IPv4-mapped IPv6 equivalents.
   */
  pattern?: string;

  /**
   * Body param: Type of pattern matching.
   *
   * - EMAIL: matches a full email address (e.g. `user@example.com`)
   * - DOMAIN: matches a domain name (e.g. `example.com`)
   * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or
   *   `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or
   *   `2606:4700:4700::/48`). The API rejects private or unique-local, loopback,
   *   link-local, unspecified, and IPv4 broadcast addresses, including their
   *   IPv4-mapped IPv6 equivalents.
   * - UNKNOWN: deprecated; you cannot use this when creating or updating policies,
   *   but it may appear on existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

export interface BlockSenderGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export declare namespace BlockSenders {
  export {
    type BlockSenderCreateResponse as BlockSenderCreateResponse,
    type BlockSenderListResponse as BlockSenderListResponse,
    type BlockSenderDeleteResponse as BlockSenderDeleteResponse,
    type BlockSenderBatchResponse as BlockSenderBatchResponse,
    type BlockSenderEditResponse as BlockSenderEditResponse,
    type BlockSenderGetResponse as BlockSenderGetResponse,
    type BlockSenderListResponsesV4PagePaginationArray as BlockSenderListResponsesV4PagePaginationArray,
    type BlockSenderCreateParams as BlockSenderCreateParams,
    type BlockSenderListParams as BlockSenderListParams,
    type BlockSenderDeleteParams as BlockSenderDeleteParams,
    type BlockSenderBatchParams as BlockSenderBatchParams,
    type BlockSenderEditParams as BlockSenderEditParams,
    type BlockSenderGetParams as BlockSenderGetParams,
  };
}
