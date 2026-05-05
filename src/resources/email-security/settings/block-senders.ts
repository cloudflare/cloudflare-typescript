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
 * A blocked sender pattern
 */
export interface BlockSenderCreateResponse {
  /**
   * Blocked sender pattern identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  is_regex?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  pattern?: string;

  /**
   * Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when
   * creating or updating policies, but may be returned for existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

/**
 * A blocked sender pattern
 */
export interface BlockSenderListResponse {
  /**
   * Blocked sender pattern identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  is_regex?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  pattern?: string;

  /**
   * Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when
   * creating or updating policies, but may be returned for existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

export interface BlockSenderDeleteResponse {
  /**
   * Blocked sender pattern identifier
   */
  id: string;
}

/**
 * A blocked sender pattern
 */
export interface BlockSenderEditResponse {
  /**
   * Blocked sender pattern identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  is_regex?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  pattern?: string;

  /**
   * Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when
   * creating or updating policies, but may be returned for existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

/**
 * A blocked sender pattern
 */
export interface BlockSenderGetResponse {
  /**
   * Blocked sender pattern identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  is_regex?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  pattern?: string;

  /**
   * Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when
   * creating or updating policies, but may be returned for existing entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

export interface BlockSenderCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  is_regex: boolean;

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
   * Body param
   */
  comments?: string | null;
}

export interface BlockSenderListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
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
   * Identifier.
   */
  account_id: string;
}

export interface BlockSenderEditParams {
  /**
   * Path param: Identifier.
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
   * Body param
   */
  pattern?: string;

  /**
   * Body param: Type of pattern matching. Note: UNKNOWN is deprecated and cannot be
   * used when creating or updating policies, but may be returned for existing
   * entries.
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';
}

export interface BlockSenderGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace BlockSenders {
  export {
    type BlockSenderCreateResponse as BlockSenderCreateResponse,
    type BlockSenderListResponse as BlockSenderListResponse,
    type BlockSenderDeleteResponse as BlockSenderDeleteResponse,
    type BlockSenderEditResponse as BlockSenderEditResponse,
    type BlockSenderGetResponse as BlockSenderGetResponse,
    type BlockSenderListResponsesV4PagePaginationArray as BlockSenderListResponsesV4PagePaginationArray,
    type BlockSenderCreateParams as BlockSenderCreateParams,
    type BlockSenderListParams as BlockSenderListParams,
    type BlockSenderDeleteParams as BlockSenderDeleteParams,
    type BlockSenderEditParams as BlockSenderEditParams,
    type BlockSenderGetParams as BlockSenderGetParams,
  };
}
