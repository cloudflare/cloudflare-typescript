// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BlockSendersAPI from './block-senders';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class BlockSenders extends APIResource {
  /**
   * Create a blocked email sender
   */
  create(
    params: BlockSenderCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockSenderCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/settings/block_senders`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: BlockSenderCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List blocked email senders
   */
  list(
    params: BlockSenderListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BlockSenderListResponsesV4PagePaginationArray, BlockSenderListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/settings/block_senders`,
      BlockSenderListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a blocked email sender
   */
  delete(
    patternId: number,
    params: BlockSenderDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockSenderDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/email-security/settings/block_senders/${patternId}`,
        options,
      ) as Core.APIPromise<{ result: BlockSenderDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a blocked email sender
   */
  edit(
    patternId: number,
    params: BlockSenderEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockSenderEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/email-security/settings/block_senders/${patternId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: BlockSenderEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a blocked email sender
   */
  get(
    patternId: number,
    params: BlockSenderGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockSenderGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/settings/block_senders/${patternId}`,
        options,
      ) as Core.APIPromise<{ result: BlockSenderGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class BlockSenderListResponsesV4PagePaginationArray extends V4PagePaginationArray<BlockSenderListResponse> {}

export type BlockSenderCreateResponse =
  | BlockSenderCreateResponse.EmailSecurityBlockedSender
  | Array<BlockSenderCreateResponse.UnionMember1>;

export namespace BlockSenderCreateResponse {
  export interface EmailSecurityBlockedSender {
    id: number;

    created_at: string;

    is_regex: boolean;

    last_modified: string;

    pattern: string;

    pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

    comments?: string | null;
  }

  export interface UnionMember1 {
    id: number;

    created_at: string;

    is_regex: boolean;

    last_modified: string;

    pattern: string;

    pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

    comments?: string | null;
  }
}

export interface BlockSenderListResponse {
  id: number;

  created_at: string;

  is_regex: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  comments?: string | null;
}

export interface BlockSenderDeleteResponse {
  id: number;
}

export interface BlockSenderEditResponse {
  id: number;

  created_at: string;

  is_regex: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  comments?: string | null;
}

export interface BlockSenderGetResponse {
  id: number;

  created_at: string;

  is_regex: boolean;

  last_modified: string;

  pattern: string;

  pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

  comments?: string | null;
}

export type BlockSenderCreateParams =
  | BlockSenderCreateParams.EmailSecurityCreateBlockedSender
  | BlockSenderCreateParams.Variant1;

export namespace BlockSenderCreateParams {
  export interface EmailSecurityCreateBlockedSender {
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

  export interface Variant1 {
    /**
     * Path param: Account Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: Array<BlockSenderCreateParams.Variant1.Body>;
  }

  export namespace Variant1 {
    export interface Body {
      is_regex: boolean;

      pattern: string;

      pattern_type: 'EMAIL' | 'DOMAIN' | 'IP' | 'UNKNOWN';

      comments?: string | null;
    }
  }
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

export namespace BlockSenders {
  export import BlockSenderCreateResponse = BlockSendersAPI.BlockSenderCreateResponse;
  export import BlockSenderListResponse = BlockSendersAPI.BlockSenderListResponse;
  export import BlockSenderDeleteResponse = BlockSendersAPI.BlockSenderDeleteResponse;
  export import BlockSenderEditResponse = BlockSendersAPI.BlockSenderEditResponse;
  export import BlockSenderGetResponse = BlockSendersAPI.BlockSenderGetResponse;
  export import BlockSenderListResponsesV4PagePaginationArray = BlockSendersAPI.BlockSenderListResponsesV4PagePaginationArray;
  export import BlockSenderCreateParams = BlockSendersAPI.BlockSenderCreateParams;
  export import BlockSenderListParams = BlockSendersAPI.BlockSenderListParams;
  export import BlockSenderDeleteParams = BlockSendersAPI.BlockSenderDeleteParams;
  export import BlockSenderEditParams = BlockSendersAPI.BlockSenderEditParams;
  export import BlockSenderGetParams = BlockSendersAPI.BlockSenderGetParams;
}
