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

export class BlockSenders extends APIResource {
  /**
   * Create a blocked email sender
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
   * List blocked email senders
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
   * Delete a blocked email sender
   */
  delete(
    patternID: number,
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
   * Update a blocked email sender
   */
  edit(
    patternID: number,
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
   * Get a blocked email sender
   */
  get(
    patternID: number,
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

export type BlockSenderListResponsesV4PagePaginationArray = V4PagePaginationArray<BlockSenderListResponse>;

export interface BlockSenderCreateResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;

  created_at: string;

  is_regex: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  comments?: string | null;
}

export interface BlockSenderListResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;

  created_at: string;

  is_regex: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  comments?: string | null;
}

export interface BlockSenderDeleteResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;
}

export interface BlockSenderEditResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;

  created_at: string;

  is_regex: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  comments?: string | null;
}

export interface BlockSenderGetResponse {
  /**
   * The unique identifier for the allow policy.
   */
  id: number;

  created_at: string;

  is_regex: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  comments?: string | null;
}

export interface BlockSenderCreateParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  is_regex: boolean;

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
  comments?: string | null;
}

export interface BlockSenderListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

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
}

export interface BlockSenderDeleteParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface BlockSenderEditParams {
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
  is_regex?: boolean | null;

  /**
   * Body param:
   */
  pattern?: string | null;

  /**
   * Body param:
   */
  pattern_type?: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN' | null;
}

export interface BlockSenderGetParams {
  /**
   * Account Identifier
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
