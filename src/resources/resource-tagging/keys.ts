// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { CursorPaginationAfter, type CursorPaginationAfterParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Lists all distinct tag keys used across resources in an account.
   */
  list(
    params: KeyListParams,
    options?: RequestOptions,
  ): PagePromise<KeyListResponsesCursorPaginationAfter, KeyListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/tags/keys`,
      CursorPaginationAfter<KeyListResponse>,
      { query, ...options },
    );
  }
}

export type KeyListResponsesCursorPaginationAfter = CursorPaginationAfter<KeyListResponse>;

export type KeyListResponse = string;

export interface KeyListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export declare namespace Keys {
  export {
    type KeyListResponse as KeyListResponse,
    type KeyListResponsesCursorPaginationAfter as KeyListResponsesCursorPaginationAfter,
    type KeyListParams as KeyListParams,
  };
}
