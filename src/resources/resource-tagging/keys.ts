// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPaginationAfter, type CursorPaginationAfterParams } from '../../pagination';

export class Keys extends APIResource {
  /**
   * Lists all distinct tag keys used across resources in an account.
   */
  list(
    params: KeyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<KeyListResponsesCursorPaginationAfter, KeyListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/tags/keys`,
      KeyListResponsesCursorPaginationAfter,
      { query, ...options },
    );
  }
}

export class KeyListResponsesCursorPaginationAfter extends CursorPaginationAfter<KeyListResponse> {}

export type KeyListResponse = string;

export interface KeyListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

Keys.KeyListResponsesCursorPaginationAfter = KeyListResponsesCursorPaginationAfter;

export declare namespace Keys {
  export {
    type KeyListResponse as KeyListResponse,
    KeyListResponsesCursorPaginationAfter as KeyListResponsesCursorPaginationAfter,
    type KeyListParams as KeyListParams,
  };
}
